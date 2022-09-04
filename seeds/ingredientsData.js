const { Ingredients } = require('../models');

const ingredientsData = [
  {
    "name": "Anchovies",
    "price": "2"
  },
  {
    "name": "Bacon",
    "price": "2"
  },
  {
    "name": "Capsicum",
    "price": "2"
  }, 
  {
    "name": "Cheese",
    "price": "2"
  }, 
  {
    "name": "Mushroom",
    "price": "2"
  }, 
  {
    "name": "Olives",
    "price": "2"
  },
  {
    "name": "Onion",
    "price": "2"
  },
  {
    "name": "Pineapple",
    "price": "2"
  },
];

const seedIngredients = () => Ingredients.bulkCreate(ingredientsData);

module.exports = seedIngredients;