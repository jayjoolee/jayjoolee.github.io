---
title: "Turning voice memos into decision notes without leaking the room"
summary: "A local audio workflow that turns transcripts into decisions and next questions without publishing the room."
published: 2026-06-27
kind: "Agent workflow"
kicker: "Field note / Local AI workflow"
featured: false
draft: false
---

<p class="lead">Voice memos are useful because they preserve messy reality. They are risky for the same reason. The workflow has to extract decisions without publishing the room.</p>

## The operating pattern

The safest default is to treat original audio as the source, transcript text as a working artifact, and speaker labels as hypotheses until a human confirms them. Automatic diarization can separate acoustic speaker ranges, but it does not know who a person is. Identity mapping stays a human review step.

The publishable output is not the raw transcript. It is a decision note: what changed, what evidence supports it, what remains uncertain, and what should happen next.

## A public-safe pipeline

- Start from local source audio instead of app-generated speaker labels when accuracy matters.
- Generate a transcript and, when useful, an acoustic speaker timeline.
- Use human anchors to map anonymous speakers only inside the private archive.
- Write a structured note with decisions, follow-ups, risks, and unresolved questions.
- For public writing, replace the source with a synthetic transcript that demonstrates the method.

## Synthetic example

Instead of publishing a real conversation, a public example can use a synthetic meeting about a fictional support workflow. The note can still show the important mechanics: speaker uncertainty, owner assignment, decision extraction, risk flags, and action tracking.

That keeps the portfolio evidence inspectable without exposing private voices, private names, medical details, company context, or financial account information.

## Why this matters

A lot of AI work fails because it optimizes for impressive raw generation rather than usable operational memory. A good voice-to-note workflow is small, but it exercises the same muscles serious AI work needs: source control, privacy boundaries, human review, and evidence that survives after the meeting is over.
