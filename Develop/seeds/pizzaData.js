const { Pizza } = require('../models');

const pizzaData = [
  {
    "name": "Pepperoni",
    "description": "A Domino's classic. Slices of crispy pepperoni & creamy mozzarella",
    "price": "15"
  },
  {
    "name": "Meatlovers",
    "description": "Crispy rasher bacon, pepperoni pieces, seasoned ground beef, smoky leg ham & Italian sausage, all on a BBQ sauce base",
    "price": "18"
  },
  {
    "name": "Chicken and Pineapple",
    "description": "Seasoned chicken, pineapple, mushrooms, capsicum and sliced red onions, topped with spring onions",
    "price": "20"
  },
  {
    "name": "Spicy fire",
    "description": "Pepperoni, smokey leg ham, seasoned ground beef, fiery jalapenos, tomato & sliced red onion with a spicy hit of chilli flakes",
    "price": "19"
  },
];

const seedPizza = () => Pizza.bulkCreate(pizzaData);

module.exports = seedPizza;