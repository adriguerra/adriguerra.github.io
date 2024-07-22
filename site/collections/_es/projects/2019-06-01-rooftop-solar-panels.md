---
date: 2019-06-01
title: "Automatic Detection of Rooftop Solar Panels using Convolutional Neural Networks"
subtitle: Deep Learning
image: '/images/deepsolar_getty-960x540.jpg'
---

***Note:***
*This project culminated in the publication of an academic paper, detailing our methodology, findings, and implications for the broader field of distributed energy infrastructure and urban planning. The paper, titled "Automatic Detection of Rooftop Solar Panels using Convolutional Neural Networks," and co-authored along with Roberto Castello, Simon Roquette, Martin Esguerra and Jean-Louis Scartezzini, is accessible at the following [link.](https://iopscience.iop.org/article/10.1088/1742-6596/1343/1/012034)*

### Problem
Accurately mapping the location and size of solar installations in urban areas presents a significant challenge yet is crucial for policymakers and investors in distributed energy infrastructures. Traditional methods, such as surveys and database analysis, are often limited in scope and scalability, leading to a gap in comprehensive, large-scale mapping of solar installations. This gap hinders effective policy-making and investment in solar technology.

### Solution
This project addresses the challenge by applying a supervised machine learning approach, specifically convolutional neural networks (CNNs), for the pixel-wise image segmentation of rooftop solar panels. By utilizing high-resolution aerial photos provided by the Swiss Federal Office of Topography, the project enables precise delineation and size detection of rooftop solar installations. The approach involves:

1. **Data Augmentation and Parameter Tuning**: Implementing various data augmentation techniques and adjusting network parameters to optimize model performance, ensuring the model's robustness and accuracy in different urban scenarios. 
   
2. **Pixel-wise Image Segmentation**: Employing CNNs for pixel-wise segmentation, the model accurately identifies and delineates individual solar panels on rooftops, providing detailed insights into their distribution and size.

3. **Scalability and National Scale Prediction**: Demonstrating the scalability of the trained model by predicting the deployment of solar panels at a national level, specifically across Switzerland, showcasing the model's applicability for large-scale analysis.

4. **Correlation Analysis with Environmental and Socio-economic Variables**: Analyzing the correlation between solar panel deployment and local environmental and socio-economic factors, paving the way for predictive models that can foster the future adoption of solar technology in urban areas.

### Tools Used
1. **Python Deep Learning Libraries**: Utilizing popular Python libraries such as PyTorch, Keras, and TensorFlow to build, train, and validate the convolutional neural networks, ensuring the use of cutting-edge techniques in deep learning.
   
2. **High-Resolution Aerial Photos**: Leveraging high-quality aerial imagery provided by the Swiss Federal Office of Topography as the primary data source for the model, ensuring accurate and high-fidelity input data for analysis.

### Outcome
The project successfully developed a machine learning model capable of accurately detecting and delineating rooftop solar panels in urban areas with a high degree of precision (accuracy of about 0.94 and an Intersection over Union index of up to 0.64). The scalability of the model enables the prediction of solar panel deployment on a national scale, offering valuable insights for policymakers and investors. Furthermore, the correlation of solar installation data with local environmental and socio-economic variables opens avenues for predictive analytics, supporting the strategic expansion of solar technology in urban landscapes.