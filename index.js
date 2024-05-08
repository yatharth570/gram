// const express = require('express');
// const app = express();
const { sequelize } = require('./db')
const User = require('./models/User')

sequelize.sync({force:true}).then((result)=>console.log(result));