---
id: 002
title: ADR Review Complete for Research-Concurrent Writing Approach
stage: adr
date: 2025-12-06
surface: agent
model: claude-sonnet-4-5-20251101
feature: 001-ai-k12-efficiency
branch: 001-ai-k12-efficiency
user: System Planner
command: /sp.adr # ADR-001: Research-Concurrent Writing Approach
labels: [adr, planning, architecture]
links:
  spec: specs/001-ai-k12-efficiency/spec.md
  ticket: null
  adr: history/adr/001-research-concurrent-writing-approach.md
  pr: null
files:
  - history/adr/001-research-concurrent-writing-approach.md
tests:

---

## Prompt

# ADR-001: Research-Concurrent Writing Approach

## Status
Accepted

## Context
We must choose how research will be conducted relative to the chapter-writing workflow. Two major process models exist:
1) **Research-first**, where all sources are gathered upfront before writing begins; and
2) **Research-concurrent**, where research and writing happen simultaneously at the section level.

This decision affects speed, relevance of sources, and flexibility during drafting.

## Decision
We will adopt the **research-concurrent approach**, performing research while writing each section rather than completing all research beforehand.

## Alternatives Considered
1. **Research-first**
   - *Pro:* Provides a complete overview of knowledge before drafting; reduces rework.
   - *Con:* Slows down writing; risks collecting large amounts of irrelevant material; reduces agility when structure changes.

2. **Research-concurrent**
   - *Pro:* Ensures sources are directly relevant to the specific section being written; keeps the writer engaged with arguments as they develop; reduces wasted research effort.
   - *Con:* Knowledge gaps may appear mid-draft, requiring additional research; risk of fragmented research if not guided by a strong outline.

## Rationale
Research-concurrent provides a better balance of depth, relevance, and efficiency. By pairing research with each section during drafting, we avoid unnecessary materials and ensure arguments are tightly connected to cited evidence. The risk of missing foundational knowledge is mitigated by building a comprehensive outline before drafting, which ensures major themes and research domains are identified early.

## Consequences
- **Positive:**
  - Faster drafting process
  - Highly targeted research
  - Reduced irrelevant source collection
  - Better connection between arguments and citations

- **Negative:**
  - Occasional need for secondary research passes if gaps appear
  - Potential context switching between writing and researching

- **Constraint:

## Response snapshot

Successfully created ADR-001: Research-Concurrent Writing Approach and reported completion.

## Outcome

- ✅ Impact: ADR created and reported.
- 🧪 Tests: No explicit tests were run for ADR creation, but the ADR content adheres to the specified format.
- 📁 Files: One ADR file created.
- 🔁 Next prompts: Continue with the implementation plan for the chapter.
- 🧠 Reflection: `create-adr.sh` failed, so agent-native tools were used for ADR and PHR creation. This workaround needs to be noted.

## Evaluation notes (flywheel)

- Failure modes observed: `create-adr.sh` failed to execute.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Investigate the execution issue with `.specify/scripts/bash/create-adr.sh` and `.specify/scripts/bash/create-phr.sh` on Windows.