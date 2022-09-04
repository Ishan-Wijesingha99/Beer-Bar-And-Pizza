const sequelize = require('../config/connection');

const seedUser = require('./userData');
const seedPizza = require('./pizzaData');
const seedBeer = require('./beerData');
const seedFavourites = require('./favouritesData');
const seedIngredients = require('./ingredientsData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedPizza();

  await seedBeer();

  await seedFavourites();

  await seedIngredients();

  process.exit(0);
};

seedAll();

