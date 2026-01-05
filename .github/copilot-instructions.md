# Copilot Instructions - Voyage

## Architecture du Projet

Application React de carnet de voyage interactif avec carte Leaflet. Structure plate et simple :
- **App.js** : Composant racine unique qui rend la carte avec tous les marqueurs
- **destinations.js** : Source de vérité pour toutes les données (destinations avec tableaux de marqueurs imbriqués)
- **ImageCarousel.jsx** : Carrousel autonome gérant son état avec useState
- **imageLoader.js** : Utilitaire critique utilisant `require.context()` pour charger dynamiquement les images depuis la structure de dossiers

## Conventions Spécifiques

### Structure des Données
Les destinations suivent ce pattern strict dans [destinations.js](src/data/destinations.js) :
```javascript
{
  id: "italie",              // Correspond au nom du dossier dans assets/images/
  date: "Juin 2025",
  markers: [
    {
      id: "colisee",         // Correspond au sous-dossier dans assets/images/italie/
      geocode: [41.8905, 12.4926],
      popUp: "Colisée de Rome"
    }
  ]
}
```

### Organisation des Images
Convention critique : `src/assets/images/{destId}/{markerId}/` avec fichiers JPEG majuscules
- Le loader dans [imageLoader.js](src/utils/imageLoader.js) filtre par `/\.(JPEG)$/` - **uniquement JPEG en majuscules**
- Exemple : `src/assets/images/italie/colisee/photo1.JPEG`

### Styles
[styles.css](src/assets/css/styles.css) utilise des CSS variables organisées par catégories :
- Variables de couleur avec préfixe `--color-`
- Variables d'espacement avec préfixe `--spacing-`
- Breakpoints responsive : desktop → tablet → mobile (dans cet ordre)
- Animations nommées (`gradientShift`, `fadeInScale`) définies dans le fichier

## Workflows Essentiels

### Développement
```bash
npm start              # Lance le serveur de dev sur localhost:3000
npm run build          # Construit pour production dans build/
npm run deploy         # Déploie sur GitHub Pages (predeploy → build automatique)
```

### Ajouter une Destination
1. Créer la structure de dossiers : `src/assets/images/{pays}/{lieu}/`
2. Ajouter les photos avec extension `.JPEG` (majuscules obligatoires)
3. Ajouter l'entrée dans `destinations` array dans [destinations.js](src/data/destinations.js)
4. L'icône `pin.png` est partagée par tous les marqueurs

### Clustering
MarkerClusterGroup (de react-leaflet-cluster) utilisé dans [App.js](src/App.js) avec :
- `customIcon` function pour le style des clusters
- `chunkedLoading` pour les performances
- Tous les marqueurs itérés via nested loops : `destinations.map()` puis `markers.map()`

## Intégrations Clés

- **Leaflet 1.9.3** avec React Leaflet 4.2.0 : Popups minWidth={650} pour afficher le carrousel
- **Tuiles OpenStreetMap** : Attribution obligatoire dans TileLayer
- **GitHub Pages** : Homepage dans package.json = `http://samhazvez.github.io/voyage`
- **Webpack context** : `require.context()` pour le chargement dynamique d'images (ne pas remplacer par imports statiques)

## Patterns à Respecter

- Pas de routing (single page app)
- Pas de state management global (useState local suffisant)
- Composants fonctionnels uniquement avec hooks
- Keys des marqueurs combinées : `${dest.id}-${m.id}` pour éviter les doublons
- Accessibilité : aria-label sur les boutons du carrousel
