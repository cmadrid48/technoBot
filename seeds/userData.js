const { User } = require("../models");

const userData = [
  {
    id: 1,
    username: "carlosmadrid",
    password: "password",
  },
  {
    id: 2,
    username: "barlosmadrid",
    password: "passwerd",
  },
  {
    id: 3,
    username: "carloadrid",
    password: "paaasword",
  },
  {
    id: 4,
    username: "carlo",
    password: "password1234",
  },
  {
    id: 5,
    username: "madridlos",
    password: "pwdddddddd",
  },
];

const seedUser = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUser;
