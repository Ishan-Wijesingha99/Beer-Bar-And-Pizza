const User = require('./User');
const Ingredients = require('./Ingredients');
const Beer = require('./Beer');
const Pizza = require('./Pizza');
const Favourites = require('./Favourites');

Pizza.hasMany(Ingredients, {
  foreignKey: 'pizza_id',
});


module.exports = { User, Pizza, Beer, Ingredients, Favourites };



