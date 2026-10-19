const express = require("express");
const cors = require("cors");

const garderieRoutes = require("./routes/garderie");
const servicesRoutes = require("./routes/services");
const activitesRoutes = require("./routes/activites");

const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:3000",
  }),
);
app.use(express.json());

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

app.listen(port, () => {
  console.log(`Backend démarré sur le port ${port}`);
});
