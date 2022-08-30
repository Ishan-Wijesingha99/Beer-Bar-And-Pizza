const { User } = require('../models');

const userData = [
  {
    "name": "James",
    "email": "james@monash.com",
    "password": "password12345"
  },
  {
    "name": "Ishan",
    "email": "ishan@monash.com",
    "password": "password12345"
  },
  {
    "name": "Mina",
    "email": "mina@monash.com",
    "password": "password12345"
  },
  {
    "name": "Sudheer",
    "email": "sudheer@monash.com",
    "password": "password12345"
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;

