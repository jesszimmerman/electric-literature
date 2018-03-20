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
    "Baggy",
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
    
  ],

  designElement: [
    "Waterfall",
    "Aspidistra",
    "Skylight",
    "Awning",
    "Birch",
    "Rockface",
    "Seaglass",
    "Vine",
    "Rocks",
    "Skull",
    "Creek",
    "Branch",
    "Succulent",
    "Cat",
    "Gecko",
    "Stones",
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


  ],

  // Rules that use/combine words

  origin: [
    "#clothesAdjective# #designElement# Press",
   
  ]    

}
