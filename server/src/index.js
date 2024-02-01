require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("node:path");

const app = express();

const PORT = process.env.PORT || 3310;

// Route de test

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello World!!" });
});

// Définit le répertoire contenant les fichiers statiques de l'application React
const reactBuildPath = path.join(__dirname, "..", "..", "client", "dist");

// Utilise express.static pour servir les fichiers statiques
app.use(express.static(reactBuildPath));

// Redirige les requêtes non gérées vers le fichier index.html de React
app.get("*", (req, res) => {
  res.sendFile(path.join(reactBuildPath, "index.html"));
});

// Lance le serveur Express
app.listen(PORT, (err) => {
  if (err) {
    console.error("Erreur lors du démarrage du serveur : ", err);
  } else {
    console.log(`Serveur en écoute sur le port ${PORT}`);
  }
});
