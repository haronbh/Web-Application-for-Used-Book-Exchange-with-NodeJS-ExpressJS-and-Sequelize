const { DataTypes } = require('sequelize');
const db = require('../config/db.config');
const Author = require('./author');
const Book = require('./book');

const AuthorBook = db.define('AuthorBook', {
    // Définissez les champs de la table de liaison AuthorBook si nécessaire
});

// Définir les relations
Author.belongsToMany(Book, { through: 'AuthorBook' });
Book.belongsToMany(Author, { through: 'AuthorBook' });

module.exports = AuthorBook;
