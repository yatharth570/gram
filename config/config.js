const dotenv = require('dotenv');
dotenv.config()

module.exports = {
  development: {
    username: "gram_ugfr_user",
    password: "556Nl0bRvghSOPJQKgxYpyK28PQhcvym",
    database: "gram_ugfr",
    host: "dpg-colucc8l5elc73bq97ng-a.oregon-postgres.render.com",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
  // test: {
  //   url: process.env.TEST_DATABASE_URL,
  //   dialect: 'postgres',
  // },
  // production: {
  //   url: process.env.DATABASE_URL,
  //   dialect: 'postgres',
  // },
};