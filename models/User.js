const { Sequelize } = require("sequelize");
const sequelize = require('../db')
module.exports=(sequelize,DataTypes)=>{
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
            unique: true
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
          },
          create_timestamp:{
            type: Sequelize.DATE, 
            defaultValue: DataTypes.NOW 
          }
        }
      );
      return User;
}