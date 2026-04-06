# Team Feedback Log

Track all feedback events here. Format:

```
| Date | From | To | Severity | Description |
|------|------|----|----------|-------------|
```

## Retrospective: Phase 1 Wave 1 — 2026-04-05

### Team Performance

- **PRs merged:** 7 feature PRs (#8-#14) + 1 wave merge PR (#15) = 8 total
- **Issues closed:** 7 (issues #1-#7)
- **CI health:** Only PR #14 (Keanu, build/publish) had CI running and passing. All other PRs had NO CI checks. Wave merge PR #15 also had no CI — flagged by user, tech debt issue #16 created.
- **Peer reviews:** 0 reviews on any PR (charter violation — all PRs should have at least one reviewer)
- **Time span:** All PRs created and merged within a single session (~3 hours)

### Per-Engineer Assessments

### Maricel Reyes
- PRs: #9 (project scaffolding)
- CI failures: 0 (no CI configured)
- Must-fix items received: 0
- Tech-debt items created: 0
- Assessment: Delivered scaffolding first, which unblocked all subsequent work — correct sequencing. However, accidentally committed on Beren's branch due to lack of worktree isolation, requiring cherry-pick and reset to fix. No peer reviews given or received.
- Severity: minor (workspace discipline)

### Beren Yildiz
- PRs: #8 (brand docs), #10 (design tokens), #13 (global styles)
- CI failures: 0 (no CI configured)
- Must-fix items received: 0
- Tech-debt items created: 0
- Assessment: Highest volume contributor with 3 PRs. All deliverables were clean extractions. However, initially committed as Aino Virtanen due to roster.json blocker (partially systemic, not fully his fault — roster.json was missing his entry). Had to amend commits after roster fix. Branch contention with Maricel (shared workspace). No peer reviews given or received.
- Severity: minor (identity/workspace issues, partially systemic)

### Astrid Lindqvist
- PRs: #12 (UI components)
- CI failures: 0 (no CI configured)
- Must-fix items received: 0
- Tech-debt items created: 0
- Assessment: Clean extraction of 8 UI components from isnad-graph. No issues encountered. Delivered on time with no complications. No peer reviews given or received.
- Severity: none

### Keanu Tama
- PRs: #11 (icon library), #14 (build/publish pipeline)
- CI failures: 0 (CI passing on #14)
- Must-fix items received: 0
- Tech-debt items created: 1 (issue #16 — CI enforcement, created by manager after user feedback)
- Assessment: Strongest performer in the wave. Delivered both icon library extraction and build/publish pipeline cleanly. Only engineer whose PR (#14) had CI running and passing. Build pipeline work sets the foundation for future CI enforcement. No peer reviews given or received.
- Severity: none

### Top 3 Going Well
1. **Dependency-aware batching** — Scaffolding first, then parallel batches based on dependency order. This prevented merge conflicts and kept the wave moving efficiently.
2. **High throughput** — 7 feature PRs delivered and merged in a single session. All deliverables were functional extractions from isnad-graph.
3. **Build pipeline foundation** — Keanu's CI/CD pipeline (#14) gives us the infrastructure to enforce checks going forward.

### Top 3 Pain Points
1. **No CI checks on 6 of 7 PRs** — Only #14 had CI running. Wave merge PR #15 had no checks at all. User flagged this as a significant gap. Issue #16 created for remediation.
2. **No peer reviews on any PR** — Charter requires reviews; none were performed. This is a process violation that needs immediate correction.
3. **Workspace isolation failures** — Maricel and Beren collided on the same branch because they were not in separate worktrees. The roster.json blocker compounded this by forcing Beren to commit under the wrong identity.

### Proposed Process Changes
1. **Mandate worktree isolation for all concurrent work** — Rationale: Branch contention between Maricel and Beren was caused by sharing a working directory. Worktrees are already the charter-preferred method but were not enforced.
2. **Require at least one peer review before merge** — Rationale: Zero reviews on all 7 PRs is a charter violation. Enforce via GitHub branch protection rules once CI is in place (issue #16).
3. **Pre-flight roster.json validation** — Rationale: Beren's identity blocker (committing as Aino Virtanen) was caused by missing roster.json entries. Add a pre-wave checklist that verifies all assigned engineers exist in roster.json before work begins.
