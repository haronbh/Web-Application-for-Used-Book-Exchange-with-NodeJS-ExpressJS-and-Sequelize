// Route POST pour ajouter un nouveau livre
app.post('/books', async (req, res) => {
    try {
      // Extraire les données du corps de la requête
      const { titre, auteur } = req.body;
  
      // Créer le livre
      const book = await db.Book.create({ titre: titre, auteur: auteur });
  
      // Réponse de succès
      res.status(201).json({ message: 'Le livre a été ajouté avec succès', book });
    } catch (error) {
      // Gestion des erreurs
      console.error('Erreur lors de l\'ajout du livre :', error);
      res.status(500).json({ error: 'Une erreur est survenue lors de l\'ajout du livre' });
    }
  });
  