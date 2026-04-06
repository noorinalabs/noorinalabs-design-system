# Trust Matrix — noorinalabs-isnad-graph-ingestion

Scale: 1 (lowest) to 5 (highest). Default starting value: 3.

## Current Matrix

| From \ To | Dilara | Jean-Claude | Alejandra | Kavitha | Nikolaos | Ivana | Kwesi | Oyunbileg | Tarek | Sofia |
|-----------|--------|-------------|-----------|---------|----------|-------|-------|-----------|-------|-------|
| **Dilara** | — | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 4 | 3 |
| **Jean-Claude** | 3 | — | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 |
| **Alejandra** | 3 | 3 | — | 3 | 3 | 3 | 3 | 3 | 3 | 3 |
| **Kavitha** | 3 | 3 | 3 | — | 3 | 3 | 3 | 3 | 3 | 3 |
| **Nikolaos** | 3 | 3 | 3 | 3 | — | 3 | 3 | 3 | 3 | 3 |
| **Ivana** | 3 | 3 | 3 | 3 | 3 | — | 3 | 3 | 3 | 3 |
| **Kwesi** | 3 | 3 | 3 | 3 | 3 | 3 | — | 3 | 3 | 3 |
| **Oyunbileg** | 3 | 3 | 3 | 3 | 3 | 3 | 3 | — | 3 | 3 |
| **Tarek** | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | — | 3 |
| **Sofia** | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | — |

## Change Log

### 2026-04-06 — Phase 1 Retrospective (All Waves)

| Change | From | To | Reason |
|--------|------|----|--------|
| Dilara → Tarek | 3 | 4 | Delivered scaffolding (#9), CI/CD (#16), and both hotfix PRs (#18, #19) reliably. Identified and fixed real code bug in APPEARS_IN edge loader. Highest throughput contributor across all waves. |
| Dilara → Alejandra | 3 | 3 | Clean delivery of models/utils (#10). No issues. Baseline maintained. |
| Dilara → Ivana | 3 | 3 | Good delivery of resolve extraction (#11). Proactively included parse dependencies — good judgment, minor overlap with Kavitha resolved cleanly. |
| Dilara → Kavitha | 3 | 3 | Clean delivery of acquire/parse (#13). No issues. |
| Dilara → Kwesi | 3 | 3 | Clean delivery of graph/enrich (#12). No issues. |
| Dilara → Nikolaos | 3 | 3 | Clean delivery of pipeline/CLI (#14). No issues. |
| Dilara → Oyunbileg | 3 | 3 | Delivered tests (#15) with 480 unit tests. Good coverage. No issues. |
