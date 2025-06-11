---
name: '{rayyanR}: an R package to interface with Rayyan'
speakers:
  - Matt LLoyd Jones
categories:
  - YouTube
  - Presentation
hide: false
---

Rayyan is a popular web and app-based platform for evidence synthesis - particularly the abstract and full text screening stages of systematic reviews and other types of evidence synthesis. Until now, Rayyan users have either had to manually enter their review data (inclusion/exclusion decisions, reasons and labels) into the text and figures of their manuscripts, or manually export data from their Rayyan reviews in order to get bibliographic dataframes that can be used in the R and RMarkdown pipleines commonly used by evidence synthesists for systematic reviews and meta-analyses. This is impractical because evidence synthesis decisions are subject to change during the research process, meaning Rayyan users have to repeat the process of entering, exporting and/or processing review data each time such changes occur. rayyanR is the first R interface to Rayyan, which can programmatically download and process review data stored on Rayyan servers via the Rayyan API (v1). This enables the easy incorporation of Rayyan into R pipelines for the purposes of reporting and validating records and reports included at each stage of a systematic review. It also provides a function to convert these downloaded and processed dataframes into a PRISMA2020 diagram via the PRISMA2020 R package. Developed over several of ESH's hackathons, the rayyanR R package is currently in pre-release stage, and we are looking for beta testers ahead of our first full release.

[ESMARConf Youtube Channel](https://www.youtube.com/@esmarconf)