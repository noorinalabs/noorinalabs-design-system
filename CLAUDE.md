# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**noorinalabs-design-system** is the shared design system for all Noorina Labs frontends. It provides design tokens, UI components, icons, and brand assets that ensure visual consistency across the organization's products (isnad-graph frontend, landing page, and future projects).

## Tech Stack

- **React 19** with **TypeScript** — component library
- **Tailwind CSS 4** — utility-first styling
- **Radix UI** — accessible, unstyled primitives
- **CVA (class-variance-authority)** — variant-based component styling
- **Storybook** — component documentation and visual testing
- **Vite** — build tooling and library bundling
- **npm** — package manager

## Architecture

| Directory | Purpose |
|-----------|---------|
| `tokens/` | Design tokens — colors (OKLCH), spacing, typography, shadows, radii, motion |
| `components/` | React UI components built on Radix UI primitives with CVA variants |
| `icons/` | SVG icon components and sprite sheet |
| `styles/` | Global CSS, Tailwind config, CSS custom properties generated from tokens |
| `docs/` | Design guidelines, usage documentation, brand assets |

### Brand Identity: "Qalam"

- **Color system:** OKLCH color space for perceptually uniform palettes
- **Typography:** IBM Plex Sans / IBM Plex Mono (Latin), Noto Naskh Arabic (Arabic script)
- **Layout:** BiDi/RTL-first — all components must support both LTR and RTL layouts natively
- **Design principles:** Information density, scholarly clarity, accessible contrast (WCAG 2.2 AA minimum)

## Build & Development Commands

```bash
# Setup
npm install         # Install dependencies

# Development
npm run dev         # Start Storybook dev server
npm run build       # Build the component library
npm run build:storybook  # Build static Storybook site

# Quality
npm run lint        # Run ESLint
npm run typecheck   # Run TypeScript type checking
npm run test        # Run Vitest unit tests
npm run test:ui     # Run Vitest with UI
npm run check       # Run all checks (lint + typecheck + test)
```

## Code Conventions

- All components use **CVA** for variant definitions — no inline conditional class logic
- Components are built on **Radix UI** primitives for accessibility (keyboard nav, ARIA, focus management)
- All components must render correctly in both **LTR and RTL** directions
- Tokens are defined as TypeScript constants and exported as CSS custom properties
- **ESLint** for linting, **Prettier** for formatting
- All components must have **Storybook stories** covering each variant and state
- Export everything from the package root via barrel files (`index.ts`)

## Configuration

Copy `.env.example` to `.env` if needed. This package has minimal environment configuration as it is a library.

## Project Memory

Project memory is **version-controlled in this repo** at `.claude/memory/`, not in the user-space auto-memory directory. This makes the accumulated DS-specific state **transferable**: a developer who clones only `noorinalabs-design-system` gets the memory with it, with zero per-machine setup. The index below is auto-loaded into every session via this committed import:

@.claude/memory/MEMORY.md

`MEMORY.md` is the always-loaded index (one line per memory); the individual topic files in `.claude/memory/*.md` are read on demand when a line looks relevant.

**Why not the auto-memory feature:** Claude Code's auto-memory lives under `~/.claude/...` — user-space, cwd-keyed (so it fragments across worktrees), and **not** git-shareable. A CLAUDE.md `@import` of committed files is the only zero-setup-on-pull mechanism, so memory travels with the branch.

**Recording a memory:** create or edit `.claude/memory/<kebab-slug>.md` with the standard frontmatter (`name`, `description`, `metadata.type` = `user` | `feedback` | `project` | `reference`), add a one-line pointer to `MEMORY.md` (`- [Title](file.md) — hook`), and **commit it** so it travels with the branch. Link related memories with `[[other-slug]]`. Before adding, check for an existing file covering the same fact and update it instead of duplicating; delete memories that turn out to be wrong.

> `.claude/memory/**` is excluded from the markdownlint/cspell/lychee linters (dense append-only note prose with names, SHAs, `[[wikilinks]]`, and Arabic — same call as `feedback_log.md`). The Stop-hook `session_handoff.md` is gitignored (per-session, machine-local churn). This mirrors the parent `noorinalabs-main` per-child-repo memory pattern (meta-issue #740): each repo commits its own `.claude/memory/` + `@import` in its own CLAUDE.md — repos do not import across directories.

## Team Workflow

> **Cross-repo session-team note:** The team structure described below is the **per-repo team** — operative when a session is opened isolated in this repo for repo-only work.
>
> When work is orchestrated from the parent `noorinalabs-main` (the common case — wave kickoff, cross-repo features, wave-coordinated bug fixes), all spawned agents — regardless of which repo they edit — join the single `noorinalabs` session team. The per-repo roster below still governs **commit identity, domain ownership, and reviewer pairing**, but the team-creation surface lives in the orchestrator session, not here.
>
> See `noorinalabs-main/CLAUDE.md` § "Session team architecture" and `noorinalabs-main/.claude/team/charter/agents.md` § "Single-Leader Constraint" for the delegation pattern.

**All work MUST be executed through the simulated team structure.** No work begins without spawning the team.

> **Note:** The authoritative team config (charter, roster, hooks, skills) lives in the parent repo (`noorinalabs-main/.claude/`). This repo retains a local copy for agents working within noorinalabs-design-system.

- **Charter & rules:** `.claude/team/charter.md` (canonical: `../../.claude/team/charter.md`)
- **Active roster:** `.claude/team/roster/` (canonical: `../../.claude/team/roster/`)
- **Feedback log:** `.claude/team/feedback_log.md`

### Team Composition
| Role | Level | Name | File |
|------|-------|------|------|
| Design System Lead / Manager | Senior VP (Executive) | Maeve Callahan | `roster/manager_maeve.md` |
| Design System Architect | Partner | Keanu Tama | `roster/architect_keanu.md` |
| UX/Visual Designer Lead | Principal | Beren Yildiz | `roster/ux_lead_beren.md` |
| Component Engineer | Senior | Maricel Reyes | `roster/component_engineer_maricel.md` |
| Component Engineer | Senior | Astrid Lindqvist | `roster/component_engineer_astrid.md` |
| Accessibility Engineer | Senior | Nhan Pham | `roster/accessibility_engineer_nhan.md` |
| Documentation / Storybook Engineer | Senior | Kofi Mensah | `roster/docs_engineer_kofi.md` |
| QA / Visual Regression Engineer | Senior | Luciana Ferreyra | `roster/qa_engineer_luciana.md` |

### Key Rules
- **Commit identity:** Each team member commits using per-commit `-c` flags with their name and `parametrization+{FirstName}.{LastName}@gmail.com` email — **never** set global/repo git config. See `.claude/team/charter.md` § Commit Identity for the full table.
- **Worktrees** are the preferred isolation method for all code-writing agents
- Manager spawns team members, creates stories/AC from PRD, and owns timelines
- Manager, Design System Architect, and UX/Visual Designer Lead coordinate to keep components, tokens, and architecture aligned
- Feedback flows up and down; severe feedback triggers fire-and-replace
- If the Manager receives significant negative feedback from the user, the Manager is replaced
- Team evolves toward steady state of minimal negative feedback

## Developer Tooling & Orchestration

- **gh-cli** is installed and available from the terminal
- **SSH access** is enabled from the terminal
- **GitHub Projects** — project/feature tracking and board management
- **GitHub Issues** — story/task/bug tracking (created by Manager, assigned to team members)
- **GitHub Actions** — CI/CD pipelines, automated tests, linting, deployment
- These three (Projects, Issues, Actions) are the **core orchestration layer** — do not introduce alternative tools for these concerns
- **Branching strategy:** Feature branches named `{FirstInitial}.{LastName}/{IIII}-{issue-name}` (e.g., `F.Okonkwo/0042-setup-storybook`) merged to `main` via PR
