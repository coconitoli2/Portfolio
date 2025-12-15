const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 3000;

// Servir le dossier public (index.html, 404.html, CSS, images…)
app.use(express.static(path.join(__dirname, "public")));

// Route Accueil (optionnelle, index.html sera servi automatiquement par express.static)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Middleware 404 — doit être **en dernier**
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

// Lancer le serveur
app.listen(port, () => {
    console.log(`Serveur lancé sur le port ${port}`);
});
