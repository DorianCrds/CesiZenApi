# CesiZen API

API REST développée avec Node.js et Express pour le projet **CesiZen**, une plateforme dédiée à la sensibilisation à la santé mentale, la gestion du stress, et un module d’auto-diagnostic du niveau de stress basé sur l’échelle de Holmes et Rahe.

---

## Table des matières

- [Présentation](#présentation)
- [Fonctionnalités](#fonctionnalités)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Configuration](#configuration)
- [Lancement](#lancement)
- [Utilisation](#utilisation)
- [Licence](#licence)
- [Documentation](#documentation)

---

## Présentation

CesiZen est une application web et mobile visant à sensibiliser sur la santé mentale et la gestion du stress. L’API sert de backend pour trois modules principaux :

- **Module Informations** : gestion des pages de contenu, menus, et navigation.
- **Module Comptes utilisateurs** : gestion des inscriptions, profils, rôles (utilisateurs, admins, super-admin).
- **Module Auto-diagnostic** : questionnaire basé sur l’échelle Holmes & Rahe pour évaluer le stress, gestion des événements associés et affichage des résultats.

---

## Fonctionnalités de l’API

- Authentification & gestion des rôles (utilisateur, admin, super-admin)
- CRUD sur pages, menus, contenus
- Gestion des questionnaires, événements, et réponses utilisateurs
- Sécurisation par JWT
- Documentation Swagger intégrée

---

## Prérequis

- [Node.js](https://nodejs.org/) (version 16 ou supérieure recommandée)
- [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/) (pour lancer la base de données et l’API en conteneurs)
- MySQL (via Docker ou installation locale)

---

## Installation

1. Cloner le dépôt :
   ```bash
   git clone https://github.com/DorianCrds/CesiZenApi.git
   cd cesizen-api

2. Copier le fichier .env.example en .env et modifier les variables selon ton environnement.

3. Lancer les conteneurs Docker (API + MySQL) :
    ```bash
   docker-compose up --build
    ```

---

## Configuration

Le fichier .env doit contenir au minimum les variables contenues dans .env.example.

---

## Lancement

Une fois les conteneurs lancés, l'API est disponible sur `http://localhost:3000`.

---

## Utilisation

- Les clients front (web & mobile) consommeront cette API via HTTP REST.
- Les modules sont conçus pour permettre : navigation, gestion des utilisateurs, auto-diagnostic, et administration.

---

## License

MIT © CARDOSO Dorian

---

## Documentation

N'hésitez pas à consulter la documentation disponible à `http://localhost:3000/api-docs`.
