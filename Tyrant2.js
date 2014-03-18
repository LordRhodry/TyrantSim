var usedCardlist = [];
var skillList =["Enfeeble","Enfeeble_A","Heal","Heal_F","Heal_A","Heal_AF","Protect","Protect_F","Protect_A","Protect_AF","Rally","Rally_F","Rally_A","Rally_AF","Siege","Siege_A","Strike","Strike_A","Weaken","Weaken_A","Jam","Pierce","Berzerk","Leech","Poison","Evade","Armor","Counter","Wall","E_Leech","E_Leech_A","E_Poison","E_Poison_A","E_Counter","E_Counter_A","E_Armor","E_Armor_A","E_Berzerk","E_Berzerk_A","E_Evade","E_Evade_A"];
var activSkill =["Enfeeble","Enfeeble_A","Heal","Heal_F","Heal_A","Heal_AF","Protect","Protect_F","Protect_A","Protect_AF","Rally","Rally_F","Rally_A","Rally_AF","Siege","Siege_A","Strike","Strike_A","Weaken","Weaken_A","Jam","E_Leech","E_Leech_A","E_Poison","E_Poison_A","E_Counter","E_Counter_A","E_Armor","E_Armor_A","E_Berzerk","E_Berzerk_A","E_Evade","E_Evade_A"];

var presetDecks = [["Sample Deck",1944,1358,854,1731,1996,407,784],["Razogoth",1484,1782,1508,508,388,1508,299,796,1141,1215,1221],["DinosaurTS",66,1358,1722,680,2128],["Agmeus 10",2481,2487,2487,1938,1528,956,892,1427,42,1200,1518],["Vargas 10",2499,2493,2493,2487,42,1263,121,910,956,1876,11],["GDR-5000 10",2505,2493,2487,2511,2511,1329,2517,121,1263,892,1200]];
var currentDecks = [[],[]];
var optimScore = 0;
var optimDeck = [];
var assault = [[],[]];
var struct = [[],[]];
var commander = [];
var inDeck = [[],[]];
var ordered = false;
var battle =0;
var enh_heal = 0;
var batskillname ="";
var batskillvalue =0;


function AddCollection(form, cardlist){
var test = form.fname.value;


// check if card name exist and add it to the collection in local storage (stored as a comma separated string)
for (var i=0 ; i<cardlist.length ; i++ )
{
	if (cardlist[i].CardName == test)
	{
		if (localStorage.collection)
		{
			var collectionArray = localStorage.collection.split(",");
			collectionArray[collectionArray.length]=i;
			localStorage.collection = collectionArray.toString();
		}
		else
		{
			localStorage.collection=i ;
		}
		if (document.getElementById("collectionList").innerHTML != "")
		{
			showCollection(cardlist);
			showCollection(cardlist);
		}
		else
		{
			showCollection(cardlist);
		}
		return;
/*		var options = "";
		var collectionArray = localStorage.collection.split(",");
		for (var i=0 ; i< collectionArray.length ; i++)
		{
			options += '<option value="'+Cardlist[collectionArray[i]].CardName +'">';
		}
		document.getElementById('collectionlist').innerHTML = options;
		return;*/
	}
}

window.alert("This card does not exist. Make sure you did not add a space or enter Lv.1");

}
function showCollection(cardlist)
{
	if (document.getElementById("collectionList").innerHTML == ""){
	var myTable= '<table id="coltable" border=1 class="sortable2"><thead data-header="true"><tr><th data-sort-column="true"> Card Name</th>';
    myTable+= "<th data-sort-column='true'> Faction</th>";
    myTable+="<th data-sort-column='true'> Type</th>";
	myTable+="<th data-sort-column='true'> Delay</th>";
	myTable+="<th data-sort-column='true'> Attack</th>";
	myTable+="<th data-sort-column='true'> Health</th>";
	myTable+="<th data-sort-column='true'> Skill 1</th>";
	myTable+="<th data-sort-column='true'> Skill 2</th>";
	myTable+="<th data-sort-column='true'> Skill 3</th>";
	myTable+="<th data-sort-column='true'> Delete Card</th>";
	myTable+="<th data-sort-column='true'>Add to optimisation test</th></tr></thead>";
	
    myTable+="<tbody data-body='true'>";

	if (localStorage.collection)
		{
			var collectionArray = localStorage.collection.split(",");
			for (var i=0; i<collectionArray.length; i++) 
			{
				myTable+="<tr><td>" + cardlist[collectionArray[i]].CardName + "</td>";
				myTable+="<td>" + cardlist[collectionArray[i]].Faction + "</td>";
				myTable+="<td>" + cardlist[collectionArray[i]].Type + "</td>";
				myTable+="<td>" + cardlist[collectionArray[i]].Delay + "</td>";
				myTable+="<td>" + cardlist[collectionArray[i]].Attack + "</td>";
				myTable+="<td>" + cardlist[collectionArray[i]].Health + "</td>";
				var skills = [];
				var ind = 0;
				for (var j=0; j<skillList.length ; j++)
				{
					var skillName = skillList[j];
					var command = "cardlist[collectionArray["+ i +"]]."+skillName; 
					if ( eval(command) == null )
					{
					}
					else
					{
						var realName ="";
						if (skillName.charAt(1) == "_")
						{
							realName += "Enhance ";
							skillName = skillName. substring(2);
						}
						if (skillName.charAt(skillName.length - 2) == "A")
						{
							realName += skillName.substring(0,skillName.length - 3) + " All " + cardlist[collectionArray[i]].Faction + " " +eval(command);
							skills[ind] = realName;
							ind++;
						}
						else if (skillName.charAt(skillName.length - 1) == "A")
						{
							realName += skillName.substring(0,skillName.length - 2) + " All "+ eval(command);
							skills[ind] = realName;
							ind++;
						}
						else if (skillName.charAt(skillName.length - 1) == "F")
						{
							realName += skillName.substring(0,skillName.length - 2) + " " + cardlist[collectionArray[i]].Faction + " " + eval(command) ;
							skills[ind] = realName;
							ind++;
						}
						else
						{
							realName += skillName + " " + eval(command);
							skills[ind] = realName;
							ind++;
						}
					}
				}
				myTable+="<td>" + skills[0] + "</td>";
				myTable+="<td>" + skills[1] + "</td>";
				myTable+="<td>" + skills[2] + "</td>";
				myTable+="<td><button onclick=\"removeCard("+i+",Cardlist)\">Click to delete</button></td>"
				myTable+="<td><button onclick=\"addOptim("+i+",Cardlist)\">Add to optim.</button></td></tr>"
			}  
		}
		
		
  
    myTable+="</tbody></table>";
	document.getElementById('collectionList').innerHTML = myTable;
$(function() {
$('.sortable2').sortable();
}); 
	}
	else
	{
		document.getElementById('collectionList').innerHTML = "";
	}

}

function hideCollection()
{
	document.getElementById('collectionList').innerHTML = "";
}

function addOptim( ind , cardlist)
{
	var collectionArray = localStorage.collection.split(",");
	if (localStorage.optimisation)
	{
		var optimArray = localStorage.optimisation.split(",");
		optimArray[optimArray.length]=collectionArray[ind];
		localStorage.optimisation = optimArray.toString();
	}
	else
	{
		localStorage.optimisation = collectionArray[ind];
	}
}

function removeCard (cardId, cardlist) 
{
	collectionArray = localStorage.collection.split(",");
	collectionArray.splice(cardId,1);
	localStorage.collection = collectionArray.toString();
	showCollection(cardlist);
	showCollection(cardlist);
}

function saveDeck ( form , owner, cardlist)
{
	var currentDeck = grabDeck(form ,owner, cardlist);
	for (var i=0; i< presetDecks.length; i++)
	{
		if (currentDeck[0] ==presetDecks[i][0])
		{
			alert("This name is used by default decks. \n Please choose another name for your deck");
			return;
		}
	}
	currentDecks[owner]=currentDeck;
	if (localStorage.deck)
	{
		var deckNameArray = localStorage.deckName.split(",");
		var deckArray = localStorage.deck.split(",");
		deckArray=makeDeckArray(deckArray);
		for (var i=0 ; i< deckNameArray.length ; i++)
		{
			if (deckNameArray[i] == currentDeck[0])
			{
				if (confirm('This deck Already exists. \n Do you want to replace it?'))
				{
					for (var j=1; j<12 ; j++)
					{	
						if (isNumber(currentDeck[j]))
						{
							deckArray[i][j] = currentDeck[j];
						}
					}
					localStorage.deck = deckArray.toString();
				}
				return;
			}
		}
		localStorage.deckName += ","+ currentDeck[0];
		localStorage.deck += ","+ currentDeck.toString();
	}
	else
	{
		localStorage.deck = currentDeck.toString();
		localStorage.deckName = currentDeck[0];
	}
}

function loadDeck (form , owner, cardlist)
{
	var fieldname = "";
	var deckfield = "";
	if (owner == 0)
	{
		fieldpre ="playerCard";
		deckfield = "form.playerDeck.value";
	}
	else
	{
		fieldpre="enemyCard";
		deckfield = "form.enemyDeck.value";
	}
	var nameofdeck =eval(deckfield);
	currentDecks[owner][0] = nameofdeck;
	for (var i=0; i<presetDecks.length ; i++)
	{
		if (presetDecks[i][0] == nameofdeck)
		{
			fieldname =fieldpre + 0;
			currentDecks[owner][1] = presetDecks[i][1];
			usedCardlist[presetDecks[i][1]]=cardlist[presetDecks[i][1]];
			document.getElementsByName(fieldname).item(0).value = cardlist[presetDecks[i][1]].CardName;
			for (var j=1;j<11; j++)
			{
				fieldname = fieldpre + j;
				if (cardlist[presetDecks[i][j+1]])
				{				
					currentDecks[owner][j+1] = presetDecks[i][j+1];
					usedCardlist[presetDecks[i][j+1]]=cardlist[presetDecks[i][j+1]];
					document.getElementsByName(fieldname).item(0).value = cardlist[presetDecks[i][j+1]].CardName;
				}
				else
				{
					document.getElementsByName(fieldname).item(0).value = "";
				}
			}
			return;	
		}
	}
	if (localStorage.deck)
	{
		var deckNames = localStorage.deckName.split(",");
		var deckArray = localStorage.deck.split(",");
		deckArray = makeDeckArray( deckArray);
		for (var i=0; i< deckNames.length ; i++)
		{
			if (deckNames[i] == nameofdeck)
			{
				fieldname = fieldpre + 0;
				usedCardlist[deckArray[i][1]] =cardlist[deckArray[i][1]];
				document.getElementsByName(fieldname).item(0).value = cardlist[deckArray[i][1]].CardName;
				currentDecks[owner]=deckArray[i];
				for (var pickcard = 1; pickcard < 11 ; pickcard ++)
				{
					fieldname = fieldpre + pickcard;
					if (isNumber(deckArray[i][pickcard+1]))
					{
						usedCardlist[deckArray[i][pickcard+1]] =cardlist[deckArray[i][pickcard+1]];
						document.getElementsByName(fieldname).item(0).value = cardlist[deckArray[i][pickcard+1]].CardName;
					}
					else
					{
						document.getElementsByName(fieldname).item(0).value = "";
					}
				}
				return;	
			}
		}
	}
	alert("No such deck");
}

function makeDeckArray(array)
{
	var pos =1;
	var arrayId = 0;
	var result = [[array[0]]];
	for (var i=1; i<array.length ; i++)
	{
		if (isNumber(array[i]))
		{
			result[arrayId][pos]=array[i];
			pos ++;
		}
		else
		{
			arrayId++;
			result[arrayId]=[];
			result[arrayId][0]=array[i];
			pos =1;
		}
	}
	return result;
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function grabDeck (form , owner, cardlist)
{
	var fieldname = "";
	var deckfield = "";
	if (owner == 0)
	{
		var grabbedDeck = [];
		grabbedDeck[0]= form.playerDeck.value;
		var card ="";
		var test = eval("form.playerCard"+0+".value");
		var found = 0;
		for (var i=0 ; i<cardlist.length ; i++ )
		{
			if (cardlist[i].CardName == test)
			{
				if (cardlist[i].Type == "Commander")
				{
					grabbedDeck[1] = i*1;
					usedCardlist[i]=cardlist[i];
					found = 1;
				}
				else
				{
					alert ( test + " is not a commander");
					return;
				}
			}
		}	
		if (found == 0)
		{
			alert (test + " is not a valid card name.");
			return;
		}
		for ( var j=1 ; j< 11 ; j++)
		{
			test =eval ("form.playerCard"+j+".value");
			if (test)
			{
				found = 0;
				for (var i=0 ; i<cardlist.length ; i++ )
				{
					if (cardlist[i].CardName == test)
					{
						grabbedDeck[j+1]=i*1;
						usedCardlist[i] = cardlist[i];
						found = 1;
					}
				}
				if (found == 0)
				{
					alert (test + " is not a valid card name.");
					return;
				}
			}
		}
		return grabbedDeck;
	}
	else
	{
		var grabbedDeck = [];
		grabbedDeck[0]= form.enemyDeck.value;
		var card ="";
		var test = eval("form.enemyCard"+0+".value");
		var found = 0;
		for (var i=0 ; i<cardlist.length ; i++ )
		{
			if (cardlist[i].CardName == test)
			{
				if (cardlist[i].Type == "Commander")
				{
					grabbedDeck[1] = i*1;
					usedCardlist[i]=cardlist[i];
					found = 1;
				}
				else
				{
					alert ( test + " is not a commander");
					return;
				}
			}
		}	
		if (found == 0)
		{
			alert (test + " is not a valid card name.");
			return;
		}
		for ( var j=1 ; j< 11 ; j++)
		{
			test = eval("form.enemyCard"+j+".value");
			if (test)
			{
				found = 0;
				for (var i=0 ; i<cardlist.length ; i++ )
				{
					if (cardlist[i].CardName == test)
					{
						grabbedDeck[j+1]=i*1;
						usedCardlist[i]=cardlist[i];
						found = 1;
					}
				}
				if (found == 0)
				{
					alert (test + " is not a valid card name.");
					return;
				}
			}	
		}
		return grabbedDeck;
	}
}
function winrate(form , numberoftest, noshow)
{
	var trials = 0;
	var victories = 0;
	var batskill ="";
	
	if (numberoftest == null)
	{
		var trials = form.tries.value;
		if (form.battleskill.value == "NA")
		{
			battle =0;
		}
		else
		{
			battle = 1;
			batskill = form.battleskill.value;
			batskillname = batskill.substring(0,batskill.length -2);
			batskillvalue =parseInt( batskill.substring(batskill.length -1));
			if (batskillname == "E_Heal")
			{
				battle = 2;
				enh_heal = batskillvalue;
			}
			else
			{
				var indic =0;
				while (indic<activSkill.length )
				{
					if (activSkill[indic] == batskillname)
					{
						break;
					}
					indic++;
				}
				batskillname = indic;
			}
		}


	}
	else
	{
		trials = numberoftest;
	}

	if (( currentDecks[0].length>0 )&&(currentDecks[1].length>0))
	{
		for (var n=0; n< trials ; n++)
		{
			victories += simulation(form);
		}
		if (noshow)
		{
			return victories;
		}
		else 
		{
			alert(" Out of "+trials+" games, the player won "+ victories +" times");
			enh_heal = 0;
			return victories;
		}
	}
	else
	{
		alert( "Invalid decks. Make sure to first load or validate and save a deck for both the player and the enemy.");
	}
}

function order()
{
	if ( document.getElementById('ordering').checked == true)
	{
		ordered = true;
	}
	else
	{
		ordered = false;
	}						
}


function simulation(form)
{
	var playerDeck = currentDecks[0];
	var enemyDeck = currentDecks[1];
	var message = "";

	commander = [{"health":usedCardlist[playerDeck[1]].Health,"skills":cardskill(playerDeck[1]),"rank":playerDeck[1],"counter":usedCardlist[playerDeck[1]].Counter,"jamcount":0},{"health":usedCardlist[enemyDeck[1]].Health,"skills":cardskill(enemyDeck[1]),"rank":enemyDeck[1],"counter":usedCardlist[enemyDeck[1]].Counter,"jamcount":usedCardlist[enemyDeck[1]].Jam}];
	if ( ordered == true )
	{
		inDeck = [playerDeck.slice(2), fisherYates(enemyDeck.slice(2))];
	}
	else
	{
		inDeck = [fisherYates(playerDeck.slice(2)), fisherYates(enemyDeck.slice(2))];
	}

	
	
	if (battle == 0)
	{
		for (var i=0 ; i< 25; i++)
		{
			if ( unitcount(0, i) == 0 )
			{
				assault = [[],[]];
				struct = [[],[]];
				commander = [];
				inDeck = [[],[]];	
				return 0;
			}
			if (inDeck[0][i])
			{
				play(0, inDeck[0][i]);
			}
			playturn (0);
			
			message = "Player turn: "+i+"\n Player Commander health: "+ commander[0].health +"\n Structures in play: \n";
			for (var j=0 ; j< struct[0].length ; j++)
			{
				message += usedCardlist[struct[0][j].rank].CardName + " health : " + struct[0][j].currentHealth + " \n";
			}
			message += "Assault in play : \n";
			for (var j=0 ; j< assault[0].length ; j++)
			{
				message += usedCardlist[assault[0][j].rank].CardName + " attack : " + assault[0][j].attack+" health : " + assault[0][j].currentHealth + " \n";
			}
			message += "\n Enemy commander health: " + commander[1].health +"\n Structures in play: \n";
			for (var j=0 ; j< struct[1].length ; j++)
			{
				message += usedCardlist[struct[1][j].rank].CardName + " health : " + struct[1][j].currentHealth + " \n";
			}
			message += "Assault in play : \n";
			for (var j=0 ; j< assault[1].length ; j++)
			{
				message += usedCardlist[assault[1][j].rank].CardName + " attack : " + assault[1][j].attack+" health : " + assault[1][j].currentHealth + " \n";
			}
			console.log (message);

			if (commander[1].health < 1)
			{
				assault = [[],[]];
				struct = [[],[]];
				commander = [];
				inDeck = [[],[]];
				return 1;
			}
			if (inDeck[1][i])
			{ 
				play(1, inDeck[1][i]);
			}
			playturn (1);
			
			message = "Enemy turn: "+i+"\n Player Commander health: "+ commander[0].health +"\n Structures in play: \n";
			for (var j=0 ; j< struct[0].length ; j++)
			{
				message += usedCardlist[struct[0][j].rank].CardName + " health : " + struct[0][j].currentHealth + " \n";
			}
			message += "Assault in play : \n";
			for (var j=0 ; j< assault[0].length ; j++)
			{
				message += usedCardlist[assault[0][j].rank].CardName + " attack : " + assault[0][j].attack+" health : " + assault[0][j].currentHealth + " \n";
			}
			message += "\n Enemy commander health: " + commander[1].health +"\n Structures in play: \n";
			for (var j=0 ; j< struct[1].length ; j++)
			{
				message += usedCardlist[struct[1][j].rank].CardName + " health : " + struct[1][j].currentHealth + " \n";
			}
			message += "Assault in play : \n";
			for (var j=0 ; j< assault[1].length ; j++)
			{
				message += usedCardlist[assault[1][j].rank].CardName + " attack : " + assault[1][j].attack + " health : " + assault[1][j].currentHealth + " \n";
			}
			console.log (message);

			if (commander[0].health < 1)
			{
				assault = [[],[]];
				struct = [[],[]];
				commander = [];
				inDeck = [[],[]];
				return 0;
			}
					
		}
	}
	else
	{
		for (var i=0 ; i< 25; i++)
		{
			if (inDeck[1][i])
			{ 
				play(1, inDeck[1][i]);
			}
			playturn (1);

			if (commander[0].health < 1)
			{
				assault = [[],[]];
				struct = [[],[]];
				commander = [];
				inDeck = [[],[]];
				return 0;
			}
			if ( unitcount(0, i) == 0 )
			{
				assault = [[],[]];
				struct = [[],[]];
				commander = [];
				inDeck = [[],[]];	
				return 0;
			}
			if (inDeck[0][i])
			{
				play(0, inDeck[0][i]);
			}
			playturn (0);

			if (commander[1].health < 1)
			{
				assault = [[],[]];
				struct = [[],[]];
				commander = [];
				inDeck = [[],[]];
				return 1;
			}
		}
	}

	assault = [[],[]];
	struct = [[],[]];
	commander = [];
	inDeck = [[],[]];		
	return 0;			
}

function fisherYates ( myArray ) 
{
	var i = myArray.length;
	if ( i == 0 ) return false;
	while ( --i ) 
	{
		var j = Math.floor( Math.random() * ( i + 1 ) );
     		var tempi = myArray[i];
     		var tempj = myArray[j];
     		myArray[i] = tempj;
     		myArray[j] = tempi;
   	}
	return myArray;
}

function cardskill (rank)
{
	var skills = [];
	var ind = 0;
	for (var j=0; j<activSkill.length ; j++)
	{
		var skillName = activSkill[j];
		var command = "usedCardlist["+rank+"]."+skillName; 
		if ( eval(command) == null )
		{
		}
		else
		{
			skills[ind] = {"skillname":j,"level":eval(command)};
			ind++;
		}
	}
	return skills;			
}

function unitcount (who, indice)
{
	var count = 0;
	for ( var i=indice ; i< inDeck[who].length ; i++)
	{
		if (usedCardlist[inDeck[who][i]].Type == "Assault")
		{
			count ++;
		}
	}
	count += assault[who].length;
	return count;
	
}

function play ( who, card )
{
	if (usedCardlist[card].Type == "Structure")
	{
		struct[who][struct[who].length] = {"health":usedCardlist[card].Health, "skills":cardskill(card),"evade":usedCardlist[card].Evade,"wall":usedCardlist[card].Wall,"rank":card,"currentHealth":usedCardlist[card].Health,"faction":usedCardlist[card].Faction,"counter":usedCardlist[card].Counter,"jamcount":0,"delayed":usedCardlist[card].Delay};
	}
	else
	{
		assault[who][assault[who].length] = {"attack":usedCardlist[card].Attack,"health":usedCardlist[card].Health, "skills":cardskill(card),"poisoned":0,"enfeebled":0,"protect":0,"evade":usedCardlist[card].Evade,"rank":card,"currentHealth":usedCardlist[card].Health,"faction":usedCardlist[card].Faction,"armor":usedCardlist[card].Armor,"berzerk":usedCardlist[card].Berzerk,"leech":usedCardlist[card].Leech,"poison":usedCardlist[card].Poison,"pierce":usedCardlist[card].Pierce,"counter":usedCardlist[card].Counter,"berzerked":0,"jamed":0,"jamcount":0,"delayed":usedCardlist[card].Delay};
	}
}

function playturn ( who )
{
	if (battle == 1 )
	{	
		activate (who, batskillname , batskilllevel, "",0); 
	}
	for (var i=0; i< commander[who].skills.length ; i++)
	{
		activate(who, commander[who].skills[i].skillname,commander[who].skills[i].level,0 ,usedCardlist[commander[who].rank].Faction, 0);
		console.log (usedCardlist[commander[who].rank].CardName + "uses" + activSkill[commander[who].skills[i].skillname]);
	}
	for (var j=0; j<struct[who].length ; j++)
	{	
		if (struct[who][j].delayed == 0)
		{
			for (var i=0; i< struct[who][j].skills.length ; i++)
			{
				activate(who, struct[who][j].skills[i].skillname,struct[who][j].skills[i].level,0 ,struct[who][j].faction, 1);
				console.log (usedCardlist[struct[who][j].rank].CardName + "uses" + activSkill[struct[who][j].skills[i].skillname]);
			}
		}
	}
	for (var j=0; j<assault[who].length ; j++)
	{	
		if (( assault[who][j].delayed == 0 )&&(assault[who][j].jamed == 0))
		{
			for (var i=0; i< assault[who][j].skills.length ; i++)
			{
				activate(who, assault[who][j].skills[i].skillname,assault[who][j].skills[i].level,j ,assault[who][j].faction, 2);
				console.log (usedCardlist[assault[who][j].rank].CardName + "uses" + activSkill[assault[who][j].skills[i].skillname]);
			}
			//alert ( usedCardlist[assault[who][j].rank].CardName+" attacks");
			attacks (who , j );
			console.log (usedCardlist[assault[who][j].rank].CardName + "attacks");
		}
	}
	cleanup(who);
}

function loginskill(who, actorrank ,actortype, skill , amount,  targetrank, targettype, targetwho)
{
	var logmess = "";
	var actor = "";
	var targeted = cardstate(targetwho, targettype, targetrank);
	switch(actortype)
	{
	case 0:
		actor = usedCardlist[commander[who].rank].CardName + " ( health: " + commander[who].health +")";
		break;
	case 1:
		actor = cardstate(who, 1, actorrank);
	case 2:
		actor = cardstate(who, 2, actorrank);
	}
	logmess = actor + " uses "+ skill + " on " + targeted + " for " + amount ;
	return logmess;
	
}

function cardstate(who, type , rank)
{
	var information = "";
	var numskill = 0;
	switch (type)
	{
	case 1:
		information = usedCardlist[struct[who][rank].rank].CardName + " ( health: " + struct[who][rank].currentHealth+", Delay:"+struct[who][rank].delayed;
		if (struct[who][rank].wall > 0)
		{
			information += ", Wall";
		}
		if (struct[who][rank].evade > 0)
		{
			information += ", Evade: " + struct[who][rank].evade;
		}
		if (struct[who][rank].counter > 0)
		{
			information += ", Counter: " + struct[who][rank].counter;
		}
		numskill = struct[who][rank].skills.length;
		for (var i=0 ; i <numskill  ; i++)
		{
			information += ", "+ activSkill[struct[who][rank].skills[i]] +": " + struct[who][rank].skills[i].level;
		}
		information +=")";
		return information;
	case 2:
		information = usedCardlist[assault[who][rank].rank].CardName + " ( Attack: "+ assault[who][rank].attack +", Health: " + assault[who][rank].currentHealth+", Delay:"+assault[who][rank].delayed;
		if (assault[who][rank].evade > 0)
		{
			information += ", Evade: " + assault[who][rank].evade;
		}
		if (assault[who][rank].counter > 0)
		{
			information += ", Counter: " + assault[who][rank].counter;
		}
		if (assault[who][rank].armor > 0)
		{
			information += ", Armor: " + assault[who][rank].armor;
		}
		if (assault[who][rank].poison > 0)
		{
			information += ", Poison: " + assault[who][rank].poison;
		}
		if (assault[who][rank].berzerk > 0)
		{
			information += ", Berzerk: " + assault[who][rank].berzerk;
		}
		if (assault[who][rank].pierce > 0)
		{
			information += ", Pierce: " + assault[who][rank].pierce;
		}
		if (assault[who][rank].poisoned > 0)
		{
			information += ", is poisoned for: " + assault[who][rank].poisoned;
		}
		if (assault[who][rank].jamed > 0)
		{
			information += ", is jamed";
		}
		if (assault[who][rank].enfeebled > 0)
		{
			information += ", is enfeebled for: " + assault[who][rank].enfeebled;
		}
		if (assault[who][rank].protect > 0)
		{
			information += ", is protected for: " + assault[who][rank].protect;
		}		
		numskill = assault[who][rank].skills.length;
		for (var i=0 ; i <numskill  ; i++)
		{
			information += " "+ activSkill[assault[who][rank].skills[i]] +": " + assault[who][rank].skills[i].level;
		}
		information +=")";
		return information;
	}
}

function activate (who, skillname, skilllevel , activ, faction, type )
{
// numbers are position in activSkill array
	switch(skillname)
	{
	case 0:
		if (assault[1-who].length >0)
		{	
			var rand = Math.floor(Math.random()*assault[1-who].length);
			if ( assault[1-who][rand].evade >0 )
			{
				assault[1-who][rand].evade --;
				console.log (cardstate(1-who, 2 , rand) + " evades enfeeble from " + cardstate(who, type, activ));
			}
			else
			{
				assault[1-who][rand].enfeebled += skilllevel;
				console.log(loginskill(who, activ ,type, "enfeeble" , skilllevel,  rand, 2, 1-who));
			}
		}
		return;
	case 1:
			for (var i=0 ; i<assault[1-who].length ; i++ )
			{
				if ( assault[1-who][i].evade >0 )
				{
					assault[1-who][i].evade --;
					console.log (cardstate(1-who, 2 , rand) + " evades enfeeble from " + cardstate(who, type, activ));
				}
				else
				{
					assault[1-who][i].enfeebled += skilllevel;
					console.log(loginskill(who, activ ,type, "enfeeble_all" , skilllevel,  rand, 2, 1-who));
				}
			}
	
		return;
	case 2:
		var valid = [];
		var test = 0;
		for (var i=0 ; i< assault[who].length ; i++)
		{
			test =assault[who][i].currentHealth ; 
			if ( (test>0) && (test < assault[who][i].health))
			{
				valid[valid.length] = i;
			}
		}
		if (valid.length > 0) 
		{
			var rand = Math.floor(Math.random()*valid.length);
			assault[who][valid[rand]].currentHealth = Math.min(assault[who][valid[rand]].currentHealth+skilllevel+enh_heal,assault[who][valid[rand]].health);
			console.log(loginskill(who, activ ,type, "heal" , skilllevel+enh_heal,  rand, 2, who) + "With a max health of: "+assault[who][valid[rand]].health);
		}
		return;
	case 3:
		var valid = [];
		var test = 0;
		for (var i=0 ; i< assault[who].length ; i++)
		{
			test =assault[who][i].currentHealth ; 
			if ( (test>0) && (test < assault[who][i].health)&&(assault[who][i].faction == faction))
			{
				valid[valid.length] = i;
			}
		}
		if (valid.length > 0) 
		{
			var rand = Math.floor(Math.random()*valid.length);
			assault[who][valid[rand]].currentHealth = Math.min(assault[who][valid[rand]].currentHealth+skilllevel+enh_heal,assault[who][valid[rand]].health);
			console.log(loginskill(who, activ ,type, "heal" , skilllevel+enh_heal,  rand, 2, who) + "With a max health of: "+assault[who][valid[rand]].health);
		}
		return;
	case 4:
		if (assault[who].length > 0)
		{
			for (var i=0 ; i< assault[who].length ; i++)
			{
				assault[who][i].currentHealth = Math.min(assault[who][i].currentHealth+skilllevel+enh_heal,assault[who][i].health);
				console.log(loginskill(who, activ ,type, "heal" , skilllevel+enh_heal,  i , 2, who) + "With a max health of: "+assault[who][i].health);
			}
		}
		return;
	case 5:
		if (assault[who].length > 0)
		{
			for (var i=0 ; i< assault[who].length ; i++)
			{
				if(assault[who][i].faction == faction)
				{
					assault[who][i].currentHealth = Math.min(assault[who][i].currentHealth+skilllevel+enh_heal,assault[who][i].health);
					console.log(loginskill(who, activ ,type, "heal" , skilllevel+enh_heal,  i , 2, who) + "With a max health of: "+assault[who][i].health);
				}
			}
		}
		return;
	case 6:
		if (assault[who].length > 0)
		{
			var rand = Math.floor(Math.random()*assault[who].length);
			assault[who][rand].protect += skilllevel;
			console.log(loginskill(who, activ ,type, "protect" , skilllevel,  rand , 2, who) + "for a new total of: "+assault[who][rand].protect);
		}
		return;
	case 7:
		var valid = [];
		for (var i=0 ; i< assault[who].length ; i++)
		{
			if ( assault[who][i].faction == faction)
			{
				valid[valid.length] = i;
			}
		}
		if (valid.length > 0) 
		{
			var rand = Math.floor(Math.random()*valid.length);
			assault[who][valid[rand]].protect += skilllevel;
			console.log(loginskill(who, activ ,type, "protect" , skilllevel,  rand , 2, who) + "for a new total of: "+assault[who][rand].protect);
		}
		return;
	case 8:
		if (assault[who].length >0)
		{
			for (var i=0 ; i< assault[who].length ; i++)
			{
				assault[who][i].protect += skilllevel;
				console.log(loginskill(who, activ ,type, "protect" , skilllevel,  i , 2, who) + "for a new total of: "+assault[who][i].protect);
			}
		}
		return;
	case 9:
		for (var i=0 ; i< assault[who].length ; i++)
		{
			if (assault[who][i].faction == faction)
			{
				assault[who][i].protect += skilllevel;
				console.log(loginskill(who, activ ,type, "protect" , skilllevel,  i , 2, who) + "for a new total of: "+assault[who][i].protect);
			}
		}
		return;
	case 10:
		var valid = [];
		for (var i=activ ; i< assault[who].length ; i++)
		{
			if ( assault[who][i].delayed == 0)
			{
				valid[valid.length] = i;
			}
		}
		if (valid.length > 0) 
		{
			var rand = Math.floor(Math.random()*valid.length);
			assault[who][valid[rand]].attack += skilllevel;
			console.log(loginskill(who, activ ,type, "rally" , skilllevel,  rand , 2, who) + "for a new total of: "+assault[who][rand].attack);
		}		
		return;
	case 11:
		var valid = [];
		var test = 0;
		for (var i=activ ; i< assault[who].length ; i++)
		{
			if ( ( assault[who][i].faction == faction ) && (assault[who][i].delayed == 0))
			{
				valid[valid.length] = i;
			}
		}
		if (valid.length > 0) 
		{
			var rand = Math.floor(Math.random()*valid.length);
			assault[who][valid[rand]].attack += skilllevel;
			console.log(loginskill(who, activ ,type, "rally" , skilllevel,  rand , 2, who) + "for a new total of: "+assault[who][rand].attack);
		}
		return;
	case 12:
		if (assault[who].length > 0)
		{		
			for (var i=activ ; i< assault[who].length ; i++)
			{
				assault[who][i].attack += skilllevel;
				console.log(loginskill(who, activ ,type, "rally" , skilllevel,  i , 2, who) + "for a new total of: "+assault[who][i].attack);
			}
		}
		return;
	case 13:
		for (var i=activ ; i< assault[who].length ; i++)
		{
			if ((assault[who][i].faction == faction)&& (assault[who][i].delayed == 0))
			{
				assault[who][i].attack += skilllevel;
				console.log(loginskill(who, activ ,type, "rally" , skilllevel,  i , 2, who) + "for a new total of: "+assault[who][i].attack);
			}
		}
		return;
	case 14:
		if (struct[1-who].length > 0)
		{		
			var rand = Math.floor(Math.random()*struct[1-who].length);
			if ( struct[1-who][rand].evade >0 )
			{
				struct[1-who][rand].evade --;
				console.log (cardstate(1-who, 1 , rand) + " evades siege from " + cardstate(who, type, activ));
			}
			else
			{
				struct[1-who][rand].currentHealth -= skilllevel;
			}
		}
		return;
	case 15:
		if (struct[1-who].length > 0)
		{
			for (var i=0 ; i < struct[1-who].length ; i++ )
			{
				if ( struct[1-who][i].evade >0 )
				{
					struct[1-who][i].evade --;
					console.log (cardstate(1-who, 1 , rand) + " evades siege from " + cardstate(who, type, activ));
				}
				else
				{
					struct[1-who][i].currentHealth -= skilllevel;
				}
			}
		}
		return;
	case 16:
		if (assault[1-who].length > 0)
		{
			var rand = Math.floor(Math.random()*assault[1-who].length);
			if ( assault[1-who][rand].evade >0 )
			{
				assault[1-who][rand].evade --;
				console.log (cardstate(1-who, 2 , rand) + " evades strike from " + cardstate(who, type, activ));
			}
			else
			{
				assault[1-who][rand].currentHealth -= Math.max(0,skilllevel - assault[1-who][rand].protect + assault[1-who][rand].enfeebled);
			}
		}
		return;
	case 17:
		if (assault[1-who].length >0)
		{	
			for (var i=0 ; i < assault[1-who].length ; i++ )
			{
				if ( assault[1-who][i].evade >0 )
				{
					assault[1-who][i].evade --;
					console.log (cardstate(1-who, 2 , rand) + " evades strike from " + cardstate(who, type, activ));
				}
				else
				{
					assault[1-who][i].currentHealth -= Math.max(0,skilllevel - assault[1-who][i].protect +assault[1-who][i].enfeebled);
				}
			}
		}
		return;
	case 18:
		var valid = [];
		for (var i=0 ; i< assault[1-who].length ; i++)
		{
			if ( (assault[1-who][i].delayed == 0)&&(assault[1-who][i].jamed == 0)&&(assault[1-who][i].attack > 0))
			{
				valid[valid.length] = i;
			}
		}
		if (valid.length > 0) 
		{
			var rand = Math.floor(Math.random()*valid.length);
			if ( assault[1-who][rand].evade > 0)
			{
				assault[1-who][rand].evade --;
				console.log (cardstate(1-who, 2 , rand) + " evades weaken from " + cardstate(who, type, activ));
			}
			else
			{
				assault[1-who][rand].attack = Math.max(assault[1-who][rand].attack - skilllevel ,0);
			}
		}
		return;
	case 19:
		if (assault[1-who].length >0)
		{
			for (var i=0 ; i< assault[1-who].length ; i++)
			{
				if ( assault[1-who][i].evade > 0)
				{
					assault[1-who][i].evade --;
					console.log (cardstate(1-who, 2 , rand) + " evades weaken from " + cardstate(who, type, activ));
				}
				else
				{
					assault[1-who][i].attack = Math.max(assault[1-who][i].attack - skilllevel ,0);
				}
			}
		}
		return;
case 20:
	if(assault[1-who].length > 0)
	{
		var valid = [];
		for (var i=0 ; i< assault[1-who].length ; i++)
		{
			if ( (assault[1-who][i].delayed == 0)&&(assault[1-who][i].jamed == 0))
			{
				valid[valid.length] = i;
			}
		}
		if (valid.length > 0) 
		{
			var rand = Math.floor(Math.random()*valid.length);
			switch (type)
			{
			case 0:
				if ( commander[who].jamcount > 0)
				{
					commander[who].jamcount --;
					return;
				}
				else if (assault[1-who][valid[rand]].evade > 0)
				{
					assault[1-who][valid[rand]].evade --;
					console.log (cardstate(1-who, 2 , rand) + " evades jam from " + cardstate(who, type, activ));
				}
				else
				{
					commander[who].jamcount = usedCardlist[commander[who].rank].Jam-1;
					assault[1-who][valid[rand]].jamed = 1;
				}
				break;
			case 1:
				if ( struct[who][activ].jamcount > 0)
				{
					struct[who][activ].jamcount --;
					return;
				}
				else if (assault[1-who][valid[rand]].evade > 0)
				{
					assault[1-who][valid[rand]].evade --;
					console.log (cardstate(1-who, 2 , rand) + " evades jam from " + cardstate(who, type, activ));
				}
				else
				{
					struct[who][activ].jamcount = usedCardlist[struct[who][activ].rank].Jam-1;
					assault[1-who][valid[rand]].jamed = 1;
				}
				break;		
			case 2:
				if ( assault[who][activ].jamcount > 0)
				{
					assault[who][activ].jamcount -- ;
					return ;
				}
				else if (assault[1-who][valid[rand]].evade > 0)
				{
					assault[1-who][valid[rand]].evade --;
					console.log (cardstate(1-who, 2 , rand) + " evades jam from " + cardstate(who, type, activ));
				}
				else
				{
					assault[who][activ].jamcount = usedCardlist[assault[who][activ].rank].Jam-1;
					assault[1-who][valid[rand]].jamed = 1;
				}
				break;
			}

		}
	}
		return;
	case 21:
		var valid = [];
		for (var i=activ ; i< assault[who].length ; i++)
		{
			if (( assault[who][i].delayed == 0)&&(assault[who][i].leech > 0))
			{
				valid[valid.length] = i;
			}
		}
		if (valid.length > 0) 
		{
			var rand = Math.floor(Math.random()*valid.length);
			assault[who][valid[rand]].leech += skilllevel;
		}		
		return;
	case 22:
		if (assault[who].length >0)
		{
			for (var i=activ ; i< assault[who].length ; i++)
			{
				if (assault[who][i].leech > 0 )
				{			
					assault[who][i].leech += skilllevel;
				}
			}
		}
		return;
	case 23:
		var valid = [];
		for (var i=activ ; i< assault[who].length ; i++)
		{
			if (( assault[who][i].delayed == 0)&&(assault[who][i].poison > 0))
			{
				valid[valid.length] = i;
			}
		}
		if (valid.length > 0) 
		{
			var rand = Math.floor(Math.random()*valid.length);
			assault[who][valid[rand]].poison += skilllevel;
		}		
		return;
	case 24:
		if (assault[who].length > 0)
		{
			for (var i=activ ; i< assault[who].length ; i++)
			{
				if (assault[who][i].poison > 0 )
				{			
					assault[who][i].poison += skilllevel;
				}
			}
		}
		return;
	case 25:
		var valid = [];
		for (var i=activ ; i< assault[who].length ; i++)
		{
			if (( assault[who][i].delayed == 0)&&(assault[who][i].counter > 0))
			{
				valid[valid.length] = i;
			}
		}
		if (valid.length > 0) 
		{
			var rand = Math.floor(Math.random()*valid.length);
			assault[who][valid[rand]].counter += skilllevel;
		}		
		return;
	case 26:
		for (var i=activ ; i< assault[who].length ; i++)
		{
			if (assault[who][i].counter > 0 )
			{			
				assault[who][i].counter += skilllevel;
			}
		}
		return;
	case 27:
		var valid = [];
		for (var i=activ ; i< assault[who].length ; i++)
		{
			if (( assault[who][i].delayed == 0)&&(assault[who][i].armor > 0))
			{
				valid[valid.length] = i;
			}
		}
		if (valid.length > 0) 
		{
			var rand = Math.floor(Math.random()*valid.length);
			assault[who][valid[rand]].armor += skilllevel;
		}		
		return;
	case 28:
		for (var i=activ ; i< assault[who].length ; i++)
		{
			if (assault[who][i].armor > 0 )
			{			
				assault[who][i].armor += skilllevel;
			}
		}
		return;
	case 29:
		var valid = [];
		for (var i=activ ; i< assault[who].length ; i++)
		{
			if (( assault[who][i].delayed == 0)&&(assault[who][i].berzerk > 0))
			{
				valid[valid.length] = i;
			}
		}
		if (valid.length > 0) 
		{
			var rand = Math.floor(Math.random()*valid.length);
			assault[who][valid[rand]].berzerk += skilllevel;
		}
		return;
	case 30:
		for (var i=activ ; i< assault[who].length ; i++)
		{
			if (assault[who][i].berzerk > 0 )
			{			
				assault[who][i].berzerk += skilllevel;
			}
		}
		return;
	case 31:
		var valid = [];
		for (var i=activ ; i< assault[who].length ; i++)
		{
			if (( assault[who][i].delayed == 0)&&(assault[who][i].evade > 0))
			{
				valid[valid.length] = i;
			}
		}
		if (valid.length > 0) 
		{
			var rand = Math.floor(Math.random()*valid.length);
			assault[who][valid[rand]].evade += skilllevel;
		}
		return;
	case 32:
		for (var i=activ ; i< assault[who].length ; i++)
		{
			if (assault[who][i].evade > 0 )
			{			
				assault[who][i].evade += skilllevel;
			}
		}
		return;
	default :
		return;
	}
}

function attacks ( who , number )
{
	var damage = assault[who][number].attack;
	//alert ( damage);
	var wallID = -1;
	for (var i=0 ; i< struct[1-who].length ; i++)
	{
		if ( (struct[1-who][i].wall == 1)&&(struct[1-who][i].currentHealth > 0))
		{
			wallID = i;		
			break;
		}
	}

	//is there opposing assault?
	if ( assault[1-who].length > number)
	{
		if(assault[1-who][number].currentHealth >0)
		{
			damage += assault[1-who][number].enfeebled;
			damage -= ( Math.max(0,assault[1-who][number].armor - assault[who][number].pierce) + Math.max(0,assault[1-who][number].protect - assault[who][number].pierce));
			
			if (damage > 0)
			{
				assault[1-who][number].currentHealth -= damage;
				assault[1-who][number].poisoned = Math.max(assault[1-who][number].poisoned , assault[who][number].poison);
				assault[who][number].berzerked += assault[who][number].berzerk;
				assault[who][number].currentHealth -= Math.max(0,assault[1-who][number].counter-assault[who][number].protect);
				assault[who][number].currentHealth = Math.min(assault[who][number].health,assault[who][number].currentHealth + Math.min(damage,assault[who][number].leech));
			}
		}
		else if ( wallID >= 0)
		{
			struct[1-who][wallID].currentHealth -= damage;
			if (damage > 0)
			{
				assault[who][number].berzerked += assault[who][number].berzerk;
				assault[who][number].currentHealth -= Math.max(0,struct[1-who][wallID].counter-assault[who][number].protect);			
			}
		}
		else
		{
			commander[1-who].health -= damage;
			if (damage > 0)
			{
				assault[who][number].berzerked += assault[who][number].berzerk;
				assault[who][number].currentHealth -= Math.max(0,commander[1-who].counter-assault[who][number].protect);			
			}
		}
		
		
	}	
	else if ( wallID >= 0)
	{
		struct[1-who][wallID].currentHealth -= damage;
		if (damage > 0)
		{
			assault[who][number].berzerked += assault[who][number].berzerk;
			assault[who][number].currentHealth -= Math.max(0,struct[1-who][wallID].counter-assault[who][number].protect);			
		}
	}
	else
	{
		commander[1-who].health -= damage;
		if (damage > 0)
		{
			assault[who][number].berzerked += assault[who][number].berzerk;
			assault[who][number].currentHealth -= Math.max(0,commander[1-who].counter-assault[who][number].protect);			
		}
	}
}

function cleanup (who)
{
// poison damage
	for (var i=0 ; i<assault[who].length ; i++)
	{
		assault[who][i].currentHealth -= Math.max(0,assault[who][i].poisoned - assault[who][i].protect);
	}
// remove dead struct and unit
	var ind = 0;
	while (ind < struct[who].length)
	{
		if ( struct[who][ind].currentHealth <1)
		{		
			struct[who].splice(ind,1);
			//alert (struct);
		}
		else
		{
			ind ++;
		}
	}	
	ind = 0;
	while (ind<struct[1-who].length)
	{
		if ( struct[1-who][ind].currentHealth <1)
		{		
			struct[1-who].splice(ind,1);
			//alert (struct)
		}
		else
		{
			ind ++;
		}
	}
	ind = 0;
	while (ind<assault[who].length)
	{
		if ( assault[who][ind].currentHealth <1)
		{		
			assault[who].splice(ind,1);
		}
		else
		{
			ind ++;
		}
	}
	ind = 0;
	while (ind<assault[1-who].length)
	{
		if ( assault[1-who][ind].currentHealth <1)
		{		
			assault[1-who].splice(ind,1);
		}
		else
		{
			ind ++;
		}
	}
// reset attack , protect , leech , poison , berzerk, evade, jamed, armor, counter, enfeebled(enemy).
	for (var i=0; i<struct[who].length; i++)
	{
		struct[who][i].evade = usedCardlist[struct[who][i].rank].Evade;
	}
	for (var i = 0 ; i<assault[1-who].length ; i++)
	{
		var rank = assault[1-who][i].rank ;		
		assault[1-who][i].enfeebled = 0;
		assault[1-who][i].protect = 0;
		assault[1-who][i].counter = usedCardlist[rank].Counter;
		assault[1-who][i].armor = usedCardlist[rank].Armor;
	}
	for (var i=0 ; i< assault[who].length ; i++)
	{
		var rank = assault[who][i].rank ;		
		assault[who][i].attack = assault[who][i].berzerked + usedCardlist[rank].Attack;
		assault[who][i].leech = usedCardlist[rank].Leech;
		assault[who][i].poison = usedCardlist[rank].Poison;
		assault[who][i].berzerk = usedCardlist[rank].Berzerk;
		assault[who][i]. evade = usedCardlist[rank].Evade;
		assault[who][i].jamed = 0;
	}

// reduce delay value by one.
	for (var i=0; i<struct[who].length; i++)
	{
		struct[who][i].delayed = Math.max(struct[who][i].delayed - 1 , 0);
	}
	for (var i=0; i<assault[who].length; i++)
	{
		assault[who][i].delayed = Math.max(assault[who][i].delayed - 1 , 0);
	}
}

function showoptimisation (cardlist)
{

	if (document.getElementById('optim').innerHTML == ""){
	var myTable= '<table id="coltable" border=1 class="sortable"><thead data-header="true"><tr><th data-sort-column="true"> Card Name</th>';
    myTable+= "<th data-sort-column='true'> Faction</th>";
    myTable+="<th data-sort-column='true'> Type</th>";
	myTable+="<th data-sort-column='true'> Delay</th>";
	myTable+="<th data-sort-column='true'> Attack</th>";
	myTable+="<th data-sort-column='true'> Health</th>";
	myTable+="<th data-sort-column='true'> Skill 1</th>";
	myTable+="<th data-sort-column='true'> Skill 2</th>";
	myTable+="<th data-sort-column='true'> Skill 3</th>";
	myTable+="<th data-sort-column='true'> remove from optim.</th></tr></thead>";
	
    myTable+="<tbody data-body='true'>";

	if (localStorage.optimisation)
		{
			var optimArray = localStorage.optimisation.split(",");
			for (var i=0; i<optimArray.length; i++) 
			{
				myTable+="<tr><td>" + cardlist[optimArray[i]].CardName + "</td>";
				myTable+="<td>" + cardlist[optimArray[i]].Faction + "</td>";
				myTable+="<td>" + cardlist[optimArray[i]].Type + "</td>";
				myTable+="<td>" + cardlist[optimArray[i]].Delay + "</td>";
				myTable+="<td>" + cardlist[optimArray[i]].Attack + "</td>";
				myTable+="<td>" + cardlist[optimArray[i]].Health + "</td>";
				var skills = [];
				var ind = 0;
				for (var j=0; j<skillList.length ; j++)
				{
					var skillName = skillList[j];
					var command = "cardlist[optimArray["+ i +"]]."+skillName; 
					if ( eval(command) == null )
					{
					}
					else
					{
						var realName ="";
						if (skillName.charAt(1) == "_")
						{
							realName += "Enhance ";
							skillName = skillName. substring(2);
						}
						if (skillName.charAt(skillName.length - 2) == "A")
						{
							realName += skillName.substring(0,skillName.length - 3) + " All " + cardlist[optimArray[i]].Faction + " " +eval(command);
							skills[ind] = realName;
							ind++;
						}
						else if (skillName.charAt(skillName.length - 1) == "A")
						{
							realName += skillName.substring(0,skillName.length - 2) + " All "+ eval(command);
							skills[ind] = realName;
							ind++;
						}
						else if (skillName.charAt(skillName.length - 1) == "F")
						{
							realName += skillName.substring(0,skillName.length - 2) + " " + cardlist[optimArray[i]].Faction + " " + eval(command) ;
							skills[ind] = realName;
							ind++;
						}
						else
						{
							realName += skillName + " " + eval(command);
							skills[ind] = realName;
							ind++;
						}
					}
				}
				myTable+="<td>" + skills[0] + "</td>";
				myTable+="<td>" + skills[1] + "</td>";
				myTable+="<td>" + skills[2] + "</td>";
				myTable+="<td><button onclick=\"removeOptim("+i+",Cardlist)\">Click to remove</button></td></tr>";
				
			}  
			myTable+="</tbody></table>";
		}
		else
		{
			myTable = "No card selected for optimisation yet. To add one, make sure it is in your collection, click update collection and clickadd to optim";
		}

	document.getElementById('optim').innerHTML = myTable;

	$(function() {
$('.sortable').sortable();
}); 
	}
	else
	{
		document.getElementById('optim').innerHTML = "";
	}
}

function removeOptim(ind, cardlist)
{
	var optimArray = localStorage.optimisation.split(",");
	optimArray.splice(ind,1);
	localStorage.optimisation = optimArray.toString();
	showoptimisation (cardlist);
	showoptimisation (cardlist);
}

function runoptimisation (form , cardlist)
{
	var numberoftest = 100;
	optimScore = 0;
	var score = 0;
	if (form.simnum.value)
	{
		numberoftest = form.simnum.value;
	}
	var mincard = 6;
	if (form.minSize.value)
	{
		mincard = form.minSize.value;
	}
	if (localStorage.optimisation)
	{
		var optimArray = localStorage.optimisation.split(",");
		var optimCommander =[];
		for (var i=0; i< optimArray.length; i++)
		{
			usedCardlist[optimArray[i]]=cardlist[optimArray[i]];
		}
		var ind = 0;
		while (ind < optimArray.length)
		{
			if (cardlist[optimArray[ind]].Type == "Commander")
			{
				optimCommander[optimCommander.length]=optimArray[ind];
				optimArray.splice(ind,1);
			}
			else
			{
				ind ++;
			}
		}
		var nselected = optimArray.length;
		if (nselected < mincard)
		{
			alert("Make sure to select at least "+mincard+ " cards for your optimisation test.");
			return;
		}
		if (optimCommander.length == 0)
		{
			alert("You need to select at least 1 commander");
			return;
		}
		var res = 0;
		var tempres = 0;
		var tempj = 0;
		for (var j=10 ; j >= mincard ; j--)
		{
			if ( j == nselected)
			{
				res ++;
				continue;
			}
			tempj = Math.min(j, nselected - j);
			tempres = nselected - tempj + 1;
			for ( var i=2; i<= tempj ; i++)
			{
				tempres = tempres * (nselected - tempj + i)/i;
			}
			res += tempres;
		}
		res = res * optimCommander.length;
		if (confirm('You are about to run '+numberoftest+' simulations on each of '+res+' possible decks. \n Are you sure?'))
		{
		}
		else
		{
			return;
		}
	// Pick commander
		var alldecks =[];
		var temparray = [];
		for ( var i=0 ; i< optimCommander.length ; i++)
		{
			var decksize = Math.min(10, nselected);
			while(decksize >= mincard)
			{
			// Create deck
				
				alldecks = createDecks(decksize,optimArray);
				/*var msg="";
				for (var j=0 ; j<alldecks.length ; j++)
				{
					for (var k=0; k< alldecks[j].length ; k++)
					{
						msg += alldecks[j][k] + ", ";
					}
					console.log(msg);
					msg = "";
				}*/

				for (var j=0 ; j<alldecks.length; j++)
				{
					temparray = [ "" , optimCommander[i]];
					currentDecks[0]=temparray.concat(alldecks[j]);
					
					
					console.log("current deck readied " + j);
					if ((currentDecks[0] < 2)||(currentDecks[1]<2))
					{
						alert("invalid decks");
						return;
					}
					score = winrate(form,numberoftest , true);
					console.log(" score " + score);
					if (score > optimScore)
					{
						optimDeck = currentDecks[0];
						optimScore = score;
					}
				}
				decksize --;
			}
		}
		showcurrentDeck(cardlist);
		alert("The deck shown is your best  option, it won "+optimScore + " times, out of "+numberoftest+".");
	}
	else
	{
		alert("Create your optimisation selection first!"); 
	}
}

function createDecks(size , array)
{
	var fn = function(n, src, got, all) 
	{
		if (n == 0) 
		{
			if (got.length > 0) 
			{
				all[all.length] = got;
			}
		return;
		}
		for (var j = 0; j < src.length+1 - n; j++) 
		{
			fn(n - 1, src.slice(j+1), got.concat([src[j]]), all);
		}
		return;
	}
	var all = [];
	fn(size, array, [], all);
	return all;
}

function showcurrentDeck (cardlist)
{
	document.getElementById("playerCard0").value = cardlist[optimDeck[1]].CardName;
	for (var j=1;j<11; j++)
	{
		if (cardlist[optimDeck[j+1]])
		{				
			fieldname = "playerCard" + j;
			document.getElementById(fieldname).value = cardlist[optimDeck[j+1]].CardName;
		}
		else
		{
			fieldname = "playerCard" + j;
			document.getElementById(fieldname).value = "";
		
		}
	}
}

function filters(form, cardlist)
{
	var cardselect ="";
	var command= "";
	var fieldname ="";
	var NA = 0;
	var found =0;
	for (var i=0 ; i< cardlist.length ; i++)
	{
		if ( (cardlist[i].Faction != form.factions.value)&&(form.factions.value != "NA"))
		{
			continue;
		}
		found = 0;
		NA =0;
		for (var j=1 ; j<4 ; j++)
		{
			fieldname = "skill"+j;
			if (eval("form."+fieldname+".value") == "NA")
			{
				NA++;
				continue;
			}
			command = "cardlist["+i+"]."+eval("form."+fieldname+".value");
			if ( (eval(command) != null))
			{
				found ++;
			}
		}
		if ((found + NA) != 3)
		{
			continue;
		}
		if ( form.attackMin.value != 0)
		{
			if ( cardlist[i].Attack < form.attackMin.value)
			{
				continue;
			}
		}	
		if (cardlist[i].Health < form.healthMin.value)
		{
			continue;
		}
		cardselect += '<option value="'+cardlist[i].CardName +'">';
	}
	document.getElementById('fulllist').innerHTML = cardselect;
	alert("filter applied");
}

function CleanDeckList(cardlist)
{
	if (confirm("This will erase every thing you have saved so far! \n Are you sure ?"))
	{
		localStorage.removeItem('deck');
		localStorage.removeItem('deckName');
		alert ("deck saved erased");
		var decknames ="";
		for (var i=0 ; i< presetDecks.length ; i ++)
		{
			decknames += '<option value="'+ presetDecks[i][0] +'">';
		}
		document.getElementById('decklist').innerHTML = decknames;
	}
}

