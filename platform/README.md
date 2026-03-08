# Plateforme de pilotage – C.I.P FARO Rudy

Plateforme complète de gestion pour le centre de formation **C.I.P FARO Rudy**.

## Fonctionnalités

| Module | Description |
|--------|-------------|
| 👤 **Candidats** | Inscription, parcours candidat, gestion des statuts |
| 🧪 **Tests de positionnement** | Évaluation initiale du niveau des candidats |
| ✅ **Prérequis** | Vérification et validation des prérequis |
| 📄 **Devis & Conventions** | Création et suivi des documents contractuels |
| 🎓 **Formations** | Pilotage des sessions de formation |
| 📊 **Blocs de compétences** | Suivi BC01, BC02, BC03 et évaluations |
| 📋 **Suivi ECF** | Évaluations en cours de formation |
| 🕐 **Émargement** | Feuilles de présence et signatures électroniques |
| 📜 **Attestations** | Émission et gestion des certificats |
| ⭐ **Satisfaction** | Questionnaires et analyse des retours |
| 🛡️ **Qualiopi** | Suivi des indicateurs de certification qualité |

## Stack technique

- **Frontend** : Next.js 14 + Tailwind CSS
- **Backend** : NestJS + Prisma ORM
- **Base de données** : PostgreSQL 15
- **Authentification** : JWT (Passport.js)
- **Documentation API** : Swagger (OpenAPI)

## Démarrage rapide

### Avec Docker Compose

```bash
# Copier les fichiers d'environnement
cp platform/backend/.env.example platform/backend/.env
cp platform/frontend/.env.example platform/frontend/.env

# Lancer toute la stack
docker compose up
```

L'application sera accessible à :
- **Frontend** : http://localhost:3000
- **API** : http://localhost:3001/api
- **Documentation Swagger** : http://localhost:3001/api/docs

### Développement local

**Backend :**
```bash
cd platform/backend
cp .env.example .env
npm install
npx prisma migrate dev
npx prisma db seed    # Données de démonstration
npm run start:dev
```

**Frontend :**
```bash
cd platform/frontend
cp .env.example .env
npm install
npm run dev
```

## Comptes de démonstration

Après avoir exécuté le seed :

| Rôle | Email | Mot de passe |
|------|-------|--------------|
| Admin | `admin@cip-faro-rudy.fr` | `Admin123!` |
| Formateur | `formateur@cip-faro-rudy.fr` | `Formateur123!` |

## Intégrations futures

- 🔗 **Moodle** – LMS pour les ressources pédagogiques en ligne
- 🔗 **Microsoft 365** – Documents, OneDrive, Outlook
- 🔗 **Microsoft Teams** – Réunions et communications

## Structure du projet

```
platform/
├── backend/               # API NestJS
│   ├── prisma/
│   │   ├── schema.prisma  # Schéma base de données
│   │   └── seed.ts        # Données initiales
│   └── src/
│       ├── modules/       # Modules NestJS (candidats, formations, etc.)
│       └── prisma/        # Service Prisma
└── frontend/              # Application Next.js
    └── src/
        ├── app/           # Pages (App Router)
        └── components/    # Composants réutilisables
```
