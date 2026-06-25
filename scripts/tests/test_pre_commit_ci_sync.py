"""Tests for pre_commit_ci_sync — the pre-commit <-> CI drift gate (#327).

Verifies:
  1. The `cspell` kind is classified on both sides so the Spellcheck job's
     local⇄CI mirror is ENFORCED, not silently ignored (noorinalabs-main#684).
  2. The `structural-ontology` kind is classified on both sides so the C×T2
     staleness gate's local⇄CI mirror is enforced (#130).
  3. The drift direction that gates: CI-enforced-but-not-local is harmful;
     local-but-not-CI is stricter-local (informational, never a gate fail).
  4. This repo's real config mirrors its CI kinds (no harmful drift), with
     cspell and structural-ontology present on both sides.

Run: `python3 -m unittest discover -s scripts/tests` (stdlib only, no deps).
"""

from __future__ import annotations

import sys
import unittest
from pathlib import Path

# Helper lives at scripts/pre_commit_ci_sync.py; this test is at
# scripts/tests/test_*.py. parent.parent reaches the scripts/ root.
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from pre_commit_ci_sync import (  # noqa: E402
    check_repo,
    compute_drift,
    kinds_from_ci,
    kinds_from_precommit,
)

# scripts/tests/test_*.py -> parents[2] is the repo root.
_REPO_ROOT = Path(__file__).resolve().parents[2]


class CspellKindClassification(unittest.TestCase):
    """noorinalabs-main#684: the spell-check blind spot. A CI Spellcheck job must
    classify as the `cspell` kind on EITHER expression — the
    `streetsidesoftware/cspell-action` `uses:` ref, the bundled-CLI `cspell`
    step/run, or the generic `spellcheck` word — and a pre-commit cspell hook
    must classify too, so a CI spell gate with no local mirror produces harmful
    drift instead of silence."""

    def test_cspell_action_uses_ref_classified(self) -> None:
        wf = """
jobs:
  spellcheck:
    name: Spellcheck (cspell)
    steps:
      - name: cspell
        uses: streetsidesoftware/cspell-action@de2a73e # v8.4.0
"""
        self.assertIn("cspell", kinds_from_ci(wf))

    def test_cspell_cli_run_step_classified(self) -> None:
        wf = """
jobs:
  spell:
    steps:
      - run: npx cspell --config .cspell.json "**/*.md"
"""
        self.assertIn("cspell", kinds_from_ci(wf))

    def test_generic_spellcheck_word_classified(self) -> None:
        # A repo that names the step/run with the generic word still registers.
        self.assertIn("cspell", kinds_from_ci("      - run: make spellcheck\n"))

    def test_precommit_cspell_hook_classified(self) -> None:
        cfg = """
repos:
  - repo: https://github.com/streetsidesoftware/cspell-cli
    rev: v8.4.0
    hooks:
      - id: cspell
        name: cspell
"""
        self.assertIn("cspell", kinds_from_precommit(cfg))

    def test_ci_cspell_without_precommit_is_harmful_drift(self) -> None:
        # The exact divergence #684 exists to catch: CI enforces cspell, the
        # pre-commit config does not mirror it.
        wf = """
jobs:
  spellcheck:
    steps:
      - uses: streetsidesoftware/cspell-action@de2a73e
"""
        cfg = """
repos:
  - repo: local
    hooks:
      - id: eslint
"""
        harmful, _ = compute_drift(kinds_from_precommit(cfg), kinds_from_ci(wf))
        self.assertIn("cspell", harmful)

    def test_ci_cspell_with_precommit_mirror_no_drift(self) -> None:
        wf = """
jobs:
  spellcheck:
    steps:
      - uses: streetsidesoftware/cspell-action@de2a73e
"""
        cfg = """
repos:
  - repo: https://github.com/streetsidesoftware/cspell-cli
    rev: v8.4.0
    hooks:
      - id: cspell
"""
        harmful, _ = compute_drift(kinds_from_precommit(cfg), kinds_from_ci(wf))
        self.assertNotIn("cspell", harmful)


class StructuralOntologyKindClassification(unittest.TestCase):
    """#130 (C×T2 design-system wiring): the structural-ontology staleness gate
    must classify on both CI and pre-commit sides so the local mirror is enforced
    by the sync-drift gate, not silently ignored."""

    def test_ci_workflow_name_classified(self) -> None:
        wf = """
name: structural-ontology
on:
  pull_request: {}
jobs:
  staleness-check:
    steps:
      - run: python3 scripts/structural_ontology.py check --gen-lib _main/.claude/lib --require-generator
"""
        self.assertIn("structural-ontology", kinds_from_ci(wf))

    def test_ci_run_step_classified(self) -> None:
        wf = """
jobs:
  check:
    steps:
      - run: python3 scripts/structural_ontology.py check --require-generator
"""
        self.assertIn("structural-ontology", kinds_from_ci(wf))

    def test_precommit_hook_id_classified(self) -> None:
        cfg = """
repos:
  - repo: local
    hooks:
      - id: structural-ontology-staleness
        name: structural-ontology-staleness
        entry: python3 scripts/structural_ontology.py check
        language: system
"""
        self.assertIn("structural-ontology", kinds_from_precommit(cfg))

    def test_ci_without_precommit_is_harmful_drift(self) -> None:
        wf = """
name: structural-ontology
jobs:
  staleness-check:
    steps:
      - run: python3 scripts/structural_ontology.py check --require-generator
"""
        cfg = """
repos:
  - repo: local
    hooks:
      - id: eslint
"""
        harmful, _ = compute_drift(kinds_from_precommit(cfg), kinds_from_ci(wf))
        self.assertIn("structural-ontology", harmful)

    def test_both_sides_no_drift(self) -> None:
        wf = """
name: structural-ontology
jobs:
  staleness-check:
    steps:
      - run: python3 scripts/structural_ontology.py check --require-generator
"""
        cfg = """
repos:
  - repo: local
    hooks:
      - id: structural-ontology-staleness
        entry: python3 scripts/structural_ontology.py check
"""
        harmful, _ = compute_drift(kinds_from_precommit(cfg), kinds_from_ci(wf))
        self.assertNotIn("structural-ontology", harmful)


class RealRepoConfig(unittest.TestCase):
    """The actual committed config in THIS repo must have no harmful drift, and
    cspell + structural-ontology must be enforced on both sides."""

    def _wf_paths(self) -> list[Path]:
        return sorted((_REPO_ROOT / ".github" / "workflows").glob("*.y*ml"))

    def test_repo_has_no_harmful_drift(self) -> None:
        precommit = _REPO_ROOT / ".pre-commit-config.yaml"
        harmful, _ = check_repo(precommit, self._wf_paths())
        self.assertEqual(harmful, set(), f"unexpected harmful drift: {sorted(harmful)}")

    def test_repo_enforces_cspell_both_sides(self) -> None:
        precommit_text = (_REPO_ROOT / ".pre-commit-config.yaml").read_text(encoding="utf-8")
        ci_text = "\n".join(p.read_text(encoding="utf-8") for p in self._wf_paths())
        self.assertIn("cspell", kinds_from_precommit(precommit_text))
        self.assertIn("cspell", kinds_from_ci(ci_text))

    def test_repo_enforces_structural_ontology_both_sides(self) -> None:
        precommit_text = (_REPO_ROOT / ".pre-commit-config.yaml").read_text(encoding="utf-8")
        ci_text = "\n".join(p.read_text(encoding="utf-8") for p in self._wf_paths())
        self.assertIn("structural-ontology", kinds_from_precommit(precommit_text))
        self.assertIn("structural-ontology", kinds_from_ci(ci_text))


if __name__ == "__main__":
    unittest.main()
