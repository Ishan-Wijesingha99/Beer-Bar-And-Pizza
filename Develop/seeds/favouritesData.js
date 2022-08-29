const { Favourites } = require('../models');

const favouritesData = [
  {
    "name": "Pepperoni",
    "price": "15"
  },
  {
    "name": "Meatlovers",
    "price": "18"
  },
  {
    "name": "Chicken and Pineapple",
    "price": "20"
  },
  {
    "name": "Spicy fire",
    "price": "19"
  },
];

const seedFavourites = () => Favourites.bulkCreate(favouritesData);

module.exports = seedFavourites;