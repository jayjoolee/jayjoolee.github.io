---
title: "From workflow descriptions to inspectable AI experiments"
summary: "Why the audit kit starts with owners, baselines, risk boundaries, and evaluation evidence."
published: 2026-06-20
kind: "Build note"
kicker: "Build note / AI Workflow Audit Kit"
featured: false
draft: false
---

<p class="lead">The practical failure mode in AI work is rarely a lack of model capability. It is moving from a promising demo to a public claim without a clear workflow owner, baseline, risk boundary, or eval gate.</p>

<picture class="article-figure">
  <source media="(max-width: 640px)" srcset="/assets/audit-flow-mobile.svg" width="640" height="640" />
  <img src="/assets/audit-flow.svg" width="1120" height="360" alt="AI workflow audit process diagram" />
</picture>

## The operating question

A useful AI conversation should not begin with “What can the model do?” It should begin with the work: where it happens, who owns it, what input is safe, where judgment is required, and how the result would be checked after a small experiment.

The AI Workflow Audit Kit is a public-safe attempt to make that middle layer visible. It turns synthetic workflow descriptions into AI experiment notes, review gates, outcome checks, and next-step recommendations.

## What the kit deliberately avoids

- It does not use employer, customer, or personal data.
- It does not preserve a named person's private style, tone, or identity.
- It does not treat usage volume as proof of value.
- It does not promote a demo unless eval boundaries are clear.

## What it tries to prove

The artifact is meant to show a working posture: map the workflow, define the owner, separate human judgment from machine support, build synthetic eval cases, and make the output inspectable.

Current public proof points include 20/20 portable workflow eval cases, 7/7 safety-critical cases, and 6/6 synthetic RAG eval cases with offline deterministic retrieval and optional OpenAI SDK live mode.

## Read or run it

The repository is available at [github.com/jayjoolee/ai-workflow-audit-kit](https://github.com/jayjoolee/ai-workflow-audit-kit). The useful entry points are the README, the sample audit, the responsible skill capture protocol, and the RAG eval demo.
