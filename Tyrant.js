var usedCardlist = [];
var rawCardlist = [];
var skillList =["Enfeeble","Enfeeble_A","Heal","Heal_F","Heal_A","Heal_AF","Protect","Protect_F","Protect_A","Protect_AF","Rally","Rally_F","Rally_A","Rally_AF","Siege","Siege_A","Strike","Strike_A","Weaken","Weaken_A","Jam","Pierce","Berzerk","Leech","Poison","Evade","Armor","Counter","Wall","Inhibit","Corrosive","E_Leech","E_Leech_A","E_Poison","E_Poison_A","E_Counter","E_Counter_A","E_Armor","E_Armor_A","E_Berzerk","E_Berzerk_A","E_Evade","E_Evade_A"];
var activSkill =["Enfeeble","Enfeeble_A","Heal","Heal_F","Heal_A","Heal_AF","Protect","Protect_F","Protect_A","Protect_AF","Rally","Rally_F","Rally_A","Rally_AF","Siege","Siege_A","Strike","Strike_A","Weaken","Weaken_A","Jam","E_Leech","E_Leech_A","E_Poison","E_Poison_A","E_Counter","E_Counter_A","E_Armor","E_Armor_A","E_Berzerk","E_Berzerk_A","E_Evade","E_Evade_A"];

var gauntletDecks =[["Gauntlet1",1150,253,4456,436,531,2033,327,80,365,367,363],["Gauntlet2",1110,527,19,430,8,323,513,4439,2057,499,503],["Gauntlet3",1022,4472,2067,443,2041,430,331,560,375,4068,144],["Gauntlet4",1146,549,4448,52,2103,433,206,564,41,2011,361],["Gauntlet5",1018,584,4464,517,2037,439,211,500,371,373,102],["Gauntlet6",1040,4717,91,186,4456,2113,531,436,430],["Gauntlet7",1052,4476,157,4399,2292,491,4472,443,331,2041],["Gauntlet8",1111,223,677,4444,4387,25,527,430,2057],["Gauntlet9",1046,130,4717,467,124,584,4464,2037,430],["Gauntlet10",1058,421,4452,58,549,4448,2067,206],["Gauntlet11",1092,485,942,754,4476,820,2178,4405],["Gauntlet12",1216,696,391,427,4693,2166,726],["Gauntlet13",1028,4566,4723,4080,754,479,467,714,4393],["Gauntlet14",1034,720,455,942,4080,754,4452,4405],["Gauntlet15",1112,485,4723,467,984,4705,130,4289],["Gauntlet16",1192,4213,4512,4122,4122,4164,4645,2286,4560],["Gauntlet17",1204,4741,4177,4219,2262,4146,4325,4325],["Gauntlet18",1198,4158,4345,4345,4237,2232,4572,4080],["Gauntlet19",1186,4435,4134,4171,2220,2220,2396,4435],["Gauntlet20",1210,4554,4554,4116,984,4405,2318,4663]];
var gauntlets =[["Default","Gauntlet1","Gauntlet2","Gauntlet3","Gauntlet4","Gauntlet5","Gauntlet6","Gauntlet7","Gauntlet8","Gauntlet9","Gauntlet10","Gauntlet11","Gauntlet12","Gauntlet13","Gauntlet14","Gauntlet15","Gauntlet16","Gauntlet17","Gauntlet18","Gauntlet19","Gauntlet20"]];
var presetDecks1 = [,["1. Spirefall",1146,357,357,357],["2. Cannon Fire",1146,357,357,357],["3. Wounds",1146,357,357,41,41],["4. Carnage",1146,357,37,37,41],["5. Bombardment",1146,357,37,41,41],["6. Press Forward",1146,357,37,37,41,2008],["7. Lay Siege",1146,357,37,41,48,2008,2011],["8. New Direction",1146,357,37,41,361,48,2011],["9. Nest",1146,37,41,357,44,48,2008],["10. Discovery",1146,357,357,359,41,361,48,2008],["11. Typhon's Path",1146,37,41,41,361,171,52,206,2008],["12. Secrets",1146,37,359,41,44,48,206,2008,2008],["13. At the Gates",1146,37,41,44,48,52,171,2011,2011],["14. Malika's Boast",1146,357,357,37,44,361,206,2061,2008],["15. Vaults",1146,359,41,44,48,206,171,2061,2011],["16. Screams",1146,37,359,44,361,48,52,2061,2011],["17. Prometheus",1146,357,37,359,44,361,48,206,58,2008],["18. Bloodthirsty",1150,69,363,74,74,367,85,85,2033,2017],["19. Ghosts",1150,69,363,74,74,77,85,85,2014,2033],["20. Corruption",1150,363,365,77,80,80,367,85,2033,2033],["21. Intent",1146,41,44,44,361,48,52,206,58,2061],["22. Destruction",1150,69,363,365,365,80,186,85,85,2014],["23. Righteous Fury",1022,375,136,377,379,141,147,151,157,2026,2041],["24. Antibody",1150,363,74,77,80,85,85,91,174,2014,2033],["25. Gate and Key",1146,357,359,359,41,361,48,206,58,2008,2061],["26. Swarm",1150,69,365,77,80,80,367,85,186,2017,2033],["27. Purify",1022,136,379,141,144,147,151,241,180,2041,2067],["28. Queen",1040,69,77,80,85,327,91,186,97,367,2033],["29. Burning Sky",1018,102,369,373,373,108,111,124,193,2023,2037],["30. Echoes",1146,359,44,44,361,206,52,58,171,2061,2047],["31. Resonance",1146,37,37,44,357,52,206,52,58,2008,2047],["32. Assault",1018,371,371,111,211,118,124,193,193,2020,2037],["33. Awakening",1146,37,41,359,361,52,58,58,171,2061,2047],["34. Dropship",1046,102,371,373,124,177,118,124,177,193,2037],["35. Overwhelming Force",1046,102,369,108,114,118,124,193,193,2020,2037],["36. Drive Back",1046,369,371,111,118,118,124,193,130,2020,2023],["37. Trapped",1046,371,373,373,108,118,124,130,177,193,2037],["38. Maelstrom",1046,102,373,111,211,118,124,124,130,193,2020],["39. Nexus",1034,37,359,44,206,206,58,58,64,2011,2047],["40. Dead this Day",1034,41,361,48,52,58,58,64,171,2047,2061],["41. World's Fate",1034,361,52,206,58,58,259,259,64,2047,2047],["42. Intruders",1058,316,433,206,52,58,229,259,343,2103,2047],["43. Breach",1058,361,433,206,206,58,229,549,549,64,2061],["44. Burn",1058,44,316,52,52,259,549,58,433,349,2103],["45. Salted Earth",1058,52,206,229,58,58,259,343,64,2061,2047],["46. Betrayal",1028,14,503,513,323,223,513,25,527,217,2053],["47. Treason",1028,430,499,19,25,25,223,527,527,31,2002],["48. Firefight",1028,168,503,499,223,223,527,25,25,479,2057],["49. Ally",1028,323,513,513,223,25,25,223,527,217,479],["50. Radicals",1034,433,52,58,259,259,58,349,343,2061,2103],["51. Divine Judgement",1108,202,521,443,473,491,241,397,163,2067,2041],["52. Hunters",1108,180,151,331,443,157,473,491,485,163,2067],["53. Hatred",1028,513,323,25,25,223,223,31,217,479,2099],["54. Tombs",1028,430,499,513,527,223,223,430,217,31,2053],["55. Red Soil",1028,503,323,19,223,223,449,479,217,2099,2053],["56. Push Back",1108,521,157,491,473,473,241,163,397,485,2067],["57. Abyss",1112,118,211,193,124,235,235,130,235,2037,2079],["58. Cave In",1112,500,517,211,467,193,193,124,130,537,2109],["59. Mines",1112,118,500,517,235,124,124,193,130,537,2079],["60. Daylight",1112,118,517,500,235,124,467,130,537,2079,2079],["61. Collapse",1112,235,193,124,124,467,467,130,537,2079,2109],["62. Blightlands",1108,521,443,491,491,473,157,157,397,485,2067],["63. Zeal",1108,331,151,157,241,241,473,473,491,485,397],["64. Grinder",1064,91,186,186,427,253,253,97,337,391,2073],["65. Wounds",1064,531,91,91,186,427,253,97,391,2073,2073],["66. Fusion",1064,85,91,186,186,427,427,253,337,97,2073],["67. Reverb",1064,427,91,91,186,186,253,253,391,337,2113],["68. Unlocked",1064,253,186,186,91,427,427,391,337,97,2073],["69. Black Skies",1216,553,85,91,186,186,253,337,427,2113,2116],["70. Purged",1136,556,443,473,491,491,157,397,247,2067,2120],["71. Scorched",1136,556,151,443,473,157,157,491,241,163,2120],["72. Red",1216,498,553,427,253,253,186,91,391,2073,2116],["73. Buzzing",1216,327,531,186,186,427,427,253,91,97,2033],["74. Surrounded",1118,52,259,421,455,455,58,64,349,2047,2103],["75. Fields of Flesh",1216,85,531,327,253,91,91,186,427,391,2073],["76. Terror in the Skies",1130,211,517,467,235,235,193,124,543,2037,2109],["77. Lucina",1142,499,409,449,527,323,25,25,217,2053,2057],["78. Assassin",1142,513,499,19,385,223,409,449,31,2053,2053],["79. Infected",1130,118,124,193,235,124,124,467,537,2079,2109],["80. Revenge",1142,323,323,513,385,223,25,223,449,2099,2053],["81. Fangs and Fury",1216,427,427,253,186,91,97,337,391,2073,2113],["82. Burning Light",1136,151,157,157,241,491,491,473,163,2067,2041],["83. To Dust",1136,443,521,491,491,473,473,157,157,397,2067],["84. Dig Site",1118,206,259,58,58,229,549,455,461,2047,2061],["85. Beat",1118,52,455,455,58,259,259,229,229,64,2103],["86. Blood and Bone",1216,327,531,427,427,253,253,91,186,186,337],["87. Flanked",1118,455,455,421,421,259,58,229,343,461,2047],["88. Antibodies",1130,517,235,235,467,124,124,193,193,130,2109],["89. Evil Within",1216,186,186,91,91,253,253,391,97,2073,2113],["90. Revelation",1216,427,427,253,253,91,186,391,337,2073,2073],["91. Unearthing",1118,58,229,259,259,549,455,455,461,349,2047],["92. Revenge",1142,409,409,449,449,527,223,479,217,2053,2053],["93. Cracks",1216,186,91,427,427,253,253,337,391,2073,2073],["94. Heart of Tartarus",1124,253,253,186,91,427,427,97,337,391,2073],["95. Cold Reception",1198,866,186,635,4759,5079,5276,4030,391,2073,2434],["96. Infested Tail",1198,427,4717,253,726,337,253,4897,97,2132,2238],["97. Enemy Emerges",1210,4849,808,397,491,4817,157,902,163,4399,2067],["98. Syphon",1210,473,942,241,844,671,4261,247,4933,2268,2354],["99. Old Acquaintance",1192,4060,5312,5099,343,58,665,4805,349,2047,2342],["100. Truth Unveiled",1210,473,942,157,5384,241,671,902,4933,247,2178],["101. Unwelcome Guests",1204,926,467,4289,4585,4977,4313,4915,543,5362,2109],["102. Halcyon's Folly",1028,4429,790,5226,409,5019,677,4861,5154,5294,2053],["103. Impassioned Boast",1210,738,4530,4849,647,4261,844,5202,659,2268,2360],["104. Breached Perimeter",1192,872,4060,5031,4363,4494,4615,4879,349,2148,2047],["105. Cutting it Close",1210,942,4530,4823,878,5391,4843,491,163,4651,2501],["106. World's End",1210,4381,4152,4530,5391,754,878,4405,5208,4657,2178],["Fake End Mission",1210,4381,4152,4530,5391,754,878,4405,5208,4657,2178],,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,["Rogue Element 1",1098,355,19,19,323,25,25,223,31,2057,2053],["Rogue Element 2",1098,14,19,323,499,499,25,223,31,217,2053],["Rogue Element 3",1098,19,323,499,25,25,223,223,31,2053,2099],["Rogue Element 4",1098,323,499,25,25,223,223,31,217,2099,2053],["Vigil 1",1052,180,151,151,157,157,241,163,2041,2041,2067],["Vigil 2",1052,141,151,331,157,241,491,247,163,2067,2041],["Vigil 3",1052,151,151,331,157,157,241,491,163,247,2067],["Vigil 4",1052,151,331,157,157,491,491,241,241,163,2067],["Array 1",1046,111,118,118,211,211,193,124,124,130,2037],["Array 2",1046,500,211,118,124,193,193,130,537,2037,2079],["Array 3",1046,517,211,500,124,193,235,130,537,2079,2109],["Array 4",1046,500,517,124,124,193,235,130,537,2079,2109],["Gore Typhon Enraged",1156,4086,4122,4639,4213,4092,427,796,4375,4771,2286],["Cyberius Recharged",1180,4494,4621,461,920,4110,4207,4237,4195,2342,2232],["Excelsitus Emerged",1252,4705,4921,4351,467,4518,5061,4128,4219,2384,2262],["Jotun Revitalized",1234,485,784,4405,738,5123,4381,4663,4116,2360,2280],["Halcyon Enraged",1028,4307,4134,714,4729,4339,4201,4104,4393,2184,2184],["GDR Rebooted",1274,5725,714,5532,4171,5306,4542,4134,4307,5025,2220],,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,["Razogoth Mutant",1342,6372,6372,6378,6378,6384,6384,6396,6396,6390,6390],,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,["Gore Uprising 1",1014,69,363,77,80,596,2116],["Gore Uprising 2",1014,608,506,367,174,365,69,367,2017],["Gore Uprising 3",1014,69,80,74,174,506,363,553,69,2014,2116],["Miasma",1162,596,596,253,602,602,97,186,91,2073,2113],["Gore Typhon",1156,590,608,608,391,253,97,337,427,2073,2073],["Gore Uprising 4",1040,506,608,69,74,174,436,531,85,2116,2014],["Gore Uprising 5",1040,80,363,365,436,85,498,327,91,2017,2033],["Gore Uprising 6",1040,74,174,363,553,531,253,186,596,97,2033],["Walker Rises",1010,744,359,41,361,171,206,316,2008],["Payload",1010,744,37,37,44,48,316,433,52,2061,2011],["Striking Distance",1010,744,357,361,41,433,206,52,571,2008,2011],["Vegawalker",1168,744,744,617,52,571,58,549,64,2047,2103],["Air to Ground",1010,814,58,433,316,44,44,37,48,37,2103],["Purpose",1010,814,259,52,617,171,41,41,359,44,2148],["Death from Above",1010,814,229,549,343,564,571,361,44,2011,2061],["Tyr Cannon",1174,814,814,744,58,229,52,259,455,349,2148],["Advance Position",1010,814,58,259,343,571,421,41,359,2008,2103],["Hold Ground",1010,814,52,549,229,206,421,171,37,44,2047],["Combine",1010,948,744,206,343,259,48,41,37,2047,2103],["Blind Spot",1010,948,814,58,229,52,171,359,316,2047,2061],["Quake",1010,948,744,229,838,206,206,361,41,44,2148],["Stay Low",1010,948,814,343,421,930,617,41,37,171,2148],["Ambush",1010,948,744,58,421,930,564,48,48,37,2047],["Labs",1010,948,814,838,52,206,359,37,44,2148,2047],["Worldshaker",1010,948,814,421,259,343,229,617,571,316,171],["Cyberius",1180,744,814,948,948,343,455,349,760,914,720],["Excavation",1022,4074,556,147,144,141,136,379,4068,2026,2029],["Dormant Enemies",1022,4074,180,141,377,375,144,379,151,2029,2041],["Chilling Discovery",1022,4074,202,556,144,141,377,136,136,560,2120],["Search Continues",1022,4074,375,136,377,141,147,331,629,151,2026],["Sighting",1022,4074,202,144,136,379,560,521,151,4068,2026],["Incoming",1022,4074,379,379,141,141,202,521,629,2041,2120],["Insurmountable",1022,4074,377,136,136,180,144,151,331,560,2041],["Serapherus",1222,4074,151,331,443,766,397,659,157,163,2067],["The Legend",1022,4283,180,141,144,147,151,521,331,491,2029],["Cold March",1022,4283,136,144,202,375,560,629,4261,2041,2120],["Longevity",1022,4283,556,147,136,4068,560,521,151,2026,2067],["Worse Conditions",1022,4283,144,377,141,379,629,521,4068,157,2120],["Target in Sight",1022,4283,375,180,202,331,521,560,151,241,2029],["Powering Up",1022,4283,202,180,147,141,521,629,629,397,2041],["Endless Legion",1022,4283,136,379,147,4068,151,331,844,2041,2026],["Pantheon",1228,4283,4074,521,443,4261,671,766,902,247,163],["Rise",1022,157,671,521,629,147,180,556,136,2120,2292],["Tremors",1022,144,379,141,331,151,560,844,241,2029,2292],["First Sentinel",1022,375,377,556,377,4068,151,521,647,2067,2292],["Collateral Damage",1022,375,202,136,560,629,151,157,397,2026,2292],["Crippled",1022,4261,241,560,331,151,379,147,180,144,2292],["Power Unmatched",1022,647,491,4068,151,556,144,136,141,2041,2292],["Finest Hour",1022,844,397,443,560,629,375,141,202,2029,2292],["Jotun",1234,4074,4283,978,397,942,485,163,902,2268,2292],["Xeno Atmosphere",1018,4681,108,108,371,114,177,509,102,2023,2020],["Tabitha's Lead",1018,4681,509,114,177,111,373,373,369,102,2020],["Capacity",1018,4681,102,102,177,177,369,108,114,509,2023],["Curious Conundrum",1018,4681,371,108,373,114,114,371,177,369,2037],["Worldship Bound",1018,4681,118,108,114,102,111,108,114,102,111],["Control Room",1018,4681,848,369,177,373,111,102,373,108,2023],["Shocking Revelation",1018,4681,211,509,108,371,177,509,111,2020,2037],["Rastax, Fleet Commander",1240,4681,4681,4687,4277,848,517,584,926,4313,130],["Trivial Victory",1014,4711,363,506,174,498,327,621,832,2017,2116],["Stranded",1014,4711,77,80,367,74,553,4333,85,2073,2017],["Bloodthirsty and Blight",1014,4711,253,531,531,74,80,80,363,174,2033],["Into the Fire",1014,4711,635,85,498,4333,365,69,77,506,2033],["Monstrosity",1014,4711,506,91,498,327,621,77,174,506,2033],["No Other Option",1014,4711,4759,4333,85,80,69,363,69,2033,2238],["Futile Attack",1014,4711,436,327,553,621,498,506,365,2014,2238],["Razogoth",1246,4711,4711,91,4633,4759,391,85,635,2113,2132],["Narrow Escape",1018,4687,102,111,114,4413,625,211,193,235,2037],["Surprise Return",1018,4687,373,509,118,517,848,848,4313,2079,2023],["Under Control",1018,4687,108,369,177,609,848,4277,517,926,2109],["Stealthier Approach",1018,4687,369,111,371,625,848,211,641,4579,2037],["Power Source",1018,4687,177,114,369,609,500,625,118,584,124],["Precise Timing",1018,4687,509,114,848,500,625,625,193,926,2023],["Discovered",1018,4687,926,848,517,4277,102,177,111,2037,2079],["Excelsitus, High Admiral",1252,4687,4687,4681,954,130,4699,584,193,2138,2378],["Razogoth Reborn",1246,4711,4711,596,602,832,91,498,4989,621,2073],["Impending Launch",1262,4983,353,8,11,355,14,168,168,2002,2002],["Dual Threat",1262,4983,351,168,503,503,14,14,11,3,2005],["Persistence",1262,4983,3,14,355,503,8,353,168,353,2002],["New Threat",1262,4983,4064,8,353,503,503,14,11,11,2005],["Top Priority",1262,4983,14,8,8,168,351,355,355,2005,2296],["Setting the Trap",1262,4983,748,3,168,351,355,503,353,2002,2005],["Surround",1262,4983,323,8,355,168,353,503,355,503,2005],["General Agmeus",1258,4983,4983,499,613,323,4295,4423,4098,2208,2057],["Red Maw's Decline",1262,5117,578,323,499,613,8,14,351,168,2002],["Calculated Risk",1262,5117,4423,19,4064,353,503,168,351,2005,2057],["Secrets Unveiled",1262,5117,748,4793,5089,14,168,355,14,11,2208],["Project Purger",1262,5117,527,5089,513,323,353,11,14,2002,2296],["A True Monster",1262,5117,25,499,323,4064,4793,3,8,168,2005],["Accelerated Production",1262,5117,223,513,613,19,14,351,168,8,2057],["Death's Doorstep",1262,5117,409,4064,748,8,14,355,430,2296,2057],["Vargas",1268,5117,5117,4983,4098,31,826,4387,323,4439,2053],["Cry Havoc",1262,5148,4423,513,748,4793,19,14,168,11,2410],["Impending Doom",1262,5148,578,527,4064,323,499,3,351,2005,2057],["Risk Worth Taking",1262,5148,677,409,19,19,4793,5089,503,355,2002],["Glaring Weakness",1262,5148,223,499,323,613,8,351,353,2296,2208],["One Chance",1262,5148,25,5089,499,323,323,503,14,355,2053],["Ominous Charge",1262,5148,578,25,4064,513,748,168,353,503,2057],["Fallen Comrade",1262,5148,4439,323,613,4064,168,355,503,2053,2208],["GDR-5000",1274,5148,5148,5117,4983,479,5154,826,31,4295,2208],["Hazy Memory",1284,5407,556,136,136,379,144,144,180,147,2026],["Alone",1284,5407,180,377,379,202,202,147,141,2026,2029],["Divine",1284,5407,375,136,202,556,180,180,141,144,2029],["Guardian",1284,5407,4417,144,180,377,556,375,136,2026,2026],["Different Sect",1284,5407,5332,147,379,141,136,136,147,202,2029],["Preparations",1284,5407,202,375,141,141,144,147,180,4068,2029],["Refocused",1284,5407,4965,377,375,556,375,375,147,180,2029],["Heimdal",1280,5407,5407,521,629,5332,151,157,397,4651,2067],["Reunited",1284,5431,491,5332,629,141,144,147,375,377,2120],["Renewed Spirits",1284,5431,241,560,151,4068,180,202,202,556,2029],["Outcasts",1284,5431,4817,4965,331,375,377,141,136,2026,2041],["Armageddon",1284,5431,647,521,4417,629,141,136,180,147,2120],["Carried Away",1284,5431,5093,151,331,4417,147,144,202,2029,2354],["Retaliation",1284,5431,157,629,560,4965,5332,136,141,180,180],["Glimmer of Hope",1284,5431,671,560,331,521,141,136,147,4472,2041],["Evrane",1290,5431,5431,5407,659,4399,5202,4817,560,443,2067],["Halt Advance",1284,5481,491,4843,151,521,4417,379,144,377,2120],["Fool's Wish",1284,5481,647,629,560,4068,331,136,180,141,2067],["Phoenix",1284,5481,397,671,5093,151,5332,4965,375,202,2026],["Disturbed Ceremony",1284,5481,844,4261,560,4417,202,375,144,2120,2041],["Devout Defenders",1284,5481,397,5093,629,151,180,147,136,2041,2354],["Shiva's Presence",1284,5481,647,671,4068,331,4068,560,141,379,2029],["Sacrifice",1284,5481,157,4817,443,560,4965,375,141,180,2041],["Shiva",1296,5481,5481,5431,5407,890,5202,5487,4933,4255,4261],["Interruption",1018,5608,102,369,108,114,114,177,177,102,2023],["Enter Worldship",1018,5608,371,371,371,369,2023,2023,102,114,371],["Into the Fray",1018,5608,114,114,2020,108,108,102,111,373,2020],["Checkpoint",1018,5608,517,373,373,373,509,509,108,177,373],["Fleeting Opportunity",1018,5608,211,111,111,111,114,371,108,102,102],["Tense Approach",1018,5608,118,2023,114,114,114,111,371,371,509],["Ambushed",1018,5608,500,102,102,373,509,102,373,509,177],["Wyrmhold",1312,5608,5608,118,211,500,124,124,193,130,130],["Return",1018,5614,124,517,500,500,102,102,371,2020,108],["Exhausted Options",1018,5614,193,211,517,500,111,371,371,108,371],["Renewed Fortitude",1018,5614,235,118,517,118,509,177,111,111,2023],["Bold Strategy",1018,5614,193,118,211,517,517,373,102,108,111],["Counterattack",1018,5614,193,517,500,517,500,108,108,114,108],["Swarmed",1018,5614,124,517,517,211,118,111,111,509,2023],["Weapons Charged",1018,5614,235,517,500,211,118,108,369,373,439],["Rastax",1240,5614,5614,5608,4699,5362,5502,124,517,4464,954],["Short Reprieve",1018,5620,124,193,500,500,118,118,108,102,439],["Thread the Needle",1018,5620,235,193,211,211,500,517,2020,111,177],["Clear Coast",1018,5620,124,124,118,118,517,500,2023,2023,373],["Close for Comfort",1018,5620,193,235,517,517,211,211,102,102,177],["Concentration",1018,5620,235,193,500,118,211,211,114,114,114],["Standing Up",1018,5620,124,124,517,517,500,500,439,2020,439],["Blitz",1018,5620,193,193,4464,500,211,517,2023,111,108],["Worldship",1318,5620,5620,5614,5608,2190,5508,5544,537,4699,584],["To the Punch",1150,6212,506,506,80,77,74,69,363,74,2017],["Juggernaut",1150,6212,174,367,363,365,365,69,506,74,2014],["Last Ditch",1150,6212,69,363,365,77,77,174,363,365,506],["Ruptured Core",1150,6212,80,363,365,80,174,363,74,327,2014],["Plans Unveiled",1150,6212,553,363,74,74,174,506,506,69,80],["Looming Depths",1150,6212,5266,80,80,365,367,69,174,506,2014],["Critical",1150,6212,5771,74,367,363,506,69,69,2017,2014],["Kraken",1324,6212,6212,85,531,186,635,5276,653,2588,2300],["Overwhelm",1150,6218,5449,621,498,5378,367,80,69,174,2116],["Pass Off",1150,6218,635,4333,5266,506,74,363,77,2017,2300],["Defiance",1150,6218,91,85,5578,74,506,77,80,367,2033],["Determined",1150,6218,5771,327,327,5266,80,174,365,506,2238],["Blood Source",1150,6218,832,498,85,553,174,77,69,363,2400],["Quick and Bloody",1150,6218,4717,531,553,85,5578,74,77,365,2014],["Approval",1150,6218,5378,553,4333,498,363,80,74,436,2588],["Blightbloom",1330,6218,6218,6212,4903,590,5079,91,621,4456,2588],["Unstable",1150,6224,186,4717,498,5578,2033,327,80,367,80],["Overflow",1150,6224,253,6160,85,85,5378,621,506,506,2014],["Squandered Resources",1150,6224,91,253,327,531,2033,85,80,80,363],["Gruesome Result",1150,6224,186,2073,327,5266,498,2033,80,80,365],["Diversion",1150,6224,253,2238,498,85,4333,4333,367,174,174],["Farewells",1150,6224,186,91,498,498,2033,2033,363,363,69],["Pride",1150,6224,4759,253,4456,498,6272,531,365,506,74],["Infested Rastax",1336,6224,6224,6218,6212,6124,427,4639,4633,97,2073],,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,["Razogoth Fake",1022,4074,377,136,136,180,144,151,331,560,2041],["Pantheon Fake",1022,4074,377,136,136,180,144,151,331,560,2041]];
var presetDecks = gauntletDecks.concat(presetDecks1);
var currentDecks = [[],[]];
var optimScore = 0;
var optimDeck = [];
var assault = [[],[]];
var struct = [[],[]];
var commander = [];
var inDeck = [[],[]];
var inHand =[[],[]];
var ordered = [false,false];
var fortress =[[-1,-1],[-1,-1]];
var battle =0;
var war_heal = 0;
var batskillname ="";
var batskillvalue =0;


function AddCollection(form, cardlist){
var test = form.fname.value;


// check if card name exist and add it to the collection in local storage (stored as a comma separated string)
for (var i=0 ; i<cardlist.length ; i++ )
{
if (cardlist[i])
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
		alert(cardlist[collectionArray[ind]].CardName+" has been added to your optim selection");
	}
	else
	{
		localStorage.optimisation = collectionArray[ind];
		alert(cardlist[collectionArray[ind]].CardName+" has been added to your optim selection");
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
	if (presetDecks[i])
	{
		if (currentDeck[0] ==presetDecks[i][0])
		{
			alert("This name is used by default decks. \n Please choose another name for your deck");
			return;
		}
	}
	}
	//console.log ('["'+currentDeck[0]+'",'+currentDeck[1]+','+currentDeck[2]+','+currentDeck[3]+','+currentDeck[4]+','+currentDeck[5]+','+currentDeck[6]+','+currentDeck[7]+','+currentDeck[8]+','+currentDeck[9]+','+currentDeck[10]+','+currentDeck[11]+'],');
	if (currentDeck)
	{
		currentDecks[owner]=currentDeck;
	}
	else
	{
		return;
	}
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
						else
						{
							deckArray[i][j] = -1;
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
	if (currentDeck)
	alert( "Deck saved, you can now run a simulation or connect later and load this deck.");
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
	if (presetDecks[i])
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
						if (deckArray[i][pickcard+1] == -1)
						{
							document.getElementsByName(fieldname).item(0).value = "";
						}
						else
						{
							usedCardlist[deckArray[i][pickcard+1]] =cardlist[deckArray[i][pickcard+1]];
							document.getElementsByName(fieldname).item(0).value = cardlist[deckArray[i][pickcard+1]].CardName;
						}
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
		if (cardlist[i])
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
				if (cardlist[i])
				{
					if (cardlist[i].CardName == test)
					{
						grabbedDeck[j+1]=i*1;
						usedCardlist[i] = cardlist[i];
						found = 1;
					}
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
			if (cardlist[i])
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
				if (cardlist[i])
				{
					if (cardlist[i].CardName == test)
					{
						grabbedDeck[j+1]=i*1;
						usedCardlist[i]=cardlist[i];
						found = 1;
					}
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
function winrate(form ,cardlist, numberoftest, noshow)
{
	var trials = 0;
	var victories = 0;
	var batskill ="";
	var fortind=-1;
	
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
				war_heal = batskillvalue;
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
		if (! form.fortress_p1)
		{
			fortress[0][0]=-1;
			fortress[0][1]=-1;
			fortress[1][0]=-1;
			fortress[1][1]=-1;
		}
		else
		{
		if (form.fortress_p1.value == "NA")
		{
			fortress[0][0]=-1;
		}
		else
		{
			fortind =parseInt( form.fortress_p1.value);
			usedCardlist[fortind]=cardlist[fortind];
			fortress[0][0] = fortind;
		
		}
		if (form.fortress_p2.value == "NA")
		{
			fortress[0][1]=-1;
		}
		else
		{
			fortind = parseInt(form.fortress_p2.value);
			usedCardlist[fortind]=cardlist[fortind];
			fortress[0][1] = fortind;
		}
		if (form.fortress_o1.value == "NA")
		{
			fortress[1][0]=-1;
		}
		else
		{
			fortind = parseInt(form.fortress_o1.value);
			usedCardlist[fortind]=cardlist[fortind];
			fortress[1][0] = fortind;
		}
		if (form.fortress_o2.value == "NA")
		{
			fortress[1][1]=-1;
		}
		else
		{
			fortind = parseInt(form.fortress_o2.value);
			usedCardlist[fortind]=cardlist[fortind];
			fortress[1][1] = fortind;
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
			war_heal = 0;
			return victories;
		}
		else 
		{
			alert(" Out of "+trials+" games, the player won "+ victories +" times");
			war_heal = 0;
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
		ordered[0] = true;
	}
	else
	{
		ordered[0] = false;
	}						
}

function orderopp()
{
	if ( document.getElementById('orderingopp').checked == true)
	{
		ordered[1] = true;
	}
	else
	{
		ordered[1] = false;
	}						
}


function simulation(form)
{
	inHand = [[],[]];
	for (var i=2 ; i< currentDecks[0].length;i++)
	{
		if (currentDecks[0][i] == -1)
		{
			currentDecks[0].splice(i,1);
		}
	}
	var playerDeck = currentDecks[0];

	for (var i=2 ; i< currentDecks[1].length;i++)
	{
		if (currentDecks[1][i] == -1)
		{
			currentDecks[1].splice(i,1);
		}
	}
	var enemyDeck = currentDecks[1];
	var message = "";

	commander = [{"health":usedCardlist[playerDeck[1]].Health,"skills":cardskill(playerDeck[1]),"rank":playerDeck[1],"counter":usedCardlist[playerDeck[1]].Counter,"jamcount":0,"corrosive":usedCardlist[playerDeck[1]].Corrosive},{"health":usedCardlist[enemyDeck[1]].Health,"skills":cardskill(enemyDeck[1]),"rank":enemyDeck[1],"counter":usedCardlist[enemyDeck[1]].Counter,"jamcount":0,"corrosive":usedCardlist[enemyDeck[1]].Corrosive}];
	if (usedCardlist[commander[0].rank].Corrosive != null)
	{
		commander[0].corrosive = usedCardlist[commander[0].rank].Corrosive
	}
	if (usedCardlist[commander[1].rank].Corrosive != null)
	{
		commander[1].corrosive = usedCardlist[commander[1].rank].Corrosive
	}	
	inDeck = [fisherYates(playerDeck.slice(2)), fisherYates(enemyDeck.slice(2))];
	drawhand (0);
	drawhand (1);
	var who =0;
	var card = 0;
	if (fortress[0][0] == -1)
	{
	}
	else
	{
		who = 0;
		card = fortress[0][0];
				struct[who][struct[who].length] = {"health":usedCardlist[card].Health, "skills":cardskill(card),"evade":usedCardlist[card].Evade,"wall":usedCardlist[card].Wall,"rank":card,"currentHealth":usedCardlist[card].Health,"faction":usedCardlist[card].Faction,"counter":usedCardlist[card].Counter,"jamcount":0,"delayed":usedCardlist[card].Delay,"corrosive":0};
		if (usedCardlist[card].Corrosive != null)
		{
			struct[who][struct[who].length].corrosive = usedCardlist[card].Corrosive
		}
	}
	if (fortress[0][1] == -1)
	{
	}
	else
	{
		who = 0;
		card = fortress[0][1];
				struct[who][struct[who].length] = {"health":usedCardlist[card].Health, "skills":cardskill(card),"evade":usedCardlist[card].Evade,"wall":usedCardlist[card].Wall,"rank":card,"currentHealth":usedCardlist[card].Health,"faction":usedCardlist[card].Faction,"counter":usedCardlist[card].Counter,"jamcount":0,"delayed":usedCardlist[card].Delay,"corrosive":0};
		if (usedCardlist[card].Corrosive != null)
		{
			struct[who][struct[who].length].corrosive = usedCardlist[card].Corrosive
		}
	}
	if (fortress[1][0] == -1)
	{
	}
	else
	{
		who = 1;
		card = fortress[1][0];
				struct[who][struct[who].length] = {"health":usedCardlist[card].Health, "skills":cardskill(card),"evade":usedCardlist[card].Evade,"wall":usedCardlist[card].Wall,"rank":card,"currentHealth":usedCardlist[card].Health,"faction":usedCardlist[card].Faction,"counter":usedCardlist[card].Counter,"jamcount":0,"delayed":usedCardlist[card].Delay,"corrosive":0};
		if (usedCardlist[card].Corrosive != null)
		{
			struct[who][struct[who].length].corrosive = usedCardlist[card].Corrosive
		}
	}
	if (fortress[1][1] == -1)
	{
	}
	else
	{
		who = 1;
		card = fortress[1][1];
				struct[who][struct[who].length] = {"health":usedCardlist[card].Health, "skills":cardskill(card),"evade":usedCardlist[card].Evade,"wall":usedCardlist[card].Wall,"rank":card,"currentHealth":usedCardlist[card].Health,"faction":usedCardlist[card].Faction,"counter":usedCardlist[card].Counter,"jamcount":0,"delayed":usedCardlist[card].Delay,"corrosive":0};
		if (usedCardlist[card].Corrosive != null)
		{
			struct[who][struct[who].length].corrosive = usedCardlist[card].Corrosive
		}
	}	
	
	if (battle == 0)
	{
		for (var i=0 ; i< 25; i++)
		{
			/*if ( unitcount(0, i) == 0 )
			{
				assault = [[],[]];
				struct = [[],[]];
				commander = [];
				inDeck = [[],[]];	
				return 0;
			}*/
			if (inDeck[0][i])
			{
				play (0, i);
			}
			
			playturn (0);
			
			/*message = "Player turn: "+i+"\n Player Commander health: "+ commander[0].health +"\n Structures in play: \n";
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
			console.log (message);*/

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
				play(1, i);
			}
			playturn (1);
			
			/*message = "Enemy turn: "+i+"\n Player Commander health: "+ commander[0].health +"\n Structures in play: \n";
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
			console.log (message);*/

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
				play(1, i);
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
			/*if ( unitcount(0, i) == 0 )
			{
				assault = [[],[]];
				struct = [[],[]];
				commander = [];
				inDeck = [[],[]];	
				return 0;
			}*/
			if (inDeck[0][i])
			{
				play(0, i);
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
//draw first 2 cards (check if they exist)
function drawhand (who)
{
	for (var i=0 ; i<2 ; i++)
	{
		if (inDeck[who][i])
		{
			inHand[who][i] = inDeck[who][i];
		}
	}
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

function play ( who, turn )
{
	var card = 0;
	//console.log(ordered);
	if (ordered[who] == false)
	{
		card = inDeck[who][turn];
		//console.log(card);
	}
	else
	{
		if (inDeck[who][turn+2])
		{
			inHand[who][inHand[who].length] = inDeck[who][turn+2];
			/*var mssg = "";
			for (var i=0 ; i< inHand[who].length ; i++)
			{
				mssg += usedCardlist[inHand[who][i]].CardName + " , ";
			}
			console.log(mssg);*/
			sortHand(who);

			card = inHand[who][0];
			inHand[who].splice(0,1);
		}
		else
		{
			card = inHand[who][0];
			inHand[who].splice(0,1);
		}
	}
	if (usedCardlist[card].Type == "Structure")
	{
		struct[who][struct[who].length] = {"health":usedCardlist[card].Health, "skills":cardskill(card),"evade":usedCardlist[card].Evade,"wall":usedCardlist[card].Wall,"rank":card,"currentHealth":usedCardlist[card].Health,"faction":usedCardlist[card].Faction,"counter":usedCardlist[card].Counter,"jamcount":0,"delayed":usedCardlist[card].Delay,"corrosive":0};
		if (usedCardlist[card].Corrosive != null)
		{
			struct[who][struct[who].length].corrosive = usedCardlist[card].Corrosive
		}
	}
	else
	{
		var ind = assault[who].length;
		assault[who][ind] = {"attack":usedCardlist[card].Attack,"health":usedCardlist[card].Health, "skills":cardskill(card),"poisoned":0,"enfeebled":0,"protect":0,"evade":usedCardlist[card].Evade,"rank":card,"currentHealth":usedCardlist[card].Health,"faction":usedCardlist[card].Faction,"armor":usedCardlist[card].Armor,"berzerk":usedCardlist[card].Berzerk,"leech":usedCardlist[card].Leech,"poison":usedCardlist[card].Poison,"pierce":usedCardlist[card].Pierce,"counter":usedCardlist[card].Counter,"berzerked":0,"jamed":0,"jamcount":0,"delayed":usedCardlist[card].Delay,"inhibit":0,"inhibited":0,"corrosive":0,"corroded":0,"totalcorrosion":0};
		if(usedCardlist[card].Inhibit != null)
		{
			assault[who][ind].inhibit = usedCardlist[card].Inhibit;
			//console.log(usedCardlist[card].CardName + " has inhibit" + usedCardlist[card].Inhibit);
		}
		if (usedCardlist[card].Corrosive != null)
		{
			assault[who][ind].corrosive = usedCardlist[card].Corrosive
		}
	}
}

function sortHand(who)
{
	var currHand = [inHand[who][0]];
	var ind = 0;
	var found = 0;
	var prio = [];
	while (found == 0)
	{
		if (currHand[0] == currentDecks[who][ind+2])
		{
			found = 1;
			prio[0]=ind;
		}
		else
		{
			ind ++;
		}
	}
	//console.log(prio);
	for (var i=1; i<inHand[who].length ; i++)
	{
		found = 0;
		ind =0;
		while (found == 0)
		{
			if (inHand[who][i] == currentDecks[who][ind+2])
			{
				found = 1;
				for (var j=0 ; j<currHand.length ; j++)
				{
					if (ind < prio[j])
					{
						prio.splice(j,0,ind);
						//console.log(prio);
						currHand.splice(j,0,inHand[who][i]);
						//console.log(currHand);
						break;
					}
				}
				if (currHand.length == i)
				{
					currHand[i] = inHand[who][i];
					prio[prio.length]= ind;
				}
			}
			else
			{
				ind++;
			}
		}
	}
	/*var mssg = "";
			for (var i=0 ; i< currHand.length ; i++)
			{
				mssg += usedCardlist[currHand[i]].CardName + " , ";
			}
			console.log(mssg);*/
			
	inHand[who]=currHand;
}

function playturn ( who )
{
	if (battle == 1 )
	{	
		activate (who, batskillname , batskillvalue, "",0); 
	}
	for (var i=0; i< commander[who].skills.length ; i++)
	{
		activate(who, commander[who].skills[i].skillname,commander[who].skills[i].level,0 ,usedCardlist[commander[who].rank].Faction, 0);
	}
	for (var j=0; j<struct[who].length ; j++)
	{	
		if (struct[who][j].delayed == 0)
		{
			for (var i=0; i< struct[who][j].skills.length ; i++)
			{
				activate(who, struct[who][j].skills[i].skillname,struct[who][j].skills[i].level,0 ,struct[who][j].faction, 1);
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
			}
			//alert ( usedCardlist[assault[who][j].rank].CardName+" attacks");
			attacks (who , j );
		}
		else if (assault[who][j].jamed == 0)
		{
			assault[who][j].corroded=0;
			assault[who][j].totalcorrosion=0;
		}
	}
	cleanup(who);
}

function activate (who, skillname, skillevel , activ, faction, type )
{
// numbers are position in activSkill array
	var enh_heal = 0;
	var skilllevel =parseInt(skillevel);
	if (type == 2)
	{
		enh_heal = war_heal;
	}
	switch(skillname)
	{
	case 0:
		if (assault[1-who].length >0)
		{	
			var rand = Math.floor(Math.random()*assault[1-who].length);
			if ( assault[1-who][rand].evade >0 )
			{
				assault[1-who][rand].evade --;
			}
			else
			{
				assault[1-who][rand].enfeebled += skilllevel;
			}
		}
		return;
	case 1:
			for (var i=0 ; i<assault[1-who].length ; i++ )
			{
				if ( assault[1-who][i].evade >0 )
				{
					assault[1-who][i].evade --;
				}
				else
				{
					assault[1-who][i].enfeebled += skilllevel;
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
			if (assault[who][valid[rand]].inhibited > 0)
			{
				assault[who][valid[rand]].inhibited --;
			}
			else
			{
				assault[who][valid[rand]].currentHealth = Math.min(assault[who][valid[rand]].currentHealth+skilllevel+enh_heal,assault[who][valid[rand]].health);
			}
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
			if (assault[who][valid[rand]].inhibited > 0)
			{
				assault[who][valid[rand]].inhibited --;
			}
			else
			{
				assault[who][valid[rand]].currentHealth = Math.min(assault[who][valid[rand]].currentHealth+skilllevel+enh_heal,assault[who][valid[rand]].health);
				
			}
		}
		return;
	case 4:
		if (assault[who].length > 0)
		{
			for (var i=0 ; i< assault[who].length ; i++)
			{
				if (assault[who][i].inhibited > 0)
				{
					assault[who][i].inhibited --;
				}
				else
				{
					assault[who][i].currentHealth = Math.min(assault[who][i].currentHealth+skilllevel+enh_heal,assault[who][i].health);
				}
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
					if (assault[who][i].inhibited > 0)
					{
						assault[who][i].inhibited --;
					}
					else
					{
						assault[who][i].currentHealth = Math.min(assault[who][i].currentHealth+skilllevel+enh_heal,assault[who][i].health);
					}
				}
			}
		}
		return;
	case 6:
		if (assault[who].length > 0)
		{
			var rand = Math.floor(Math.random()*assault[who].length);
			if (assault[who][rand].inhibited > 0)
			{
				assault[who][rand].inhibited --;
			}
			else
			{
				assault[who][rand].protect += skilllevel;
			}
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
			if (assault[who][valid[rand]].inhibited > 0)
			{
				assault[who][valid[rand]].inhibited --;
			}
			else
			{
				assault[who][valid[rand]].protect += skilllevel;
			}
		}
		return;
	case 8:
		if (assault[who].length >0)
		{
			for (var i=0 ; i< assault[who].length ; i++)
			{
				if (assault[who][i].inhibited > 0)
				{
					assault[who][i].inhibited --;
				}
				else
				{
					assault[who][i].protect += skilllevel;
				}
			}
		}
		return;
	case 9:
		for (var i=0 ; i< assault[who].length ; i++)
		{
			if (assault[who][i].faction == faction)
			{
				if (assault[who][i].inhibited > 0)
				{
					assault[who][i].inhibited --;
				}
				else
				{
					assault[who][i].protect += skilllevel;
				}
			}
		}
		return;
	case 10:
		var valid = [];
		for (var i=activ ; i< assault[who].length ; i++)
		{
			if ( (assault[who][i].delayed == 0)&&(assault[who][i].jamed == 0))
			{
				valid[valid.length] = i;
			}
		}
		if (valid.length > 0) 
		{
			var rand = Math.floor(Math.random()*valid.length);
			if (assault[who][valid[rand]].inhibited > 0)
			{
				assault[who][valid[rand]].inhibited --;
			}
			else
			{
				assault[who][valid[rand]].attack += skilllevel;
			}
		}		
		return;
	case 11:
		var valid = [];
		var test = 0;
		for (var i=activ ; i< assault[who].length ; i++)
		{
			if ( ( assault[who][i].faction == faction ) && (assault[who][i].delayed == 0)&&(assault[who][i].jamed == 0))
			{
				valid[valid.length] = i;
			}
		}
		if (valid.length > 0) 
		{
			var rand = Math.floor(Math.random()*valid.length);
			if (assault[who][valid[rand]].inhibited > 0)
			{
				assault[who][valid[rand]].inhibited --;
			}
			else
			{
				assault[who][valid[rand]].attack += skilllevel;
			}
		}
		return;
	case 12:
		if (assault[who].length > 0)
		{		
			for (var i=activ ; i< assault[who].length ; i++)
			{
				if (assault[who][i].inhibited > 0)
				{
					assault[who][i].inhibited --;
				}
				else
				{
					assault[who][i].attack += skilllevel;
				}
			}
		}
		return;
	case 13:
		for (var i=activ ; i< assault[who].length ; i++)
		{
			if ((assault[who][i].faction == faction)&& (assault[who][i].delayed == 0)) // delayed test useless here
			{
				if (assault[who][i].inhibited > 0)
				{
					assault[who][i].inhibited --;
				}
				else
				{
					assault[who][i].attack += skilllevel;
				}
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
					//console.log(usedCardlist[commander[who].rank].CardName + " has to wait to jam " + commander[who].jamcount+ " turns.");
					return;
				}
				else if (assault[1-who][valid[rand]].evade > 0)
				{
					assault[1-who][valid[rand]].evade --;
					//console.log(usedCardlist[commander[who].rank].CardName + " tries to jam "+usedCardlist[assault[1-who][valid[rand]].rank].CardName+ " but it evades next try in " + commander[who].jamcount+ " turns.");
					
				}
				else
				{
					commander[who].jamcount = usedCardlist[commander[who].rank].Jam-1;
					assault[1-who][valid[rand]].jamed = 1;
					//console.log(usedCardlist[commander[who].rank].CardName + " jams "+usedCardlist[assault[1-who][valid[rand]].rank].CardName+ " next try in " + commander[who].jamcount+ " turns.");

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
			if (( assault[who][i].delayed == 0)&&(assault[who][i].leech > 0)&&(assault[who][i].jamed == 0))
			{
				valid[valid.length] = i;
			}
		}
		if (valid.length > 0) 
		{
			var rand = Math.floor(Math.random()*valid.length);
			if (assault[who][valid[rand]].inhibited > 0)
			{
				assault[who][valid[rand]].inhibited --;
			}
			else
			{
				assault[who][valid[rand]].leech += skilllevel;
			}
		}		
		return;
	case 22:
		if (assault[who].length >0)
		{
			for (var i=activ ; i< assault[who].length ; i++)
			{
				if (assault[who][i].leech > 0 )
				{			
					if (assault[who][i].inhibited > 0)
					{
						assault[who][i].inhibited --;
					}
					else
					{
						assault[who][i].leech += skilllevel;
					}
				}
			}
		}
		return;
	case 23:
		var valid = [];
		for (var i=activ ; i< assault[who].length ; i++)
		{
			if (( assault[who][i].delayed == 0)&&(assault[who][i].poison > 0)&&(assault[who][i].jamed == 0))
			{
				valid[valid.length] = i;
			}
		}
		if (valid.length > 0) 
		{
			var rand = Math.floor(Math.random()*valid.length);
			if (assault[who][valid[rand]].inhibited > 0)
			{
				assault[who][valid[rand]].inhibited --;
			}
			else
			{
				assault[who][valid[rand]].poison += skilllevel;
			}
		}		
		return;
	case 24:
		if (assault[who].length > 0)
		{
			for (var i=activ ; i< assault[who].length ; i++)
			{
				if (assault[who][i].poison > 0 )
				{	
					if (assault[who][i].inhibited > 0)
					{
						assault[who][i].inhibited --;
					}
					else
					{				
						assault[who][i].poison += skilllevel;
					}
				}
			}
		}
		return;
	case 25:
		var valid = [];
		for (var i=activ ; i< assault[who].length ; i++)
		{
			if (( assault[who][i].delayed == 0)&&(assault[who][i].counter > 0)&&(assault[who][i].jamed == 0))
			{
				valid[valid.length] = i;
			}
		}
		if (valid.length > 0) 
		{
			var rand = Math.floor(Math.random()*valid.length);
			if (assault[who][valid[rand]].inhibited > 0)
			{
				assault[who][valid[rand]].inhibited --;
			}
			else
			{
				assault[who][valid[rand]].counter += skilllevel;
			}
		}		
		return;
	case 26:
		for (var i=activ ; i< assault[who].length ; i++)
		{
			if (assault[who][i].counter > 0 )
			{			
				if (assault[who][i].inhibited > 0)
				{
					assault[who][i].inhibited --;
				}
				else
				{				
					assault[who][i].counter += skilllevel;
				}
			}
		}
		return;
	case 27:
		var valid = [];
		for (var i=activ ; i< assault[who].length ; i++)
		{
			if (( assault[who][i].delayed == 0)&&(assault[who][i].armor > 0)&&(assault[who][i].jamed == 0))
			{
				valid[valid.length] = i;
			}
		}
		if (valid.length > 0) 
		{
			var rand = Math.floor(Math.random()*valid.length);
			if (assault[who][valid[rand]].inhibited > 0)
			{
				assault[who][valid[rand]].inhibited --;
			}
			else
			{
				assault[who][valid[rand]].armor += skilllevel;
			}
		}		
		return;
	case 28:
		for (var i=activ ; i< assault[who].length ; i++)
		{
			if (assault[who][i].armor > 0 )
			{
				if (assault[who][i].inhibited > 0)
				{
					assault[who][i].inhibited --;
				}
				else
				{			
					assault[who][i].armor += skilllevel;
				}	
			}
		}
		return;
	case 29:
		var valid = [];
		for (var i=activ ; i< assault[who].length ; i++)
		{
			if (( assault[who][i].delayed == 0)&&(assault[who][i].berzerk > 0)&&(assault[who][i].jamed == 0))
			{
				valid[valid.length] = i;
			}
		}
		if (valid.length > 0) 
		{
			var rand = Math.floor(Math.random()*valid.length);
			if (assault[who][valid[rand]].inhibited > 0)
			{
				assault[who][valid[rand]].inhibited --;
			}
			else
			{
				assault[who][valid[rand]].berzerk += skilllevel;
			}
		}
		return;
	case 30:
		for (var i=activ ; i< assault[who].length ; i++)
		{
			if (assault[who][i].berzerk > 0 )
			{
				if (assault[who][i].inhibited > 0)
				{
					assault[who][i].inhibited --;
				}
				else
				{			
					assault[who][i].berzerk += skilllevel;
				}
			}
		}
		return;
	case 31:
		var valid = [];
		for (var i=activ ; i< assault[who].length ; i++)
		{
			if (( assault[who][i].delayed == 0)&&(assault[who][i].evade > 0)&&(assault[who][i].jamed == 0))
			{
				valid[valid.length] = i;
			}
		}
		if (valid.length > 0) 
		{
			var rand = Math.floor(Math.random()*valid.length);
			if (assault[who][valid[rand]].inhibited > 0)
			{
				assault[who][valid[rand]].inhibited --;
			}
			else
			{
				assault[who][valid[rand]].evade += skilllevel;
			}
		}
		return;
	case 32:
		for (var i=activ ; i< assault[who].length ; i++)
		{
			if (assault[who][i].evade > 0 )
			{	
				if (assault[who][i].inhibited > 0)
				{
					assault[who][i].inhibited --;
				}
				else
				{			
					assault[who][i].evade += skilllevel;
				}
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
	if (damage == 0)
	{
		assault[who][number].corroded=0;
		assault[who][number].totalcorrosion=0;
	}

	//console.log(usedCardlist[assault[who][number].rank].CardName + " has an attack value of "+ assault[who][number].attack);
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
			damage -=  Math.max(0,assault[1-who][number].armor + assault[1-who][number].protect - assault[who][number].pierce);
			
			if (damage > 0)
			{
				assault[1-who][number].currentHealth -= damage;
				assault[1-who][number].poisoned = Math.max(assault[1-who][number].poisoned , assault[who][number].poison);
				assault[who][number].corroded = Math.max(assault[who][number].corroded , assault[1-who][number].corrosive);
				assault[1-who][number].inhibited += assault[who][number].inhibit;
				assault[who][number].berzerked += assault[who][number].berzerk;
				assault[who][number].currentHealth -= Math.max(0,assault[1-who][number].counter-assault[who][number].protect);
				if (assault[who][number].currentHealth > 0)
				{
					assault[who][number].currentHealth = Math.min(assault[who][number].health,assault[who][number].currentHealth + Math.min(damage,assault[who][number].leech));
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
				assault[who][number].corroded = Math.max(assault[who][number].corroded , struct[1-who][wallID].corrosive);
			}
		}
		else
		{
			commander[1-who].health -= damage;
			if (damage > 0)
			{
				assault[who][number].berzerked += assault[who][number].berzerk;
				assault[who][number].currentHealth -= Math.max(0,commander[1-who].counter-assault[who][number].protect);
				assault[who][number].corroded = Math.max(assault[who][number].corroded , commander[1-who].corrosive);
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

function cleanup(who)
{
// poison damage
	for (var clean=0 ; clean<assault[who].length ; clean++)
	{
		assault[who][clean].currentHealth -= Math.max(0,assault[who][clean].poisoned - assault[who][clean].protect);
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
			//console.log("erase " + usedCardlist[assault[1-who][ind].rank].CardName +  " whose health is "+assault[1-who][ind].currentHealth );
			assault[1-who].splice(ind,1);
		}
		else
		{
			ind ++;
		}
	}
// reset attack , protect , leech , poison , berzerk, evade, jamed, armor, counter, enfeebled(enemy).
	for (var clean=0; clean<struct[who].length; clean++)
	{
		struct[who][clean].evade = usedCardlist[struct[who][clean].rank].Evade;
	}
	for (var clean = 0 ; clean<assault[1-who].length ; clean++)
	{
		var rankid = assault[1-who][clean].rank ;		
		assault[1-who][clean].enfeebled = 0;
		assault[1-who][clean].protect = 0;
		assault[1-who][clean].counter = usedCardlist[rankid].Counter;
		assault[1-who][clean].armor = usedCardlist[rankid].Armor;
	}
	for (var clean=0 ; clean< assault[who].length ; clean++)
	{
		var rankid = assault[who][clean].rank ;
		assault[who][clean].totalcorrosion += assault[who][clean].corroded;
		assault[who][clean].attack = Math.max(0,assault[who][clean].berzerked + usedCardlist[rankid].Attack - assault[who][clean].totalcorrosion) ;
		assault[who][clean].leech = usedCardlist[rankid].Leech;
		assault[who][clean].poison = usedCardlist[rankid].Poison;
		assault[who][clean].berzerk = usedCardlist[rankid].Berzerk;
		assault[who][clean]. evade = usedCardlist[rankid].Evade;
		assault[who][clean].jamed = 0;
		assault[who][clean].inhibited =0;
	}

// reduce delay value by one.
	for (var clean=0; clean<struct[who].length; clean++)
	{
		struct[who][clean].delayed = Math.max(struct[who][clean].delayed - 1 , 0);
	}
	for (var clean=0; clean<assault[who].length; clean++)
	{
		assault[who][clean].delayed = Math.max(assault[who][clean].delayed - 1 , 0);
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
	window.scrollTo(0,1300);

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
					
					
					//console.log("current deck readied " + j);
					if ((currentDecks[0] < 2)||(currentDecks[1]<2))
					{
						alert("invalid decks");
						return;
					}
					score = winrate(form,[],numberoftest , true);
					//console.log(" score " + score);
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
	var cardselect =[];
	var command= "";
	var fieldname ="";
	var NA = 0;
	var found =0;
	for (var i=0 ; i< cardlist.length ; i++)
	{
	if (cardlist[i])
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
		cardselect[cardselect.length] = cardlist[i].CardName;
	}
	}
	$( ".fulllist" ).autocomplete({ 	source: cardselect });
	alert("filter applied");
}

function CleanDeckList(cardlist)
{
	if (confirm("This will erase every thing you have saved so far! \n Are you sure ?"))
	{
		localStorage.removeItem('deck');
		localStorage.removeItem('deckName');
		localStorage.removeItem('collection');
		alert ("deck saved and list of cards in your collection erased");
		var decknames ="";
for (var i=0 ; i< presetDecks.length ; i ++)
		{
			if (presetDecks[i])
			{
				decknames += '<option value="'+ presetDecks[i][0] +'">';
			}	
		}
		document.getElementById('decklist').innerHTML = decknames;
	}
}

function CleanOptim()
{
	if (confirm("This will remove all cards from your current selection, are you sure?"))
	{
		localStorage.removeItem('optimisation');
	}
}

function gauntlet (form,cardlist, alltype)
{
	var attempts = form.tries.value;
	var result = [];
	var total = 0*1;
	fortress = [[-1,-1],[-1,-1]];
	ordered = [false,false];
	for (var ind=1 ; ind<21 ; ind++)
	{
		result[ind] = [0,0,0,0,0];
		deckfield ="form.enemyDeck"+ind+".value";
		nameofdeck = eval(deckfield);
		//console.log (nameofdeck);
		currentDecks[1][0] = nameofdeck;
		var found =0;
		for (var i=0; i<presetDecks.length ; i++)
		{
			if (presetDecks[i])
			{
				if (presetDecks[i][0] == nameofdeck)
				{
					found =1;
					currentDecks[1][1] = presetDecks[i][1];
					usedCardlist[presetDecks[i][1]]=cardlist[presetDecks[i][1]];
					for (var j=1;j<11; j++)
					{
						if (cardlist[presetDecks[i][j+1]])
						{				
							currentDecks[1][j+1] = presetDecks[i][j+1];
							usedCardlist[presetDecks[i][j+1]]=cardlist[presetDecks[i][j+1]];
						}
					}
					break;
				}
			}	
		}
		if (localStorage.deck &&(found == 0))
		{
			var deckNames = localStorage.deckName.split(",");
			var deckArray = localStorage.deck.split(",");
			deckArray = makeDeckArray( deckArray);
			for (var i=0; i< deckNames.length ; i++)
			{
				if (deckNames[i] == nameofdeck)
				{
					found = 1;
					usedCardlist[deckArray[i][1]] =cardlist[deckArray[i][1]];
					
					for (var pickcard = 2; pickcard < 12 ; pickcard ++)
					{
						if (isNumber(deckArray[i][pickcard]))
						{
							if (deckArray[i][pickcard] == -1)
							{
							}
							else
							{
								usedCardlist[deckArray[i][pickcard]] =cardlist[deckArray[i][pickcard]];
								currentDecks[1][pickcard]=deckArray[i][pickcard];
							}
						}
					}
					break;
				}
			}
		}
		if (found ==0)
		{
			alert("The deck chosen for the opponent number "+i+ " Does not exist");
		}
		for (var j=0 ; j<attempts ; j++)
		{
			ordered=[true,false];
			battle = 0;
			result[ind][0] += simulation (form);
			ordered=[false,true];
			battle =1;
			result[ind][1] += simulation (form);
			if (alltype)
			{
				ordered =[false,true];
				battle = 0;
				result[ind][4] += simulation (form);
				ordered=[true,false];
				battle =1;
				result[ind][3] += simulation (form);
			}
		}
		result[ind][2] = result[ind][0]+result[ind][1];
		if (alltype)
		{
			result[ind][2] += result[ind][3]+ result[ind][4];
			result[ind][2]= result[ind][2] / 2;
		}
		placename = "attres"+ ind;
		document.getElementById(placename).value = result[ind][0]*100 / attempts;
		placename = "defres"+ ind;
		document.getElementById(placename).value = result[ind][1]*100 / attempts;
		if (alltype)
		{
			placename = "attsres"+ ind;
			document.getElementById(placename).value = result[ind][3]*100 / attempts;
			placename = "defsres"+ ind;
			document.getElementById(placename).value = result[ind][4]*100 / attempts;
		}
		placename = "avres"+ ind;
		document.getElementById(placename).value = result[ind][2]*50 / attempts;
		total += result[ind][2];
	}
	var total = total *25/attempts;
	alert ("Your gauntlet score is: " +total);
	
}

function moveCard(form, owner, id1, id2)
{
	var fieldpre = "";
	if (owner == 0)
	{
		fieldpre ="playerCard";
	}
	else
	{
		fieldpre="enemyCard";
	}
	var fieldname1 = fieldpre + id1;
	var fieldname2 = fieldpre + id2;
	var card1 = eval("form."+fieldname1+".value");
	var card2 = eval("form."+fieldname2+".value");
	document.getElementsByName(fieldname1).item(0).value = card2;
	document.getElementsByName(fieldname2).item(0).value = card1;
	
}
