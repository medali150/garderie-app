const express = require("express");
const cors = require("cors");

const garderieRoutes = require("./routes/garderie");
const servicesRoutes = require("./routes/services");
const activitesRoutes = require("./routes/activites");

const app = express();
const PORT = process.env.PORT || 5000;
const allowedOrigins = [
  "http://localhost:3000",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "ok", message: "API Garderie en ligne" });
});

app.use("/api/garderie", garderieRoutes);
app.use("/api/services", servicesRoutes);
app.use("/api/activites", activitesRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Route introuvable" });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Une erreur interne est survenue" });
});

if (require.main === module) {
  app.listen(PORT, () => console.log(`API sur le port ${PORT}`));
}

module.exports = app;
