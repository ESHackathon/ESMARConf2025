---
name: 'metaselection: Meta-analytic selection models with cluster-robust and cluster-bootstrap standard errors for dependent effect size estimates'
speakers:
  - James Pustejovsky
  - Megha Joshi
  - Martyna Citkowicz
categories:
  - YouTube
  - Tutorial
hide: false
---

Selective outcome reporting is a pervasive concern for research synthesists due to its potential to create bias in meta-analytic summaries of evidence. Researchers have proposed many tests for selective outcome reporting and methods that aim to adjust for the distortions it creates. However, few currently available methods work in the presence of dependent effect sizes (i.e., multiple effect size estimates per sample), which are a very common feature of social science meta-analyses in social sciences and other areas. Failing to address dependency can inflate Type I error rates and produce inappropriately narrow confidence intervals. We developed estimation methods to simultaneously model selective outcome reporting and account for dependent effect sizes. The methods extend a two previously-developed classes of selection models: 1) a step-function approach that relies on specifying psychologically salient p-value thresholds, and 2) a beta-function approach that uses the beta density to model the selection process using two parameters describing the strength of selection. Results from our extensive simulation studies showed that the extensions of the step-function and beta-function selection models reduce bias in the estimate of the overall effect size and that using cluster bootstrapping leads to confidence intervals with acceptable coverage rates. In this tutorial presentation, we will introduce the R package metaselection, which implements the step-function and beta-function selection models, with options to use cluster robust variance estimation or cluster bootstrapping to assess uncertainty in model parameter estimates. The presentation will cover when, why, and how meta-analysts should use these models. We will then demonstrate the functionality of the package by analyzing an example dataset and discussing interpretation of the parameter estimates. 


[ESMARConf Youtube Channel](https://www.youtube.com/@esmarconf)