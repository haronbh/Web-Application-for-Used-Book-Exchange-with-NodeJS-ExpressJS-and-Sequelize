const { DataTypes } = require('sequelize');
const db = require('../config/db.config');

const Book = db.define('Book', {
    title: {
        type: DataTypes.STRING,
        
    },
    // Ajoutez d'autres champs selon vos besoins
});

module.exports = Book;
