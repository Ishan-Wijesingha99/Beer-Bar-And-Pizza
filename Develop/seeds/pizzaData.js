const { Pizza } = require('../models');

const pizzaData = [
  {
    "pizza_name": "Pepperoni",
    "pizza_description": "A Domino's classic. Slices of crispy pepperoni & creamy mozzarella.",
    "price": "15",
    "filename": "pepperoni.jpg"
  },
  {
    "pizza_name": "Meatlovers",
    "pizza_description": "Crispy rasher bacon, pepperoni pieces, seasoned ground beef, smoky leg ham & Italian sausage, all on a BBQ sauce base.",
    "price": "18",
    "filename": "meatlovers.jpg"
  },
  {
    "pizza_name": "Chicken and Pineapple",
    "pizza_description": "Seasoned chicken, pineapple, mushrooms, capsicum and sliced red onions, topped with spring onions.",
    "price": "20",
    "filename": "chickenpineapple.jpg"
  },
  {
    "pizza_name": "Spicy fire",
    "pizza_description": "Pepperoni, smokey leg ham, seasoned ground beef, fiery jalapenos, tomato & sliced red onion with a spicy hit of chilli flakes.",
    "price": "19",
    "filename": "spicy.jpg"
  },
];

const seedPizza = () => Pizza.bulkCreate(pizzaData);

module.exports = seedPizza;