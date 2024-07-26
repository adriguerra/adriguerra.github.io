---
date: 2019-06-01
title: "Detección Automática de Paneles Solares en Azoteas usando Redes Neuronales Convolucionales"
subtitle: Deep Learning
image: '/images/deepsolar_getty-960x540.jpg'
---

***Nota:***
*Este proyecto culminó en la publicación de un artículo académico que detalla nuestra metodología, hallazgos e implicaciones para el campo más amplio de la infraestructura de energía distribuida y la planificación urbana. El artículo, titulado "Detección Automática de Paneles Solares en Azoteas usando Redes Neuronales Convolucionales", y coautoría de Roberto Castello, Simon Roquette, Martin Esguerra y Jean-Louis Scartezzini, está accesible en el siguiente [enlace.](https://iopscience.iop.org/article/10.1088/1742-6596/1343/1/012034)*

### Problema
Mapear con precisión la ubicación y el tamaño de las instalaciones solares en áreas urbanas presenta un desafío significativo, pero es crucial para los formuladores de políticas y los inversores en infraestructuras de energía distribuida. Los métodos tradicionales, como las encuestas y el análisis de bases de datos, a menudo son limitados en alcance y escalabilidad, lo que lleva a una falta de mapeo integral y a gran escala de las instalaciones solares. Esta brecha dificulta la toma de decisiones y las inversiones efectivas en tecnología solar.

### Solución
Este proyecto aborda el desafío aplicando un enfoque de aprendizaje automático supervisado, específicamente redes neuronales convolucionales (CNN), para la segmentación de imágenes a nivel de píxel de los paneles solares en azoteas. Al utilizar fotos aéreas de alta resolución proporcionadas por la Oficina Federal de Topografía Suiza, el proyecto permite la delimitación precisa y la detección del tamaño de las instalaciones solares en azoteas. El enfoque incluye:

1. **Aumento de Datos y Ajuste de Parámetros**: Implementación de diversas técnicas de aumento de datos y ajuste de parámetros de la red para optimizar el rendimiento del modelo, asegurando la robustez y precisión del modelo en diferentes escenarios urbanos.

2. **Segmentación de Imágenes a Nivel de Píxel**: Empleo de CNN para la segmentación a nivel de píxel, el modelo identifica y delimita con precisión los paneles solares individuales en las azoteas, proporcionando información detallada sobre su distribución y tamaño.

3. **Escalabilidad y Predicción a Nivel Nacional**: Demostración de la escalabilidad del modelo entrenado al predecir el despliegue de paneles solares a nivel nacional, específicamente en toda Suiza, mostrando la aplicabilidad del modelo para el análisis a gran escala.

4. **Análisis de Correlación con Variables Ambientales y Socioeconómicas**: Análisis de la correlación entre el despliegue de paneles solares y los factores ambientales y socioeconómicos locales, allanando el camino para modelos predictivos que puedan fomentar la adopción futura de tecnología solar en áreas urbanas.

### Herramientas Utilizadas
1. **Bibliotecas de Deep Learning en Python**: Utilización de bibliotecas populares de Python como PyTorch, Keras y TensorFlow para construir, entrenar y validar las redes neuronales convolucionales, asegurando el uso de técnicas de vanguardia en deep learning.

2. **Fotos Aéreas de Alta Resolución**: Aprovechamiento de imágenes aéreas de alta calidad proporcionadas por la Oficina Federal de Topografía Suiza como la fuente de datos principal para el modelo, asegurando datos de entrada precisos y de alta fidelidad para el análisis.

### Resultado
El proyecto desarrolló con éxito un modelo de aprendizaje automático capaz de detectar y delimitar con precisión los paneles solares en azoteas en áreas urbanas con un alto grado de precisión (precisión de aproximadamente 0.94 y un índice de intersección sobre unión de hasta 0.64). La escalabilidad del modelo permite la predicción del despliegue de paneles solares a escala nacional, ofreciendo información valiosa para los formuladores de políticas y los inversores. Además, la correlación de los datos de instalaciones solares con las variables ambientales y socioeconómicas locales abre vías para el análisis predictivo, apoyando la expansión estratégica de la tecnología solar en paisajes urbanos.