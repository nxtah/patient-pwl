const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('data_patient', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Patient = require('./Patient')(sequelize, Sequelize);

module.exports = db;
