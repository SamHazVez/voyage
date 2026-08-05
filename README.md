# Voyage - Carnet de Voyage Interactif

Une application web interactive de carnet de voyage développée avec React et Leaflet, permettant de visualiser et explorer des destinations de voyage sur une carte du monde avec des photos et des informations détaillées.

## Aperçu

Cette application présente mes voyages avec des marqueurs interactifs sur une carte permettant de découvrir différentes destinations touristiques à travers des galeries photos.

## Fonctionnalités

- **Carte Interactive** : Visualisation des destinations sur une carte OpenStreetMap
- **Clustering de Marqueurs** : Regroupement intelligent des marqueurs proches pour une meilleure lisibilité
- **Galerie Photos** : Carrousel d'images pour chaque destination avec navigation intuitive
- **Popups Détaillées** : Informations complètes sur chaque lieu visité
- **Menu Latéral** *Ajouté par IA* : Navigation avancée avec recherche, filtres et statistiques
- **Responsive** : Interface adaptée à tous les écrans

## Technologies Utilisées

- **React** 18.2.0 - Framework JavaScript
- **Leaflet** 1.9.3 - Bibliothèque de cartographie
- **React Leaflet** 4.2.0 - Composants React pour Leaflet
- **React Leaflet Cluster** 2.0.0 - Clustering de marqueurs
- **React Scripts** 5.0.1 - Configuration et scripts de build

## Structure du Projet

```
voyage/
├── public/
│   └── index.html          # Template HTML
├── src/
│   ├── assets/
│   │   ├── css/
│   │   │   └── styles.css  # Styles globaux
│   │   └── icons/          # Icônes des marqueurs
│   ├── components/
│   │   ├── ImageCarousel.jsx  # Composant carrousel d'images
│   │   └── SideMenu.jsx       # Menu latéral ⚡ Généré par IA
│   ├── data/
│   │   ├── destinations.js    # Données des destinations
│   │   └── wishlist.js        # Destinations souhaitées
│   ├── App.js              # Composant principal
│   └── index.js            # Point d'entrée de l'application
├── package.json
└── README.md
```

## Scripts Disponibles

- `npm start` - Lance le serveur de développement
- `npm run build` - Crée une version optimisée pour la production
- `npm test` - Lance les tests
- `npm run deploy` - Déploie sur GitHub Pages

## Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## Auteur

**samhazvez**

- GitHub: [@samhazvez](https://github.com/samhazvez)
- Site du projet: [http://samhazvez.github.io/voyage](http://samhazvez.github.io/voyage)

## Remerciements

- [OpenStreetMap](https://www.openstreetmap.org/) pour les données cartographiques
- [Leaflet](https://leafletjs.com/) pour la bibliothèque de cartographie
- Tous les projets open source qui ont inspiré ce projet

## Contributions IA

Certaines fonctionnalités ont été développées avec l'assistance de GitHub Copilot :

- **Menu Latéral** ([SideMenu.jsx](src/components/SideMenu.jsx)) : Composant React complet avec recherche, filtres, statistiques et navigation

---