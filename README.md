# Garderie App — Les Petits Soleils

[![Next.js](https://img.shields.io/badge/Next.js-16.4.2-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![Express](https://img.shields.io/badge/Express-5.3.0-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)

**Garderie App** est une application web responsive pour la garderie
**Les Petits Soleils**. Elle présente la garderie, ses services et ses
activités avec un frontend Next.js et une API REST Express alimentée par des
données statiques.

## Fonctionnalités

- Landing page responsive adaptée aux mobiles, tablettes et ordinateurs.
- Navigation Bootstrap avec menu burger sur mobile.
- Présentation dynamique de la garderie, de ses services et de ses activités.
- API REST Express avec routes dédiées.
- États de chargement avec spinners Bootstrap.
- Messages d’erreur visibles lorsque l’API est indisponible.
- Configuration de l’URL de l’API via une variable d’environnement publique.
- Organisation du code en composants React indépendants.

## Technologies utilisées

| Domaine | Technologie | Version |
| --- | --- | --- |
| Frontend | Next.js (App Router, JavaScript) | 16.4.2 |
| Interface | Bootstrap | 5.3.8 |
| UI | React | 19.3.0 |
| Backend | Node.js + Express | Express 5.3.0 |
| Communication | API REST + CORS | — |
| Outils | npm, Git, GitHub, Nodemon | — |

## Structure du projet

```text
garderie-app/
├── frontend/
│   ├── app/
│   │   ├── bootstrap-client.js
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   ├── components/
│   │   ├── Activites.js
│   │   ├── Hero.js
│   │   ├── Navbar.js
│   │   └── Services.js
│   ├── lib/
│   │   └── api.js
│   ├── public/
│   │   └── garderie-hero.svg
│   ├── .env.example
│   └── package.json
├── backend/
│   ├── data/
│   │   └── data.js
│   ├── routes/
│   │   ├── activites.js
│   │   ├── garderie.js
│   │   └── services.js
│   ├── .gitignore
│   ├── package.json
│   └── server.js
├── .gitignore
└── README.md
```

## Prérequis

- Node.js 18 ou version ultérieure
- npm
- Git
- Un compte GitHub est recommandé pour publier le projet

Vérifier les versions installées :

```bash
node --version
npm --version
git --version
```

## Installation et exécution

Cloner le dépôt :

```bash
git clone https://github.com/medali150/garderie-app.git
cd garderie-app
```

### Démarrer le backend

Dans un terminal :

```bash
cd backend
npm install
npm run dev
```

L’API est disponible sur [http://localhost:5000](http://localhost:5000).

### Démarrer le frontend

Dans un second terminal, depuis la racine du projet :

```bash
cd frontend
npm install
cp .env.example .env.local
npm run dev
```

Sous PowerShell, la copie de l’environnement peut aussi être effectuée avec :

```powershell
Copy-Item .env.example .env.local
```

Le frontend est disponible sur [http://localhost:3000](http://localhost:3000).

La variable d’environnement utilisée par le frontend est :

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## Documentation de l’API

Toutes les routes renvoient du JSON et sont préfixées par `/api`.

### GET `/api/garderie`

Retourne les informations générales de la garderie.

Requête :

```bash
curl http://localhost:5000/api/garderie
```

Réponse réelle (`200 OK`) :

```json
{
  "nom": "Les Petits Soleils",
  "slogan": "Grandir avec le sourire, chaque jour.",
  "description": "Une garderie chaleureuse où chaque enfant évolue dans un cocon entouré d'attention et de bienveillance.",
  "adresse": "12 rue des Écoliers, 75000 Paris",
  "telephone": "+33 1 42 68 20 20",
  "email": "bonjour@petitssoleils.fr",
  "horaires": "Du lundi au vendredi, de 7 h 30 à 18 h 30",
  "imageHero": "/garderie-hero.svg"
}
```

Codes de statut :

- `200 OK` : informations retournées.
- `404 Not Found` : route inexistante.
- `500 Internal Server Error` : erreur serveur imprévue.

### GET `/api/services`

Retourne les trois services présentés sur la landing page.

Requête :

```bash
curl http://localhost:5000/api/services
```

Réponse réelle (`200 OK`) :

```json
[
  {
    "id": 1,
    "titre": "Garde à la journée",
    "description": "Un accueil bienveillant et sécurisé, adapté au rythme de chaque enfant, de 7 h 30 à 18 h 30.",
    "icone": "🌈"
  },
  {
    "id": 2,
    "titre": "Éveil et apprentissage",
    "description": "Des activités créatives et ludiques pour grandir, explorer et apprendre en s'amusant chaque jour.",
    "icone": "🧠"
  },
  {
    "id": 3,
    "titre": "Repas et sieste",
    "description": "Des repas équilibrés préparés avec soin et un espace calme pour recharger les petites batteries.",
    "icone": "🍎"
  }
]
```

Codes de statut :

- `200 OK` : liste des services retournée.
- `404 Not Found` : route inexistante.
- `500 Internal Server Error` : erreur serveur imprévue.

### GET `/api/activites`

Retourne les activités proposées, avec la tranche d’âge recommandée.

Requête :

```bash
curl http://localhost:5000/api/activites
```

Réponse réelle (`200 OK`) :

```json
[
  {
    "id": 1,
    "nom": "Éveil musical",
    "description": "Découvrir les sons et le rythme avec des instruments adaptés.",
    "ageMin": 1,
    "ageMax": 3,
    "icone": "🎵"
  },
  {
    "id": 2,
    "nom": "Atelier créatif",
    "description": "Exprimer son imagination avec les couleurs, le dessin et le collage.",
    "ageMin": 2,
    "ageMax": 6,
    "icone": "🎨"
  },
  {
    "id": 3,
    "nom": "Histoires et comptines",
    "description": "Partager un moment calme autour de contes et de comptines.",
    "ageMin": 1,
    "ageMax": 6,
    "icone": "📚"
  },
  {
    "id": 4,
    "nom": "Jeux en plein air",
    "description": "Bouger, courir et explorer la nature dans notre espace extérieur.",
    "ageMin": 2,
    "ageMax": 6,
    "icone": "🌿"
  },
  {
    "id": 5,
    "nom": "Petits explorateurs",
    "description": "Observer, manipuler et comprendre le monde qui nous entoure.",
    "ageMin": 2,
    "ageMax": 5,
    "icone": "🔍"
  }
]
```

Codes de statut :

- `200 OK` : liste des activités retournée.
- `404 Not Found` : route inexistante.
- `500 Internal Server Error` : erreur serveur imprévue.

## Workflow Git

Le projet utilise une branche principale `main` et une branche dédiée par
étape. Chaque branche de fonctionnalité est conservée après sa fusion.

| Branche | Rôle |
| --- | --- |
| `main` | Version intégrée et stable du projet |
| `feature/landing-page` | Création de la landing page responsive |
| `feature/components` | Extraction de Navbar, Hero et Services |
| `feature/backend` | Création de l’API Node.js / Express |
| `feature/api-integration` | Connexion du frontend aux API |
| `docs/readme` | Documentation du projet |

Pour garder l’historique visible, les branches sont fusionnées avec :

```bash
git merge --no-ff <nom-de-branche> -m "merge: <nom-de-branche> into main"
git push origin --all
```

## Captures d’écran

Les captures d’écran de la landing page pourront être ajoutées dans le dossier
`docs/` et référencées ici :

```text
docs/
├── landing-desktop.png
├── landing-tablet.png
└── landing-mobile.png
```

## Auteur et licence

Projet réalisé par **Mohamed Ali Gharbi** ([medali150](https://github.com/medali150)).

Ce projet est distribué sous licence **ISC**.
