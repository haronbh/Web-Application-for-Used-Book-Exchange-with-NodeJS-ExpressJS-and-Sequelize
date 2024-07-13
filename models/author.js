const { DataTypes } = require('sequelize');
const db = require('../config/db.config');

const Author = db.define('Author', {
    name: {
        type: DataTypes.STRING,
    },

    // Ajoutez d'autres champs selon vos besoins
});

module.exports = Author;
