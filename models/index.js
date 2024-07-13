const sequelize = require('../config/db.config');
const Author = require('./author');
const Book = require('./book');
const AuthorBook = require('./authorbook');

// Définir les relations entre les modèles si nécessaire

module.exports = {
    Author,
    Book,
    AuthorBook,
    sequelize // Exporter l'instance Sequelize si nécessaire
};
