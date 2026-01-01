# 🗺️ Voyage - Carnet de Voyage Interactif

Une application web interactive de carnet de voyage développée avec React et Leaflet, permettant de visualiser et explorer des destinations de voyage sur une carte du monde avec des photos et des informations détaillées.

## 📸 Aperçu

Cette application présente mes voyages avec des marqueurs interactifs sur une carte permettant de découvrir différentes destinations touristiques à travers des galeries photos.

## ✨ Fonctionnalités

- **Carte Interactive** : Visualisation des destinations sur une carte OpenStreetMap
- **Clustering de Marqueurs** : Regroupement intelligent des marqueurs proches pour une meilleure lisibilité
- **Galerie Photos** : Carrousel d'images pour chaque destination avec navigation intuitive
- **Popups Détaillées** : Informations complètes sur chaque lieu visité
- **Responsive** : Interface adaptée à tous les écrans

## 🛠️ Technologies Utilisées

- **React** 18.2.0 - Framework JavaScript
- **Leaflet** 1.9.3 - Bibliothèque de cartographie
- **React Leaflet** 4.2.0 - Composants React pour Leaflet
- **React Leaflet Cluster** 2.0.0 - Clustering de marqueurs
- **React Scripts** 5.0.1 - Configuration et scripts de build

## 🚀 Installation et Démarrage

### Prérequis

- Node.js (version 14 ou supérieure)
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone https://github.com/samhazvez/voyage.git

# Accéder au dossier du projet
cd voyage

# Installer les dépendances
npm install
```

### Lancement en développement

```bash
npm start
```

L'application sera accessible à l'adresse `http://localhost:3000`

### Build de production

```bash
npm run build
```

Les fichiers de production seront générés dans le dossier `build/`

## 📦 Déploiement

Le projet est configuré pour être déployé sur GitHub Pages :

```bash
npm run deploy
```

Le site sera accessible à : [http://samhazvez.github.io/voyage](http://samhazvez.github.io/voyage)

## 📁 Structure du Projet

```
voyage/
├── public/
│   └── index.html          # Template HTML
├── src/
│   ├── assets/
│   │   ├── css/
│   │   │   └── styles.css  # Styles globaux
│   │   ├── icons/          # Icônes des marqueurs
│   │   └── images/         # Photos des destinations
│   │       └── italie/     # Photos du voyage en Italie
│   ├── components/
│   │   └── ImageCarousel.jsx  # Composant carrousel d'images
│   ├── data/
│   │   └── destinations.js    # Données des destinations
│   ├── utils/
│   │   └── imageLoader.js     # Utilitaire de chargement d'images
│   ├── App.js              # Composant principal
│   └── index.js            # Point d'entrée de l'application
├── package.json
└── README.md
```

## 🎨 Personnalisation

### Ajouter une nouvelle destination

1. Ajoutez vos photos dans `src/assets/images/[pays]/[lieu]/`
2. Modifiez le fichier `src/data/destinations.js` pour ajouter les coordonnées et informations :

```javascript
{
    id: "france",
    date: "Juillet 2025",
    markers: [
        {
            id: "paris",
            geocode: [48.8566, 2.3522],
            popUp: "Tour Eiffel",
        }
    ]
}
```

### Personnaliser l'apparence

Modifiez `src/assets/css/styles.css` pour ajuster les styles de l'application.

## 📝 Scripts Disponibles

- `npm start` - Lance le serveur de développement
- `npm run build` - Crée une version optimisée pour la production
- `npm test` - Lance les tests
- `npm run deploy` - Déploie sur GitHub Pages

## 📄 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👤 Auteur

**samhazvez**

- GitHub: [@samhazvez](https://github.com/samhazvez)
- Site du projet: [http://samhazvez.github.io/voyage](http://samhazvez.github.io/voyage)

## 🙏 Remerciements

- [OpenStreetMap](https://www.openstreetmap.org/) pour les données cartographiques
- [Leaflet](https://leafletjs.com/) pour la bibliothèque de cartographie
- Tous les projets open source qui ont inspiré ce projet

---