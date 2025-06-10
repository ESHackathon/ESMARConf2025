---
name: A tutorial on how to visualize heterogeneity in forest plots
speakers:
  - Wolfgang Viechtbauer
categories:
  - Live
  - Tutorial
hide: false
---

The findings of a collection of studies addressing a common research question can be visualized in terms of a forest plot, showing the effect sizes of the individual studies together with a corresponding confidence interval. A four-sided polygon (sometimes called a summary ‘diamond’) is often added to such a plot to depict the results from a meta-analysis pooling together the effect sizes, where the center of the polygon corresponds to the pooled estimate and the ends of the polygon represent the bounds of the confidence interval for the pooled estimate. However, this only communicates the size of the average effect and how precisely it is estimated. In addition, it is equally important to indicate the degree of heterogeneity among the findings, that is, the variability in the underlying true effects. Such information (e.g., the results from the Q-test, the I^2 statistic, and the estimate of tau^2 from a random-effects model) is often only added textually underneath the plot. In this tutorial, I will demonstrate several alternative visualizations of the amount of heterogeneity in terms of the prediction interval and by showing the entire prediction distribution. The various types of visualizations discussed are implemented in the metafor package for R and can be readily used by practitioners.

[ESMARConf Youtube Channel](https://www.youtube.com/@esmarconf)