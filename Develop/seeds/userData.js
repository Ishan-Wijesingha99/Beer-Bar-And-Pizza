const { User } = require('../models');

const userData = [
  {
    "name": "James",
    "email": "james@monash.com",
    "password": "password12345",
    "mobile": "0412345678",
    "address": "123 Fake Street, VIC"
  },
  {
    "name": "Ishan",
    "email": "ishan@monash.com",
    "password": "password12345",
    "mobile": "0412345678",
    "address": "123 Fake Street, VIC"
  },
  {
    "name": "Mina",
    "email": "mina@monash.com",
    "password": "password12345",
    "mobile": "0412345678",
    "address": "123 Fake Street, VIC"
  },
  {
    "name": "Sudheer",
    "email": "sudheer@monash.com",
    "password": "password12345",
    "mobile": "0412345678",
    "address": "123 Fake Street, VIC"
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;

