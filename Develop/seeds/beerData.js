const { Beer } = require('../models');

const beerData = [
  {
    "name": "Asahi Super Dry",
    "description": "Asahi Super Dry is refreshing, smooth and brewed from quality ingredients. Made using only the purest ingredients and advanced brewing techniques.",
    "price": "8"
  },
  {
    "name": "Furphy",
    "description": "Furphy Refreshing Ale is a clean and crisp, balanced beer with subtle fruit flavours and aromas.",
    "price": "7"
  },
  {
    "name": "Victoria Bitter",
    "description": "Victoria Bitter was first brewed by Thomas Aitkin in 1854 as a full flavoured, full strength and thirst quenching beer for the harsh Australian climate.",
    "price": "6"
  },
  {
    "name": "Somersby Pear",
    "description": "Somersby Pear Cider is a refreshing and crisp cider made from fermented pear juice and natural pear flavouring. There are no artificial sweeteners.",
    "price": "6"
  },
];

const seedBeer = () => Beer.bulkCreate(beerData);

module.exports = seedBeer;