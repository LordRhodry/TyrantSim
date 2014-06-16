function updatelist()
{
	var cardtoadd = [];
	var skilltoadd = [[]];
	var skillind =0;
	/*if (localStorage.CardsIds)
	{
		ids = localStorage.CardsIds.split(","); 
	}*/
	$.ajax({
		type: "GET",
		url: "cards.xml",
		dataType: "xml",
		success: parseXml
	});
	function parseXml(xml)
	{
	console.log("start");
		/* Prepare sortable skills
	var sortable_skills = ['antiair', 'armored', 'augment', 'berserk', 'burst', 'counter', 'crush', 'enfeeble', 'flurry', 'heal', 'leech', 'legion', 'pierce', 'poison', 'protect', 'regenerate', 'rally', 'siege', 'siphon', 'strike', 'supply', 'weaken', 'valor'];
	for (i in sortable_skills) {
		$('#header_tr').append($('<th>'+sortable_skills[i].toTitleCase()+' &nbsp; &nbsp;'+'</th>').attr('class',sortable_skills[i]+'_td'));
	}*/

	// Prepare rarities
		var rarities = { 1 : 'Common', 2 : 'Rare', 3 : 'Epic', 4 : 'Legendary', 5 : 'Vindicator' };

	// Load the factions
		var factions = {};
		var root = $(xml).find("root");
		root.find("unitType").each(function()
		{
			factions[$(this).find("id").text()] = $(this).find("name").text();
		});

	// Load the sets
		var sets = {};
		root.find("cardSet").each(function()
		{
			sets[$(this).find("id").text()] = $(this).find("name").text();
		});

	// Insert row data
	root.find("unit").each(function()
	{
		skilltoadd=[[]];
		skillind=-1;
		var set_num = $(this).find("set").text();
		//	if (!set_num || set_num == '9999'|| set_num == '1000') return;
		upgrade = $(this).find("upgrade");
		$(this).find("upgrade").remove();
		type = "";
		
		
		id = parseInt($(this).find("id").text());
		var name = $(this).find("name").text();
		if (set_num == '9999')
		{
			name += " alt";
		}
		atk = $(this).find("attack").text();
		hp = $(this).find("health").text();
		cost = $(this).find("cost").text();
		if (!atk)
		{
			type ="Structure";
		}
		else if ( !cost)
		{
			type ="Commander";
		}
		else
		{
			type ="Assault";
		}
			
				// Get rarity
		rarity_text = "";
		var rarity = $(this).find("rarity").text();
		if (rarity) rarity_text = rarities[rarity];
				
				// Get faction
		faction_text = "";
		var faction = factions[$(this).find("type").text()];
		if (faction) faction_text = faction;
			
				// Get set
		set_text = "";
		var cardset = sets[set_num];
		if (cardset) set_text = cardset;
			
		cardtoadd[id] = {"CardName":name,"Type":type,"Rarity":rarity_text,"Faction":faction_text,"Cost":null,"Fusion":null,"Set":set_text,"Attack":parseInt(atk),"Health":parseInt(hp),"Delay":parseInt(cost),"Enfeeble":null,"Enfeeble_A":null,"Heal":null,"Heal_F":null,"Heal_A":null,"Heal_AF":null,"Protect":null,"Protect_F":null,"Protect_A":null,"Protect_AF":null,"Rally":null,"Rally_F":null,"Rally_A":null,"Rally_AF":null,"Siege":null,"Siege_A":null,"Strike":null,"Strike_A":null,"Weaken":null,"Weaken_A":null,"Jam":null,"Pierce":null,"Berzerk":null,"Leech":null,"Poison":null,"Evade":null,"Armor":null,"Counter":null,"Corrosive":null,"Wall":null,"Inhibit":null,"E_Leech":null,"E_Leech_A":null,"E_Poison":null,"E_Poison_A":null,"E_Counter":null,"E_Counter_A":null,"E_Armor":null,"E_Armor_A":null,"E_Berzerk":null,"E_Berzerk_A":null,"E_Evade":null,"E_Evade_A":null,"E_Corrosive":null,"E_Corrosive_A":null};
			

			
//		else if (!atk && !hp && !cost) type = "Action";
//		if (id % 4000 < 1000) type = 'Assault';
//		else if (id % 4000 < 2000) type = 'Commander';
//		else if (id % 4000 < 3000) type = 'Structure';
//		else type = 'Action';
		
				// Get skills
		var skill_text = "";
		$(this).find("skill").each(function()
		{
			skillind++ ;
			skill_text = "";
			skill_text = $(this).attr("id");
			skill_text = skill_text.charAt(0).toUpperCase() + skill_text.substr(1).toLowerCase();
			
			if (skill_text =="Enhance")
			{
				var temp_text = $(this).attr("s");
				temp_text = temp_text.charAt(0).toUpperCase() + temp_text.substr(1).toLowerCase();
				if (temp_text == "Armored")
				{
					temp_text = "Armor";
				}
				if (temp_text == "Berserk")
				{
					temp_text = "Berzerk";
				}
				skill_text = "E_" + temp_text;
			}
			if (skill_text == "Armored")
			{
				skill_text = "Armor";
			}
			if (skill_text == "Berserk")
			{
				skill_text = "Berzerk";
			}
			skilltoadd[skillind]=[];
			skilltoadd[skillind][0]=skill_text;

			if ($(this).attr("all"))
			{
				if ($(this).attr("y"))
				{
					skill_text += "_AF";
				}
				else
				{
					skill_text += "_A";
				}
			}
			else if ($(this).attr("y")) 
			{

						skill_text += "_F";

			}
			skilltoadd[skillind][1] = skill_text;

			if ($(this).attr("x")) 
			{
				skilltoadd[skillind][2]= parseInt($(this).attr("x"));
			}
			else
			{
				if (skill_text == "Jam")
				{
					skilltoadd[skillind][2] = parseInt($(this).attr("c"));
				}				
				else
				{
					skilltoadd[skillind][2] = 1;
				}
			}
		});
		for (var i=0; i<skilltoadd.length ; i++)
		{
			eval('cardtoadd[id].'+ skilltoadd[i][1] +'=' + skilltoadd[i][2]);
		}
			


				// Upgrades
		upgrade_level = 1;
		$(upgrade).each(function ()
		{
			upgrade_level++;
			var upgrade_name = name + ' Lv.' + upgrade_level;
			if ($(this).find("attack").text()) atk = parseInt( $(this).find("attack").text());
			if ($(this).find("health").text()) hp = parseInt($(this).find("health").text());
			if ($(this).find("cost").text()) cost = parseInt($(this).find("cost").text());
			upgrade_id =parseInt( $(this).find("card_id").text());
			cardtoadd[upgrade_id] = {"CardName":upgrade_name,"Type":type,"Rarity":rarity_text,"Faction":faction_text,"Cost":null,"Fusion":null,"Set":set_text,"Attack":parseInt(atk),"Health":parseInt(hp),"Delay":parseInt(cost),"Enfeeble":null,"Enfeeble_A":null,"Heal":null,"Heal_F":null,"Heal_A":null,"Heal_AF":null,"Protect":null,"Protect_F":null,"Protect_A":null,"Protect_AF":null,"Rally":null,"Rally_F":null,"Rally_A":null,"Rally_AF":null,"Siege":null,"Siege_A":null,"Strike":null,"Strike_A":null,"Weaken":null,"Weaken_A":null,"Jam":null,"Pierce":null,"Berzerk":null,"Leech":null,"Poison":null,"Evade":null,"Armor":null,"Counter":null,"Corrosive":null,"Wall":null,"Inhibit":null,"E_Leech":null,"E_Leech_A":null,"E_Poison":null,"E_Poison_A":null,"E_Counter":null,"E_Counter_A":null,"E_Armor":null,"E_Armor_A":null,"E_Berzerk":null,"E_Berzerk_A":null,"E_Evade":null,"E_Evade_A":null,"E_Corrosive":null,"E_Corrosive_A":null};
			
			
			$(this).find("skill").each(function()
			{
				skillind = -1;
				skill_text = "";
				skill_text = $(this).attr("id");
				skill_text = skill_text.charAt(0).toUpperCase() + skill_text.substr(1).toLowerCase();
			
				if (skill_text =="Enhance")
				{
					var temp_text = $(this).attr("s");
					temp_text = temp_text.charAt(0).toUpperCase() + temp_text.substr(1).toLowerCase();
					if (temp_text == "Armored")
					{
						temp_text = "Armor";
					}
					if (temp_text == "Berserk")
					{
						temp_text = "Berzerk";
					}
					skill_text = "E_" + temp_text;
				}
				if (skill_text == "Armored")
				{
					skill_text = "Armor";
				}
				if (skill_text == "Berserk")
				{
					skill_text = "Berzerk";
				}
				for (var i=0; i< skilltoadd.length ; i++)
				{
					if (skilltoadd[i][0] == skill_text)
					{
						skillind= i;
					}
				}
				if (skillind == -1 )
				{
					skillind = skilltoadd.length;
					skilltoadd[skillind] =[];
					skilltoadd[skillind][0]=skill_text;
				}
				if ($(this).attr("all"))
				{
					if ($(this).attr("y"))
					{
						skill_text += "_AF";
					}
					else
					{
						skill_text += "_A";
					}
				}
				else if ($(this).attr("y")) 
				{

						skill_text += "_F";

				}
				skilltoadd[skillind][1] = skill_text;
				
				if ($(this).attr("x")) 
				{
					skilltoadd[skillind][2]= parseInt($(this).attr("x"));
				}
				else
				{
					if (skill_text == "Jam")
					{
						skilltoadd[skillind][2] = parseInt($(this).attr("c"));
					}
					else
					{
						skilltoadd[skillind][2] = 1;
					}
				}
			});
			for (var i=0; i<skilltoadd.length ; i++)
			{
				eval('cardtoadd[upgrade_id].'+ skilltoadd[i][1] +'=' + skilltoadd[i][2]);
			}
					 
		});
	

	});
		var msg = "Cardlist = [";
		for (var i=0; i<cardtoadd.length ;i++)
		{
			if (cardtoadd[i])
			{
				msg += JSON.stringify(cardtoadd[i]);
			}
			msg += ",<br>";

		}
		msg+= "];"

			
			
		document.getElementById('cardlist').innerHTML = msg;	

	};

	
}

function updatedecks(cardlist)
{
	var decklist =[];
	var position = 0;


	$.ajax({
		type: "GET",
		url: "missions.xml",
		dataType: "xml",
		success: parseXmll
	});
	function parseXmll(xml)
	{
		console.log("start");
		var root = $(xml).find("root");
		root.find("mission").each(function()
		{
			$(this).find("star").remove(); //the star field also had "id" creating issues.
			position = parseInt($(this).find("id").text());
			decklist[position]=[];
			decklist[position][0] = '"' +$(this).find("name").text() +'"';
			decklist[position][1] = findMaxlevel(parseInt($(this).find("commander").text()),cardlist);
			
			var deck = $(this).find("deck");
			$(deck).find("card").each(function()
			{
				decklist[position][decklist[position].length] = findMaxlevel(parseInt($(this).text()),cardlist);
			});

		});
		var mssg= "presetDecks = [";
		for (var i=0 ; i< decklist.length ; i ++)
		{
			if (decklist[i])
			{
				mssg += "[" + decklist[i].toString() + "]";
			}
			
			mssg += ",";
		}
		mssg = mssg.substring(0,mssg.length - 1) +"];";

		document.getElementById('decklist').innerHTML = mssg;

	};
}

function findMaxlevel( pos , cardlist)
{
	var cardname = cardlist[pos].CardName;
	var found = -1;
	var namelength = cardname.length;
	if (cardname.substring(namelength-4,namelength-1) == "Lv.")
	{
		namelength -= 5;
		cardname = cardname.substring(0,namelength);
	}
	var ind = [0,0,0];
	var place = 0;
	while ((found < 2)&&(place<cardlist.length))
	{
		if (cardlist[place])
		{
		if (cardlist[place].CardName == cardname + " Lv.3")
		{
			found ++;
			ind[found] = place;
			place ++;
		}
		else if(cardlist[place].CardName == cardname + " Lv.4")
		{
			found ++;
			ind[found] = place;
			place ++;
		}
		else if(cardlist[place].CardName == cardname + " Lv.6")
		{
			found ++;
			ind[found] = place;
			place ++;
		}
		else
		{
			place ++;
		}
		}
		else
		{
			place ++;
		}
	}
	return ind[found];
}
