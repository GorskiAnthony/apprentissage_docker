require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("node:path");

const app = express();

const PORT = process.env.PORT || 3310;

app.use(
  cors({
    origin: "http://localhost:3000",
  }),
);

app.get("/", (req, res) => {
  res.json({ message: "Hello World!!" });
});

/**
 * Render the index.html file
 */

// Définit le répertoire statique pour servir les fichiers React
app.use(express.static(path.join(__dirname, "client", "build")));

// Définit une route pour toutes les autres requêtes qui ne correspondent pas aux fichiers statiques
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is running on port %s`, PORT);
  }
});
