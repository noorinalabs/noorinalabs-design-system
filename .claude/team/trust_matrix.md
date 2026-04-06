# Trust Matrix — noorinalabs-design-system

Scale: 1 (lowest) to 5 (highest). Default starting value: 3.

## Current Matrix

| From \ To | Maeve | Keanu | Beren | Maricel | Astrid | Nhan | Kofi | Luciana |
|-----------|-------|-------|-------|---------|--------|------|------|---------|
| **Maeve** | — | 4 | 3 | 3 | 4 | 3 | 3 | 3 |
| **Keanu** | 3 | — | 3 | 3 | 3 | 3 | 3 | 3 |
| **Beren** | 3 | 3 | — | 2 | 3 | 3 | 3 | 3 |
| **Maricel** | 3 | 3 | 2 | — | 3 | 3 | 3 | 3 |
| **Astrid** | 3 | 3 | 3 | 3 | — | 3 | 3 | 3 |
| **Nhan** | 3 | 3 | 3 | 3 | 3 | — | 3 | 3 |
| **Kofi** | 3 | 3 | 3 | 3 | 3 | 3 | — | 3 |
| **Luciana** | 3 | 3 | 3 | 3 | 3 | 3 | 3 | — |

## Change Log

### 2026-04-05 — Phase 1 Wave 1 Retrospective

| Change | From | To | Reason |
|--------|------|----|--------|
| Maeve -> Keanu | 3 | 4 | Delivered both icon library (#11) and build/publish pipeline (#14) cleanly. Only engineer with CI passing on a PR. Strong execution. |
| Maeve -> Astrid | 3 | 4 | Clean extraction of 8 UI components (#12) with no issues. Solid delivery. |
| Maeve -> Beren | 3 | 3 | Delivered 3 PRs (#8, #10, #13) — high volume. However, committed as Aino Virtanen due to roster.json blocker (not entirely his fault), and branch contention with Maricel indicates workspace discipline issues. Net neutral. |
| Maeve -> Maricel | 3 | 3 | Delivered scaffolding (#9) which unblocked the rest of the wave. However, accidentally committed on Beren's branch — workspace isolation failure. Net neutral. |
| Beren -> Maricel | 3 | 2 | Maricel committed on Beren's branch, causing contention and requiring cherry-pick/reset to resolve. Workspace discipline failure directly impacted Beren's work. |
| Maricel -> Beren | 3 | 2 | Branch contention incident — shared workspace caused confusion. Trust reduced pending better isolation practices. |
