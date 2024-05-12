const  {sequelize}  = require("../db");
const { Sequelize } = require('sequelize')
const User = sequelize.define(
  'user',
  {
    // Model attributes are defined here
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    username:{
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      primaryKey:true,
    },
    email:{
      type:Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
          isEmail: true,
        },
    },
    password_hash:{
      type: Sequelize.STRING,
      allowNull: false
    }
  }
);
module.exports = User;