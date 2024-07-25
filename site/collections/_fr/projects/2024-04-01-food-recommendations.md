---
date: 2023-01-10 07:30:35 +0300
title: Recommandation de Produits pour la Livraison de Nourriture en Ligne
subtitle: Analyse de Données
image: '/images/food_recs.jpg'
---

### Problème

Une place de marché de livraison en ligne visait à augmenter ses revenus en intégrant des améliorations basées sur les données dans son expérience utilisateur. Nous avons identifié quatre applications potentielles de science des données pour cette place de marché : recommandations de produits, prévisions des temps de livraison, tarification dynamique, et optimisation des itinéraires de livraison. Après avoir évalué la disponibilité des données et la faisabilité de chaque option, nous avons décidé de lancer une initiative de preuve de concept en nous concentrant sur les recommandations de produits dans le segment alimentaire.

En 2023 seulement, le segment alimentaire a représenté plus de 205 000 commandes, générant environ 6 millions de dollars de revenus pour la place de marché. Les bases de données de l'entreprise regorgeaient de données sous-utilisées qui n'avaient pas été exploitées à des fins analytiques ni pour des décisions de gestion basées sur les données. De plus, l'interface utilisateur existante manquait de toute forme de recommandations personnalisées. L'objectif du client était d'explorer le potentiel de la science des données pour améliorer l'expérience utilisateur en offrant des recommandations alimentaires personnalisées.

### Solution

Nous avons identifié les besoins en données pour construire un pipeline de recommandation de produits et avons collecté les données nécessaires. En nous inspirant des techniques avancées de recommandation d'[Uber Eats](https://www.uber.com/en-CH/blog/uber-eats-recommending-place de marché/), nous avons conçu un pipeline de recommandation de produits combinant des méthodes de filtrage basé sur le contenu et collaboratif pour fournir des suggestions alimentaires personnalisées. Le processus de développement a inclus plusieurs étapes clés :

1. **Collecte de Données** : Nous avons commencé par extraire et manipuler les données pertinentes des utilisateurs et des produits à partir de MongoDB, en convertissant ces informations en DataFrames pandas pour une analyse approfondie.
2. **Analyse Exploratoire des Données (EDA)** : Nous avons mené une analyse exploratoire complète des données pour identifier les motifs et les relations au sein des données, essentiels pour affiner nos stratégies de recommandation en fonction des comportements réels des utilisateurs et des attributs des produits.
3. **Filtrage Basé sur le Contenu** : Nous avons créé des profils de goûts des utilisateurs et des aliments en utilisant des caractéristiques extraites des descriptions de produits et des préférences des utilisateurs. Ces profils ont été convertis en vecteurs numériques à l'aide de DictVectorizer de sklearn, permettant le calcul des scores de similarité entre les goûts des utilisateurs et les profils de produits.
4. **Filtrage Collaboratif** : Cette technique a exploité les historiques d'achat des utilisateurs pour identifier les produits favoris des utilisateurs similaires, capturant ainsi efficacement les préférences évolutives des utilisateurs.
5. **Approche Hybride** : En intégrant le filtrage basé sur le contenu et collaboratif, notre moteur a pu recommander des articles alimentaires qui correspondaient non seulement aux préférences précédentes, mais incluaient également des articles populaires parmi les utilisateurs similaires, améliorant ainsi à la fois la précision et la découverte.

### Outils Utilisés

- **MongoDB** : Base de données principale pour le stockage des données utilisateurs et produits.
- **Python** : Langage de programmation principal pour développer les algorithmes de recommandation et effectuer l'analyse des données.
- **Pandas** : Utilisé pour la manipulation et l'analyse des données afin de convertir les données brutes en informations exploitables.
- **Matplotlib** : Bibliothèque principale utilisée pour visualiser les tendances des données et les résultats des algorithmes.
- **Sklearn (DictVectorizer)** : Utilisé pour encoder les données catégorielles en vecteurs numériques, crucial pour nos modèles d'apprentissage automatique.

### Résultat

Le pipeline de recommandation a démontré le potentiel de mise en œuvre de solutions complexes basées sur l'IA dans des scénarios réels. Son succès marque une étape prometteuse vers l'extension des services de recommandation à d'autres segments de la place de marché, transformant potentiellement l'expérience d'achat des clients à travers diverses catégories. De plus, cette initiative a souligné l'importance de données bien structurées, ordonnées et maintenues pour prendre des décisions basées sur les données. Elle a également révélé des lacunes dans les pipelines de données existants qui, une fois corrigées, pourraient encore affiner l'expérience utilisateur du produit.

Dans les semaines à venir, cette preuve de concept sera mise en place dans un environnement de test au sein de la place de marché. Cela nous permettra de simuler de près l'utilisation réelle et d'apporter les ajustements nécessaires avant de procéder à un déploiement à grande échelle.