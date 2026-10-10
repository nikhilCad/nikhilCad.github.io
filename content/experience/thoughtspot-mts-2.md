---
title: "Member of Technical Staff 2 - Thoughtspot"
description: "Thoughtspot | Hyderabad, India"
dateString: July 2024 - July 2025
draft: false
tags: ["Java", "Golang", "React", "Typescript", "GraphQL", "Playwright", "Jest"]
showToc: false
weight: 20
hideAuthor: true
hideSummary: true
showCompany: true
--- 

### Description

July 2024 - July 2025

- Achieved a 90% reduction in homepage load time (internally: Munshi -> MunshiV2) by redesigning the Java backend and migrating the internal Cassandra impressions database to a new schema — instead of an individual lookup per view, a single table now holds all views, replacing per-view lookups with a unified table storing total views per user. This cut load time from 40 seconds to 2-3 seconds; verified using tracevault via the request trace id.
- Introduced org awareness (internally: "Munshi Org Aware") to the trending table of the Cassandra database by creating a new table with altered schema, allowing each isolated org in the instance to have separate trending objects — orgs are independent shells within ThoughtSpot.
- Executed team-led **zero downtime data migration** of **50M+** rows across clusters in **Cassandra** database by implementing **a Java background migration service** that safely transferred data and seamlessly switched over to the new schema.
- Redesigned the user onboarding flow (internally: "Edge Onboarding") to highlight AI-powered Spotter, guiding users through creating connections, importing data, and asking questions via natural language — introducing Spotter and TSA to a first-time free-trial ThoughtSpot user, aiming to reduce user dropout, resulting in improved feature adoption by 30%.
- Addressed a **security vulnerability** in the share API by implementing a Redis-based rate limiter after penetration testing exposed a missing rate limit, effectively controlling API request rates and mitigating abuse risks.
- Diagnosed and patched a Mixpanel overtracking issue ahead of a renewal, reducing test event volume by 98.5% (20M to 300K) and saving $30K — that figure is what might have gone toward the new Mixpanel plan otherwise (final purchase was $23K, versus a $50K range without the fix). Also fixed several Mixpanel bugs firing at the wrong time or showing the wrong display name.
- Fixed an Apple security issue by removing **cronJobExpression** from session info.
- Reduced Mixpanel Monthly Tracked Users (MTUs) in the testing project from **700k to 10k weekly users** by identifying cases where Mixpanel should not be enabled.
- Added frontend support for **monitor alerts in Slack**, enabling users to receive data updates directly in Slack without opening the BI tool, increasing notification click rate by 20%.
- Worked on improving the product homepage, and wrote **Jest and Playwright** tests to increase coverage.
