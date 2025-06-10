---
name: '{gflnma}: an R package for identifying similar parameters in network meta-analysis'
speakers:
  - Caitlin Daly
categories:
  - YouTube
  - Tutorial
hide: false
---

Models for synthesizing evidence on the relative treatment effects (RTEs) of three or more treatments often make assumptions about the similarity of parameters based on a priori knowledge. For example, Bayesian class effects network meta-analysis (NMA) models may be used to mitigate issues arising from multiple comparisons, while network meta-regression (NMR) models typically assume RTE-covariate interactions are the same within a class of treatments due to limited data and to simplify treatment recommendations. When it is difficult to pre-identify classes or groups of treatments with similar RTEs or RTE-covariate interactions, generalized fused lasso (GFL) may be used to determine data-driven groupings of similar parameters (Kong et al., 2024). We will describe step-by-step the procedure for implementing GFL for NMA and NMR, and introduce a recently developed R package to aid this process.

References:
Kong X, Daly CH, and Béliveau A. Generalized fused lasso for treatment pooling in network meta-analysis. Statistics in Medicine 2024;43:5635–49.

Additional background:
GFL penalizes parameters as well as their pairwise differences. In the context of NMA, the RTEs and their differences are shrunk to zero, minimizing exaggeration of effects and leading to the pooling of treatments with insufficient evidence of a difference in their effects. When conducting covariate-adjustment through NMR, GFL simultaneously performs variable selection and shrinks the differences between RTE-covariate interactions to zero (either solely or addition to the RTEs), thereby allowing the data to determine which covariates are most influential, and which interaction terms may be sensibly shared between treatments.

[ESMARConf Youtube Channel](https://www.youtube.com/@esmarconf)