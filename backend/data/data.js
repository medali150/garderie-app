const garderie = {
  nom: "Les Petits Soleils",
  slogan: "Grandir avec le sourire, chaque jour.",
  description:
    "Une garderie chaleureuse où chaque enfant évolue dans un cocon entouré d'attention et de bienveillance.",
  adresse: "12 rue des Écoliers, 75000 Paris",
  telephone: "+33 1 42 68 20 20",
  email: "bonjour@petitssoleils.fr",
  horaires: "Du lundi au vendredi, de 7 h 30 à 18 h 30",
  imageHero: "/garderie-hero.svg",
};

const services = [
  {
    id: 1,
    titre: "Garde à la journée",
    description:
      "Un accueil bienveillant et sécurisé, adapté au rythme de chaque enfant, de 7 h 30 à 18 h 30.",
    icone: "🌈",
  },
  {
    id: 2,
    titre: "Éveil et apprentissage",
    description:
      "Des activités créatives et ludiques pour grandir, explorer et apprendre en s'amusant chaque jour.",
    icone: "🧠",
  },
  {
    id: 3,
    titre: "Repas et sieste",
    description:
      "Des repas équilibrés préparés avec soin et un espace calme pour recharger les petites batteries.",
    icone: "🍎",
  },
];

const activites = [
  {
    id: 1,
    nom: "Éveil musical",
    description: "Découvrir les sons et le rythme avec des instruments adaptés.",
    ageMin: 1,
    ageMax: 3,
    icone: "🎵",
  },
  {
    id: 2,
    nom: "Atelier créatif",
    description: "Exprimer son imagination avec les couleurs, le dessin et le collage.",
    ageMin: 2,
    ageMax: 6,
    icone: "🎨",
  },
  {
    id: 3,
    nom: "Histoires et comptines",
    description: "Partager un moment calme autour de contes et de comptines.",
    ageMin: 1,
    ageMax: 6,
    icone: "📚",
  },
  {
    id: 4,
    nom: "Jeux en plein air",
    description: "Bouger, courir et explorer la nature dans notre espace extérieur.",
    ageMin: 2,
    ageMax: 6,
    icone: "🌿",
  },
  {
    id: 5,
    nom: "Petits explorateurs",
    description: "Observer, manipuler et comprendre le monde qui nous entoure.",
    ageMin: 2,
    ageMax: 5,
    icone: "🔍",
  },
];

module.exports = { garderie, services, activites };
