/**
 * @author Yoz & co.
 * 
 * Most of these words and rules come from replies to this thread:
 * https://twitter.com/emilyhughes/status/975896813139124224
 */

var grammar = {

  // Words for rules

  clothesAdjective: [
    "Tight",
    "Skinny",
    "Velvet",
    "Linen",
    "Black",
    "Skimpy",
    "Denim",
    "Sparkly",
    "Sleek",
    "Warm",
    "Leather",
    "Feather",
    "Mustard",
    "Stretchy",
    "Loose",
    "Drapey",
    "Soft",
    "Grey",
    "Snug",
    "Wool",
    "White",
    "Green",
    "Blue",
    "Red",
    "Utility",
    "Cashmere",
    "Collared",
    "Fancy",
    "Silk",
    "Cozy",
    "Ragged",
    "Tartan",
    "Lace",
    "Silver",
    "Gold",
    "Pleated",
    
  ],

  designElement: [
    "Waterfall",
    "Sky",
    "Birch",
    "Vine",
    "Rock",
    "Skull",
    "Creek",
    "Branch",
    "Succulent",
    "Cat",
    "Gecko",
    "Stone",
    "Slate",
    "Owl",
    "Fox",
    "Bird",
    "Leaf",
    "Snail",
    "Whale",
    "Wave",
    "Orchid",
    "Sun",
    "Plant",
    "Tree",
    "Cactus",
    "Rose",
    "Snake",
    "Wood",
    "Beetle",
    "Moth",
    "Moss",
    "Star",


  ],

  // Rules that use/combine words

  origin: [
    "#clothesAdjective# #designElement# Press",
   
  ]    

}
