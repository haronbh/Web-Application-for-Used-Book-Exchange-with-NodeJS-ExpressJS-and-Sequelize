const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import du module cors
const db = require('./config/db.config.js'); // Import de la configuration de la base de données
const models = require('./models/index.js'); // Import du fichier index.js des modèles

const app = express();
const PORT = process.env.PORT || 3009;

// Middleware pour autoriser les requêtes CORS
app.use(cors());

// Middleware pour parser les requêtes JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
      
// Routes
// Route POST pour ajouter un nouveau livre
app.post('/books', async (req, res) => {
    try {
        console.log(req.body)
        // Récupérer les données du livre depuis le corps de la requête
        const { titre, auteur } = req.body;

        if (!titre || !auteur) {
            return res.status(400).json({ erreur: "Le titre et l'auteur sont requis." });
        }

        // Créer le livre dans la table `books`
        const newBook = await models.Book.create({
            title: titre
            
        });


        // Si l'auteur n'existe pas, le créer
        const newAuthor = await models.Author.create({
                name: auteur
            });
        

        // Créer une entrée dans la table de liaison `authorbooks`
        await models.AuthorBook.create({
            AuthorId: author.id,
            BookId: newBook.id
        });

        // Envoyer une réponse indiquant que le livre a été ajouté avec succès
        res.status(201).json({ message: 'Nouveau livre ajouté avec succès.' });
    } catch (error) {
        // En cas d'erreur, envoyer une réponse d'erreur
        console.error('Erreur lors de l\'ajout du livre :', error);
        res.status(500).json({ message: 'Une erreur est survenue lors de l\'ajout du livre.' });
    }
});

// Connexion à la base de données
db.authenticate()
    .then(() => {
        console.log('Connexion à la base de données réussie.');
    })
    .catch(err => {
        console.error('Erreur de connexion à la base de données :', err);
    });

const path = require('path');

// Définir le dossier racine pour les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Lorsque vous accédez à /books.html, servez le fichier books.html
app.get('/books.html', (req, res) => {
    res.sendFile(__dirname + '/public/books.html');
});

// Synchronisation des modèles avec la base de données
models.sequelize.sync()
    .then(() => {
        console.log('Modèles synchronisés avec la base de données.');
    })
    .catch(err => {
        console.error('Erreur lors de la synchronisation des modèles avec la base de données :', err);
    });

// Lancement du serveur
app.listen(PORT, () => {
    console.log(`Serveur Express écoutant sur le port ${PORT}`);
});
