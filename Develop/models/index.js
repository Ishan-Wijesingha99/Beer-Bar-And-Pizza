const User = require('./User');
const Ingredients = require('./Ingredient');
const Beer = require('./Beer');
const Pizza = require('./Pizza');
const Favourites = require('./Favourite');

Pizza.hasMany(Ingredients, {
  foreignKey: 'pizza_id',
});


module.exports = { User, Pizza, Beer, Ingredients, Favourites };



