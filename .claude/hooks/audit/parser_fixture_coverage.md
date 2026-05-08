# Parser-Fixture Coverage Audit — noorinalabs-design-system

**Audit date:** 2026-05-07
**Wave:** P3W7
**Auditor:** Kofi Mensah
**Meta-issue:** noorinalabs/noorinalabs-main#300
**Charter ref:** `noorinalabs-main/.claude/team/charter/hooks.md` § 5 Parser-Fixture Coverage Requirements
**Head SHA verified:** `83c71ce` (PR branch tip)

---

## Repo Classification

**`noorinalabs-design-system` is a dispatcher-style child repo.**

`.claude/hooks/` does not exist at HEAD (verified via `gh api repos/.../contents/.claude/hooks?ref=83c71ce` → 404 and `git ls-tree HEAD .claude/`). All hooks run from parent-canonical absolute paths registered in `.claude/settings.json`.

PR #66 (merged 2026-05-05) removed the two stale copy-resident files (`annunaki_log.py` and `validate_commit_identity.py`) that had drifted from parent main. Those files were not referenced by `settings.json` and did not fire — their removal satisfied the umbrella `noorinalabs-main#263` acceptance criterion ("empty `.claude/hooks/`" for dispatcher-style children).

---

## Hook Inventory

| # | File | Type | Classification |
|---|------|------|----------------|
| — | *(none)* | — | `.claude/hooks/` is empty post-PR #66 |

**Local hook count:** 0
**Parser-class hooks:** 0
**Non-parser hooks:** 0

**Active hooks (via dispatcher):** All hooks fire from `noorinalabs-main/.claude/hooks/` absolute paths registered in `.claude/settings.json`. This repo delegates entirely to the parent.

---

## Coverage Table

| Hook | Parser-class? | Local fixtures? | Parent fixtures? | Gap |
|------|---------------|-----------------|------------------|-----|
| *(no local hooks)* | N/A | N/A | N/A | See charter-clarification note below |

---

## Charter-Clarification Question

Charter `hooks.md` § 5 (Parser-Fixture Coverage Requirements) states:

> Every hook with input parsing MUST have test fixtures covering all known input shapes.

This requirement is written with hook-owning repos in mind. It is **silent on dispatcher-style children** — repos that carry zero local hook files and delegate entirely to the parent via absolute-path `settings.json` entries.

**Open question for Nadia's ★ cross-repo audit summary PR:** Does the charter intend for dispatcher-style children to:
- (A) Inherit coverage from the parent's test suite (parent owns the parser, parent owns the fixtures) — no per-child action required; OR
- (B) Maintain a per-child test harness that re-exercises the parent hooks against child-specific inputs (e.g., child roster resolution, child-specific `REPO_ROOT` paths)?

`noorinalabs-design-system` is the **exemplary endpoint** of the dispatcher pattern this wave: 0 local hooks, 0 local fixtures, parent canonical. landing-page also has 0 local hooks (separate gap #85 — missing PostToolUse matchers). The charter-clarification question is the same for both.

**Recommendation:** Consolidate the answer in Nadia's ★ summary PR as a charter amendment to § 5, adding a "Dispatcher-style children" sub-clause. Until resolved, no per-child test suite is required (option A assumed).

---

## Pattern G Observations

No in-wave parser-bug fixes landed. The hook-removal arc (PR #66) predates this wave and was P3W5 work. No parser-class hooks exist locally; no fixture gaps to remediate in-wave.

---

## Summary

- **0 local hooks** in `noorinalabs-design-system/.claude/hooks/` (dispatcher-style child, post-PR #66)
- **0 parser-class hooks** (none local)
- **0 fixture gaps** in the classical sense
- **1 charter-clarification question:** whether dispatcher-style children need per-child fixture harnesses — deferred to Nadia's ★ cross-repo summary PR for consolidation
- **In-wave fixes:** 0
- **Admin overrides:** 0
