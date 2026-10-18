---
title: 'Event-Driven Order Processing Platform'
date: 2026-10-18
slug:
tags: ["Java", "Spring Boot", "Apache Kafka", "PostgreSQL", "Docker", "Prometheus", "Grafana"]
category: blog 
summary:
description: 
cover:
  image: "/images/projects/event-driven-order-platform.png"
  alt:
  caption: 
  relative: true
showtoc: true
draft: false
hideAuthor: true
---

<!-- SYNCED:BODY:START -->
 - Designed a **distributed order-processing system** using **Java, Spring Boot, and Apache Kafka**, decoupling order creation, inventory reservation, and payment processing through asynchronous event-driven workflows.
 - Implemented a **Transactional Outbox pattern** with **PostgreSQL** to prevent database updates and event publishing from becoming inconsistent, with idempotent consumers to safely handle duplicate message delivery.
 - Built **Saga-based failure recovery** with retry policies, dead-letter topics, and compensating transactions to handle partial failures across distributed services without relying on a global database transaction.
 - Configured **Kafka partitioning, consumer groups, and offset management** for scalable event processing, with **Docker Compose, Prometheus, and Grafana** for reproducible deployments and operational monitoring.
<!-- SYNCED:BODY:END -->
