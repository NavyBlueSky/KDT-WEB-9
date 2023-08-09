'use strict';


const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')["development"];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

//model
db.Visitor = require('./Visitor')(sequelize, Sequelize);
// 아래의 세줄을 한번에 쓴 것이 위의 코드
// const a = require('./Visitor')
// const b = a(sequelize, Sequelize)
// db.Visitor = b


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;