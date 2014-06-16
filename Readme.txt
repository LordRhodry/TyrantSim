This repository countains all the files I use to create the web simulator :
http://tyrantsim.weebly.com

-----------
If you are unfamiliar, it is a site to help you run test on way to change your decks when
playing tyrantuneashed the mobile CCG.

The part I'd really need your help on would be to find way to optmize the optimizator.
The path I consider exploring now would be using multithreading with html 5 web worker
-----------


To run test without going through the hurdle of editing the site , 
I created a minimalist verion in the html file in this repository.

----

To get login I started working on tyrant2.js which sould be similar to 

tyrant.js with the exception of the added console.log

Since the project was started for my eyes only, the code probably lacks comment , sorry about that.

----

To update new cards and decks from event :
download cards.xml and missions.xml from :  
http://mobile.tyrantonline.com/assets/cards.xml
http://mobile.tyrantonline.com/assets/missions.xml
open xmlparser.html with firefox (chrome does not work with this one)
click update cards andcopy the output : paste the output in Tyrantcardlist2.js (replace content) ... check if it looks good.If it does save as Tyrantcardlist.js
refresh xmlparser.html and click the update missions ...copy and paste the result in the tyrant.js file (replace the array : presetecks1 )
Once all that done go to weebly.com , click edit , click design , click Edit html/css , click addfiles and add both tyrant.js and tyrantcardlist.js
Done ( should take under 5 min total)

-----------