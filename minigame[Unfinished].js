Game.Loadmod("https://unpkg.com/cppkies");
/*=================================================
  Upgrades
=================================================*/

//Mineshaft Collapse Time Upgrades
new Cppkies.Upgrade(
  "Iron Support Beams",
  "Mineshaft stays up for twice as long.<q>Quality support beams for quality customers!</q>",
  10,
  [0,3]
  );

new Cppkies.Upgrade(
  "Stainless Steel Support Beams",
  "Mineshaft stays up even longer.<q>Wait, who makes these?</q>",
  10,
  [0, 3, M.iconsImage]
  );

new Cppkies.Upgrade(
  "Titanium Support Beams",
  "Mineshafts stay up five times as long.<q>The odds of these giving away are quite low, my question is how the mines uncollapse for people to install these.</q>",
  10,
  [0, 3, M.iconsImage]
  );

//Pickace Upgrades

new Cppkies.Upgrade(
  "When you accidentally mine diamonds with a wooden pickaxe",
  "Better pickaxe for mining better ores.<q>Wait, you actually mined diamonds with a wooden pickaxe?! Take an iron one you dweeb!</q>",
  10,
  [0, 3, M.iconsImage]
  );

new Cppkies.Upgrade(
  "Diamond Pickaxes",
  "An even better pickaxe for mining better ores and faster mining speeds.<q>Fun fact: diamonds for a pickaxe tip would be impossibly weak as the crystals would shatter on impact almost instantly.</q>",
  10,
  [0, 3, M.iconsImage]
  );

new Cppkies.Upgrade(
  "Netherite Pickaxes",
  "Powerful pickaxe for mining all ores insanely fast.</b><q>Wait this isn't minecraft</q>",
  10,
  [0, 3, M.iconsImage]
  );

//Backpack Upgrades

new Cppkies.Upgrade(
  "Larger Plastic Bins",
  "Store up to 10 ores at a time.</b><q>Have fun carrying your ores in this. Those things are HEAVY.</q>",
  10,
  [0, 3, M.iconsImage]
  );

new Cppkies.Upgrade(
  "Attachable Wheels",
  "Wheels designed to make your bins easier to push, making you able to carry up to 15 ores.</b><q>Finally, some convenience!</q>",
  10,
  [0, 3, M.iconsImage]
  );

new Cppkies.Upgrade(
  "Minecarts",
  "Large carts for storing and transporting up to 25 ores.</b><q>This is just the better version of the last 2, why didn't we save money on these?</q>",
  10,
  [0, 3, M.iconsImage]
  );
/*=================================================
  Upgrade Mechanics
=================================================*/
if (Game.Has('Titanium Support Beams')) {
  var MaxMinetime = 1200
}else if (Game.Has('Stainless Steel Support Beams')) {
  var MaxMinetime = 900
}else if (Game.Has('Iron Support Beams') {
  var MaxMineTime = 600
}else{
  var MaxMinetime = 300  
};


          
/*=================================================
  Achievements
=================================================*/

new Cppkies.Achievement(
  "When you get a victory royale with 1 health left"
  "Escape a mineshaft with 1 second left<q>POGGERS</q>"
  [1,7]
)

new Cppkies.Achievement(
  "That thing you do when you want people to hate you"
  "Mine diamonds with a wooden pickaxe.<q>You are the scum of the earth.</q>"
  [1,7]
)

/*=================================================
  Create Ore Types
=================================================*/



Game.Ores=[];
Game.Ore=function(name,pic,icon,depth,stats,loot)
{














