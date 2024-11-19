---
date: 2024-04-01 07:30:35 +0300
title: Recomendaciones de Productos para Entrega de Alimentos
subtitle: Análisis de Datos
image: '/images/food_recs.webp'
---

### Problema

Un mercado en línea de entregas a domicilio buscaba aumentar sus ingresos integrando mejoras impulsadas por datos en su experiencia de usuario. Colaborativamente, identificamos cuatro posibles aplicaciones de ciencia de datos para su mercado: recomendaciones de productos, predicciones de tiempo de entrega, precios dinámicos y optimización de rutas de entrega. Después de evaluar la disponibilidad de datos y la viabilidad de cada opción, decidimos iniciar una prueba de concepto enfocada en recomendaciones de productos dentro del segmento de alimentos.

Solo en 2023, el segmento de alimentos representó más de 205,000 pedidos, generando aproximadamente $6 millones en ingresos para el mercado. Las bases de datos de la empresa estaban llenas de datos subutilizados que no se habían aprovechado para propósitos analíticos ni para decisiones de gestión basadas en datos. Además, la interfaz de usuario existente carecía de cualquier forma de recomendaciones personalizadas. El objetivo del cliente era explorar el potencial de la ciencia de datos para mejorar la experiencia del usuario ofreciendo recomendaciones de alimentos personalizadas.

### Solución

Identificamos los requisitos de datos para construir un pipeline de recomendaciones de productos y recolectamos los datos necesarios. Inspirándonos en las [técnicas avanzadas de recomendaciones de Uber Eats](https://www.uber.com/en-CH/blog/uber-eats-recommending-marketplace/), diseñamos una prueba de concepto de un pipeline de recomendaciones de productos combinando métodos de filtrado basado en contenido y filtrado colaborativo para ofrecer sugerencias de alimentos personalizadas. El proceso de desarrollo incluyó varios pasos clave:

1. **Recolección de Datos**: Comenzamos extrayendo y manipulando datos relevantes de usuarios y productos de MongoDB, convirtiendo esta información en DataFrames de pandas para un análisis profundo.
2. **Análisis Exploratorio de Datos (EDA)**: Realizamos un análisis exploratorio de datos exhaustivo para identificar patrones y relaciones dentro de los datos, lo cual es crucial para refinar nuestras estrategias de recomendación basadas en comportamientos reales de usuarios y atributos de productos.
3. **Filtrado Basado en Contenido**: Creamos perfiles de gustos de usuarios y alimentos utilizando características extraídas de descripciones de productos y preferencias de usuarios. Estos perfiles se convirtieron en vectores numéricos utilizando DictVectorizer de sklearn, permitiendo el cálculo de puntuaciones de similitud entre los gustos de los usuarios y los perfiles de productos.
4. **Filtrado Colaborativo**: Esta técnica aprovechó los historiales de compras de los usuarios para identificar productos preferidos por usuarios similares, capturando efectivamente las preferencias cambiantes de los usuarios.
5. **Enfoque Híbrido**: Al integrar el filtrado basado en contenido y el filtrado colaborativo, nuestro motor pudo recomendar alimentos que no solo coincidían con preferencias anteriores, sino que también incluían artículos populares entre usuarios similares, mejorando tanto la precisión como el descubrimiento.

### Herramientas Utilizadas

- **MongoDB:** Base de datos principal para almacenar datos de usuarios y productos.
- **Python:** El lenguaje de programación principal para desarrollar los algoritmos de recomendaciones y realizar análisis de datos.
- **Pandas:** Utilizado para la manipulación y análisis de datos, convirtiendo datos crudos en información.
- **Matplotlib:** Biblioteca principal utilizada para visualizar tendencias de datos y resultados de algoritmos.
- **Sklearn (DictVectorizer):** Utilizado para codificar datos categóricos en vectores numéricos, crucial para nuestros modelos de aprendizaje automático.

### Resultado

El pipeline de recomendaciones de prueba de concepto demostró el potencial para implementar soluciones complejas impulsadas por IA en escenarios del mundo real. Su éxito marca un paso prometedor hacia la extensión de los servicios de recomendación a otros segmentos del mercado, potencialmente transformando la experiencia de compra para los clientes en varias categorías. Además, esta iniciativa destacó la importancia de datos bien estructurados, ordenados y mantenidos para tomar decisiones basadas en datos. También reveló brechas en los pipelines de datos existentes que, una vez abordadas, podrían mejorar aún más la experiencia del usuario del producto.

En las próximas semanas, esta prueba de concepto se implementará en un entorno sandbox dentro del mercado. Esto nos permitirá simular de cerca el uso en el mundo real y realizar los ajustes necesarios antes de proceder con un despliegue a gran escala.