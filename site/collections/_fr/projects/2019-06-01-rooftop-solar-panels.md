---
date: 2019-06-01
title: "Détection Automatique de Panneaux Solaires sur les Toits en Utilisant des Réseaux de Neurones Convolutionnels"
subtitle: Deep Learning
image: '/images/deepsolar_getty-960x540.jpg'
---

***Note:***
*Ce projet a abouti à la publication d'un article académique détaillant notre méthodologie, nos résultats et leurs implications pour le domaine plus large de l'infrastructure énergétique distribuée et de la planification urbaine. L'article, intitulé "Automatic Detection of Rooftop Solar Panels using Convolutional Neural Networks," et co-écrit avec Roberto Castello, Simon Roquette, Martin Esguerra et Jean-Louis Scartezzini, est accessible via le lien suivant [ici.](https://iopscience.iop.org/article/10.1088/1742-6596/1343/1/012034)*

### Problème
Cartographier avec précision l'emplacement et la taille des installations solaires dans les zones urbaines présente un défi significatif mais crucial pour les décideurs politiques et les investisseurs dans les infrastructures énergétiques distribuées. Les méthodes traditionnelles, telles que les enquêtes et l'analyse de bases de données, sont souvent limitées en portée et en échelle, entraînant une lacune dans la cartographie exhaustive et à grande échelle des installations solaires. Cette lacune entrave l'élaboration de politiques efficaces et les investissements dans la technologie solaire.

### Solution
Ce projet relève le défi en appliquant une approche d'apprentissage supervisé, en particulier les réseaux de neurones convolutionnels (CNN), pour la segmentation d'image pixel par pixel des panneaux solaires sur les toits. En utilisant des photos aériennes haute résolution fournies par l'Office fédéral de topographie suisse, le projet permet une délimitation précise et une détection de la taille des installations solaires sur les toits. L'approche comprend :

1. **Augmentation des Données et Réglage des Paramètres** : Mise en œuvre de diverses techniques d'augmentation des données et ajustement des paramètres du réseau pour optimiser les performances du modèle, assurant la robustesse et la précision du modèle dans différents scénarios urbains.
   
2. **Segmentation d'Image Pixel par Pixel** : Utilisation des CNN pour la segmentation pixel par pixel, le modèle identifie et délimite avec précision les panneaux solaires individuels sur les toits, fournissant des informations détaillées sur leur distribution et leur taille.

3. **Évolutivité et Prédiction à l'Échelle Nationale** : Démonstration de l'évolutivité du modèle entraîné en prévoyant le déploiement de panneaux solaires à l'échelle nationale, en particulier à travers la Suisse, montrant l'applicabilité du modèle pour une analyse à grande échelle.

4. **Analyse de Corrélation avec des Variables Environnementales et Socio-économiques** : Analyse de la corrélation entre le déploiement des panneaux solaires et les facteurs environnementaux et socio-économiques locaux, ouvrant la voie à des modèles prédictifs pouvant favoriser l'adoption future de la technologie solaire dans les zones urbaines.

### Outils Utilisés
1. **Bibliothèques de Deep Learning en Python** : Utilisation de bibliothèques Python populaires telles que PyTorch, Keras et TensorFlow pour construire, entraîner et valider les réseaux de neurones convolutionnels, assurant l'utilisation des techniques les plus avancées en deep learning.
   
2. **Photos Aériennes Haute Résolution** : Utilisation d'images aériennes de haute qualité fournies par l'Office fédéral de topographie suisse comme source de données principale pour le modèle, garantissant des données d'entrée précises et de haute fidélité pour l'analyse.

### Résultat
Le projet a réussi à développer un modèle d'apprentissage automatique capable de détecter et de délimiter avec précision les panneaux solaires sur les toits dans les zones urbaines avec un haut degré de précision (une précision d'environ 0,94 et un indice d'intersection sur union allant jusqu'à 0,64). L'évolutivité du modèle permet de prévoir le déploiement de panneaux solaires à l'échelle nationale, offrant des informations précieuses aux décideurs politiques et aux investisseurs. De plus, la corrélation des données d'installation solaire avec les variables environnementales et socio-économiques locales ouvre des perspectives pour l'analyse prédictive, soutenant l'expansion stratégique de la technologie solaire dans les paysages urbains.