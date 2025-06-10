---
name: Automated Cataloging of Highly Credible Treatment Hierarchy Questions in Network Meta-Analysis
speakers:
  - Audrey Béliveau
categories:
  - YouTube
  - Presentation
hide: false
---

Recent years have seen a growing interest in addressing treatment hierarchy questions within network meta-analysis (NMA). Due to the large number of possible hierarchy questions which rapidly increase with the number of treatments, Papakonstantinou, Salanti et al. (2022) recommended pre-selecting specific hierarchy questions (e.g., Is A ⋗ B ⋗ D?) and estimating their empirical probabilities based on available data.
 
To streamline this process, we developed an R package to identify credible hierarchy questions findings from an NMA without needing to pre-specify hierarchies of interest. This package implements an efficient computational approach that systematically compiles a comprehensive catalog of all highly credible treatment hierarchies in an NMA (e.g., those with an empirical probability exceeding 90%).
 
Our package addresses various types of hierarchy questions, including those of the forms: “Is A ⋗ B ⋗ D?”, “Do A and B rank best and second best, respectively?”, “Do A, B and C rank in the top 2 treatments?” or “Do C, D and E rank consecutively?”, for any choice or number of treatments. We will briefly describe the efficient algorithms underlying the R package and demonstrate its use with example NMA datasets.

[ESMARConf Youtube Channel](https://www.youtube.com/@esmarconf)