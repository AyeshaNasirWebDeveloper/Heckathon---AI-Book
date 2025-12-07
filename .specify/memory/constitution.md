<!--
Sync Impact Report:
Version change: None -> 1.0.0 (MAJOR: Initial version/significant update)
Modified principles: All (initial definition)
Added sections: Key Standards, Docusaurus Installation Standards, Constraints, Success Criteria
Removed sections: None
Templates requiring updates:
- .specify/templates/plan-template.md: ⚠ pending (review for alignment with new principles)
- .specify/templates/spec-template.md: ⚠ pending (review for alignment with new principles)
- .specify/templates/tasks-template.md: ⚠ pending (review for alignment with new principles)
- .specify/templates/commands/*.md: ⚠ pending (review for alignment with new principles and updated standards)
Follow-up TODOs:
- TODO(GOVERNANCE_RULES): Add more specific governance rules if needed.
-->
# AI-Spec Driven Textbook & Chapter Automation System Constitution

## Core Principles

### Spec-first Development
All content generation and feature implementation must originate from clearly defined and approved written specifications. The spec serves as the foundational artifact.

### Single Source of Truth
Specifications are the single authoritative source that define the structure, content, and workflow for all aspects of the textbook and its automation system.

### Deterministic Output
Given the same approved specification, the automation system must consistently produce identical outputs, ensuring reliability and predictability.

### Maintainability & Extensibility Across All Chapters
The architecture and implementation must support easy maintenance and future expansion across all chapters of the textbook, minimizing technical debt.

### Clarity, Correctness, and Technical Accuracy
All generated content, examples, and explanations must be clear, technically accurate, and correct. This is a non-negotiable standard for the textbook's educational value.

## Key Standards

Every chapter must include: `/spec.md`, `/instructions.md`, `/assets/`, `/content-draft.md`, `/content-final.md`.
All tasks must be executed exclusively through Claude using explicit commands: “claude task”, “claude run”, “claude update”.
All examples must be technically accurate and runnable to ensure practical learning.
Terminology and structural elements must be consistent across the entire book.
No manual edits are permitted unless they are explicitly reflected back into the corresponding specification.

## Docusaurus Installation Standards

SpecKit must be fully initialized before any Docusaurus setup is initiated.
Docusaurus installation must only occur through Claude using explicit tasks: `claude task "install and configure docusaurus site"` followed by `claude run`.
Manual usage of “npx create-docusaurus” outside Claude’s task system is strictly prohibited.
Docusaurus configuration must align seamlessly with the SpecKit folder structure without overwriting or conflicting with existing files.
Docusaurus must be installed in a clean subdirectory (e.g., `/site/`) to prevent polluting the SpecKit root directory.

## Constraints and Success Criteria

**Constraints:**
No content generation is allowed without an approved specification.
Mixing manual edits and AI-generated edits is strictly prohibited.
All folder names must be lowercase and hyphen-separated.
All images must be stored in the `/assets/` directory with meaningful filenames.
All chapters must use sequential numbering for consistent organization.
Only Claude-generated changes are allowed during official workflows.
All tasks executed must be deterministic and repeatable.

**Success Criteria:**
SpecKit must be initialized successfully before Docusaurus setup can proceed.
Claude must install and configure the Docusaurus site without errors.
Each chapter’s generated content must match its specification 100%.
All examples and explanations in the textbook must be correct and validated.
The folder structure must remain clean and compliant with SpecKit guidelines.
Docusaurus build processes must run without warnings or errors.
Claude must be able to regenerate chapters deterministically at any time.
The final textbook site must render correctly and adhere to all specified standards.

## Governance

This constitution supersedes all other practices. Any amendments require documentation, approval, and a corresponding migration plan. Adherence to this constitution is mandatory for all project contributions.
TODO(GOVERNANCE_RULES): Add more specific governance rules if needed.

**Version**: 1.0.0 | **Ratified**: 2025-12-05 | **Last Amended**: 2025-12-05
