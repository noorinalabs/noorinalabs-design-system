# Parser-Fixture Coverage Audit — noorinalabs-design-system

**Audit date:** 2026-05-07
**Wave:** P3W7
**Auditor:** Kofi Mensah
**Meta-issue:** noorinalabs/noorinalabs-main#300
**Charter ref:** `noorinalabs-main/.claude/team/charter/hooks.md` § 5 Parser-Fixture Coverage Requirements

---

## Hook Inventory

| # | File | Type | Classification |
|---|------|------|----------------|
| 1 | `annunaki_log.py` | Utility module (imported by hooks) | Non-parser — no `check()` / `main()`, no input parsing |
| 2 | `validate_commit_identity.py` | PreToolUse hook | **Parser-class** — regex parsing, heredoc stripping, quoted-string stripping |

**Hook count:** 2 files in `.claude/hooks/`
**Parser-class hooks:** 1 (`validate_commit_identity.py`)
**Non-parser hooks:** 1 (`annunaki_log.py`)

---

## Hook Details

### 1. `annunaki_log.py` — Non-parser utility

**Role:** Shared error-logging utility imported by blocking hooks. Writes structured records to the Annunaki JSONL error log.

**Input handling:** Receives typed Python arguments from callers (not raw stdin JSON). No parsing surface.

**Fixture coverage required:** No. Non-parser utility modules are out of scope for the parser-fixture coverage requirement.

---

### 2. `validate_commit_identity.py` — Parser-class hook

**Role:** PreToolUse gate that enforces `-c user.name=` and `-c user.email=` identity flags on every `git commit` invocation. Validates against merged parent+child roster.

**Parser surfaces:**
- `_strip_heredocs(text)` — regex strips `<<'DELIM'…DELIM` and `<<DELIM…DELIM` bodies before command analysis
- `_strip_quoted_strings(text)` — regex strips single- and double-quoted string content
- `_is_git_commit_command(command)` — multi-part regex detects `git commit` after shell operators (`&&`, `||`, `;`, `|`), skipping `-c key=val` and `-X val` options
- `_detect_target_roster(command)` — regex extracts `cd <path>` targets for cross-repo roster loading
- `-c user.name=` / `-c user.email=` extraction — two `re.search` calls with optional quoting

**Parent test coverage (noorinalabs-main):** 374-line test file with 14+ test cases covering:
- Parent+child roster merge semantics (union, child-wins collision, one-level-walk limit)
- Cross-repo `cd <path>` detection
- Heredoc body false-positive suppression
- Quoted string stripping
- Backslash line-continuation edge case (#287)
- Multiple `-c user.name=` repeated flag handling

**Child-repo test coverage:** **NONE** — no `tests/` directory under `.claude/hooks/` in `noorinalabs-design-system`.

---

## Coverage Table

| Hook | Parser-class? | Child tests exist? | Parent tests exist? | Gap |
|------|---------------|--------------------|---------------------|-----|
| `annunaki_log.py` | No | N/A | N/A | None (non-parser) |
| `validate_commit_identity.py` | Yes | **No** | Yes (374 lines) | Child has no fixture file |

---

## Gap Analysis

### Gap 1 — No child-repo hook tests directory

`noorinalabs-design-system/.claude/hooks/` contains no `tests/` subdirectory. The child ships `validate_commit_identity.py` as a local copy of the parent hook (last synced in #60, P2W9), but has zero test coverage at the repo level.

**Impact:** If the child's copy of `validate_commit_identity.py` diverges from the parent — or if design-system-specific roster patterns are added — regressions will not be caught by CI in this repo. The parent's test suite covers parent's copy only.

**Charter requirement:** § 5 requires every hook with input parsing to have test fixtures covering all known input shapes. The child copy is a parser-class hook; the requirement applies.

**In-wave fix:** Not landed (see § Pattern G observations below).

**Backport issue:** noorinalabs/noorinalabs-design-system#72

### Gap 2 — settings.json parity anomaly between main and wave-7

`main` branch `settings.json` lists child-repo hooks (validate_commit_identity, block_no_verify, block_git_config, auto_set_env_test, validate_labels, validate_pr_ci_status) as direct entries pointing to parent paths. `wave-7` branch `settings.json` uses the dispatcher pattern. This is a stale-main-vs-wave divergence, not a parser-fixture gap, but it means the hooks active during this wave differ from main.

**This is already tracked:** The `settings.json` parity issue was addressed in wave-6 PR #70 (M.Reyes/0067-w6-settings-parity). However, the wave-7 settings.json on the feature branch is current (dispatcher), while the main branch reflects a pre-parity state — possibly the merge of #70 did not fully land before main advanced. Not a new gap; noting for completeness.

---

## Pattern G Observations

Pattern G (in-wave fixes encouraged): The Gap 1 fixture deficit is straightforward to backport — the child's `validate_commit_identity.py` is identical to the parent's copy (confirmed by reading both), so the parent's test suite can be adapted with minimal changes. The primary addition needed is a fixture that exercises the child's `REPO_ROOT` path resolution (since `Path(__file__).resolve().parent.parent.parent` resolves differently in the child vs parent).

**Decision:** Not landing in-wave. The child has no `pytest` infrastructure under `.claude/hooks/` (no `conftest.py`, no `requirements.txt` for test deps). Installing pytest in `.claude/hooks/tests/` requires a follow-on CI integration step that is out of scope for a Tier-1 audit PR. The backport issue will capture the full remediation scope.

**No parser-bug fixes landed in-wave** (audit-only PR).

---

## Summary

- **2 hooks** in `noorinalabs-design-system/.claude/hooks/`
- **1 parser-class hook:** `validate_commit_identity.py`
- **1 non-parser utility:** `annunaki_log.py`
- **Gaps found:** 1 (no child-repo test fixtures for parser-class hook)
- **In-wave fixes:** 0 (backport issue filed)
- **Admin overrides used:** 0
