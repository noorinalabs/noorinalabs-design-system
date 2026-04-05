# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**noorinalabs-design-system** is the shared design system for all NoorinALabs frontends. It provides design tokens, UI components, icons, and brand assets that ensure visual consistency across the organization's products (isnad-graph frontend, landing page, and future projects).

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

## Team Workflow

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
- **Branching strategy:** Feature branches named `{FirstInitial}.{LastName}\{IIII}-{issue-name}` (e.g., `F.Okonkwo\0042-setup-storybook`) merged to `main` via PR
