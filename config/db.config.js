const { Sequelize } = require('sequelize');
const path = require('path');

const dbPath = path.resolve(__dirname, '../data/mabase.sqlite');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: dbPath
});

module.exports = sequelize;
