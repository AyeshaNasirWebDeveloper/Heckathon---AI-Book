---
id: 0002
title: Constitution Update
stage: constitution
date: 2025-12-05
surface: agent
model: claude-sonnet-4-5-20251101
feature: AI-Spec Driven Textbook
branch: master
user: unknown
command: "/sp.phr --title \"Constitution Update\" --stage constitution --feature \"AI-Spec Driven Textbook\""
labels: ["constitution", "update", "project-setup"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
tests:
  - none
---

## Prompt

Project: AI-Spec Driven Textbook & Chapter Automation System

Core principles:
- Spec-first development (all content originates from written specs)
- Single source of truth (specs define structure, content, and workflow)
- Deterministic output (same spec = same result)
- Maintainability & extensibility across all chapters
- Clarity, correctness, and technical accuracy in all generated content

Key standards:
- Every chapter must include: /spec.md, /instructions.md, /assets/, /content-draft.md, /content-final.md
- All tasks must be executed only through Claude: “claude task”, “claude run”, “claude update”
- All examples must be technically accurate and runnable
- Terminology and structure must be consistent across the entire book
- No manual edits unless reflected back into the spec

Docusaurus installation standards:
- SpecKit must be fully initialized before any Docusaurus setup
- Docusaurus installation must only occur through Claude using explicit tasks:
  - claude task "install and configure docusaurus site"
  - claude run
- No manual usage of “npx create-docusaurus” outside Claude’s task system
- Docusaurus configuration must align with SpecKit folder structure without overwriting or conflicting existing files
- Docusaurus must be installed in a clean subdirectory (e.g., /site/) to avoid polluting the SpecKit root

Constraints:
- No content generation without an approved spec
- No mixing manual edits and AI edits
- All folder names lowercase, hyphen-separated
- All images stored in /assets/ with meaningful filenames
- All chapters must use sequential numbering
- Only Claude-generated changes are allowed during workflows
- All tasks must be deterministic and repeatable

Success criteria:
- SpecKit initialized successfully before Docusaurus setup
- Claude installs and configures Docusaurus without errors
- Each chapter’s content matches its spec 100%
- All examples and explanations are correct and validated
- Folder structure remains clean and SpecKit-compliant
- Docusaurus build runs without warnings or errors
- Claude can regenerate chapters deterministically anytime
- Final textbook site renders correctly and follows all specs

## Response snapshot

Updated the project constitution to version 1.0.0, incorporating core principles, key standards, Docusaurus installation guidelines, constraints, and success criteria for the AI-Spec Driven Textbook & Chapter Automation System.

## Outcome

- ✅ Impact: Successfully updated the project constitution to v1.0.0, establishing core principles, standards, and governance.
- 🧪 Tests: none
- 📁 Files: .specify/memory/constitution.md modified
- 🔁 Next prompts: Review dependent templates (`plan-template.md`, `spec-template.md`, `tasks-template.md`, commands/*.md`) for alignment.
- 🧠 Reflection: The initial constitution has been established, providing a foundational document for the project.

## Evaluation notes (flywheel)

- Failure modes observed: The `create-phr.sh` script was not found, requiring agent-native fallback.
- Graders run and results (PASS/FAIL): none
- Prompt variant (if applicable): none
- Next experiment (smallest change to try): Ensure `create-phr.sh` is present or improve agent-native PHR creation.
