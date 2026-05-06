# Operational Runbook — `@noorinalabs/design-system`

Operational reference for the Qalam design system: how to build it, run it locally, publish a release, roll one back, triage common failures, and escalate when something is on fire.

**Scope.** This runbook covers operational concerns only — what an on-call or release engineer needs in the moment. For component authoring guidance, token philosophy, or brand decisions see [`docs/usage/`](docs/usage/) and [`docs/brand/`](docs/brand/) plus [`CLAUDE.md`](CLAUDE.md).

**Companion runbooks.** This is one of the P3W6 Tier-2 runbook fan-out (`noorinalabs-main#284`). Sibling runbooks in `noorinalabs-deploy`, `noorinalabs-data-acquisition`, `noorinalabs-landing-page`, and `noorinalabs-isnad-ingest-platform` follow the same structure.

---

## 1. Build & local-dev procedure

### 1.1 Prerequisites

| Tool | Version | Notes |
|---|---|---|
| Node.js | 20.x (CI) / 22.x (publish) | `ci.yml` pins 20.x; `publish.yml` and `storybook.yml` pin 22.x. Match the relevant pipeline locally. |
| npm | bundled with Node | `npm ci` is required for reproducible installs. |
| GitHub Packages auth | personal access token with `read:packages` | Needed to install the package itself in a consumer; not needed to develop in this repo. |

This repo has no runtime services and no `.env` file is required for development. `peerDependencies` declare `react` 18 or 19; the dev install pulls 19 — keep that in mind when reproducing consumer issues that pin 18.

### 1.2 Standard scripts

All scripts are defined in [`package.json`](package.json). Use these names — never invoke `vite`, `tsc`, or `storybook` directly except for one-off debugging.

| Script | What it does | When to run |
|---|---|---|
| `npm install` | Install dependencies. | First clone, after `package.json` change, after pulling `main`. |
| `npm run dev` | Start Storybook on `http://localhost:6006`. | Authoring components, visually validating tokens. |
| `npm run build` | `vite build` → emits `dist/` (ESM, CJS, type declarations, `styles.css`). | Before publish, before consumer-facing smoke test. |
| `npm run build:storybook` | Static Storybook → `storybook-static/`. | Reproducing the `storybook.yml` Pages build locally. |
| `npm run lint` | ESLint over `src/`. | Always before pushing. |
| `npm run typecheck` | `tsc --noEmit`. | Always before pushing. |
| `npm run test` | Vitest unit tests (one-shot). | Always before pushing. |
| `npm run test:ui` | Vitest with the UI runner. | Iterating on a failing test. |
| `npm run check` | `lint && typecheck && test`. | Final sanity gate; matches what `publish.yml` runs. |

### 1.3 Verifying a build locally

After `npm run build`, validate that the package is well-formed:

```bash
node scripts/validate-package-exports.mjs
npm pack --dry-run | grep -E 'dist/(index\.(js|cjs|d\.ts)|styles\.css)'
```

Both commands run in CI under `validate-package` in `ci.yml` and any failure here means consumers will fail to install.

### 1.4 Storybook port / running alongside isnad-graph

The dev server runs on **`6006`** and isnad-graph's dev server runs on `5173`. They do not conflict. If `6006` is already taken, `storybook dev -p 6006` will exit non-zero — pass `-p` to override or kill the previous process; do not silently reassign the port in committed config.

---

## 2. Publish / release procedure

The package is published to **GitHub Packages** (`https://npm.pkg.github.com`) under the `@noorinalabs` scope. Public npm is **not** used.

### 2.1 Trigger surface

The only publish trigger is a **GitHub release** on this repo. `publish.yml` is gated on `on: release: types: [published]`. Pushes to `main` do **not** publish; merges to wave branches do **not** publish.

### 2.2 Cutting a release (happy path)

1. Land all release-bound PRs on `main` via the normal review/merge flow.
2. Bump `version` in `package.json` on `main` via a PR (e.g. `0.0.2` → `0.0.3`). Follow semver: breaking token rename or component API change → minor while pre-1.0; bug fix → patch.
3. After merge, tag the commit: `git tag v0.0.3 && git push origin v0.0.3`.
4. Create the release: `gh release create v0.0.3 --generate-notes`.
5. `publish.yml` fires automatically on `release: published`. Watch the run: `gh run watch --repo noorinalabs/noorinalabs-design-system`.
6. Confirm the published version: `gh api /orgs/noorinalabs/packages/npm/design-system/versions --jq '.[0].name'` should print the new version.

### 2.3 What `publish.yml` actually does

| Step | Notes |
|---|---|
| `npm ci` | Locked install. |
| `npm run check` | Lint + typecheck + tests must pass. **Failing this fails the publish before any artifact is built.** |
| `npm run build` | Emits `dist/`. |
| `npm publish` | Authenticates with `GITHUB_TOKEN` against GitHub Packages. Requires `permissions.packages: write`. |

### 2.4 Storybook deploy is currently disabled

`storybook.yml` builds Storybook on every push to `main` but the **deploy job is gated `if: false`** because GitHub Pages is not yet enabled for this repo (publishing Storybook to `github.io` is a project-lead decision, not a CI fix). The static artifact is still uploaded; deployment is a one-line flip once Pages is turned on. **Do not flip `if: false` to `true` without explicit approval from the design-system manager (Maeve Callahan).**

### 2.5 Consumer-side install

Consumers configure the registry once:

```bash
echo '@noorinalabs:registry=https://npm.pkg.github.com' >> .npmrc
npm install @noorinalabs/design-system
```

CI consumers also need a `NODE_AUTH_TOKEN` with `read:packages`. See [`docs/usage/consumer-ci-setup.md`](docs/usage/consumer-ci-setup.md) for the full setup.

---

## 3. Rollback procedure

GitHub Packages does **not** support overwriting a published version. Rollback means publishing a corrected version that consumers can pin to, plus optionally hiding the bad version.

### 3.1 Decide the rollback shape

| Symptom | Action |
|---|---|
| Bad version published, no consumers have pinned to it yet | Delete the package version (3.2), then re-publish from a corrected commit (3.3). |
| Bad version is already in use by a consumer | Do **not** delete the version (it will break consumer installs). Publish a corrected patch version (3.3) and notify consumers to bump. |
| Build artifact is fine but a downstream consumer is broken (e.g. peer-dep mismatch) | Pin the consumer to the previous good version while a fix lands here; do not roll back this repo. |

### 3.2 Deleting a bad version (only when no consumer has pinned it)

```bash
gh api -X DELETE /orgs/noorinalabs/packages/npm/design-system/versions/<version-id>
```

Get `<version-id>` from `gh api /orgs/noorinalabs/packages/npm/design-system/versions`. This is destructive. Once deleted, anyone who has it cached locally still has it; anyone trying a fresh install will get a 404.

### 3.3 Publishing a corrected version

1. Revert the offending commit on `main` (`git revert <sha>` — do not force-push).
2. Bump the patch version in `package.json` (e.g. `0.0.3` → `0.0.4`).
3. Cut a release exactly as in §2.2. The `publish.yml` flow is identical.

### 3.4 Communicating the rollback

- Comment on the release notes of the bad version with `**WITHDRAWN — use vX.Y.Z+1**` and a one-line reason.
- Post in the consumer-side issues if any are tracking the integration (typically `noorinalabs-isnad-graph` and `noorinalabs-landing-page`).

---

## 4. Common failure-mode triage

Failure modes observed historically or anticipated based on the toolchain. Each entry is **symptom → quickest diagnostic → fix**.

### 4.1 `npm publish` fails with `401 Unauthorized`

- **Symptom.** `publish.yml` red on the publish step.
- **Diagnostic.** `gh run view <id> --log` and look for `npm ERR! 401`.
- **Fix.** The job's `GITHUB_TOKEN` lacks `packages: write`. Confirm `permissions.packages: write` is still set in `publish.yml` jobs `permissions:` block. If missing, add it in a PR — do not paper over with a PAT.

### 4.2 `npm publish` fails with `409 Conflict` / "cannot publish over previously published version"

- **Symptom.** Release fired but version already exists.
- **Diagnostic.** `gh api /orgs/noorinalabs/packages/npm/design-system/versions --jq '.[].name'` lists existing versions.
- **Fix.** Bump `version` in `package.json` (the existing version cannot be republished). Cut a new release.

### 4.3 `validate-package` job fails with "dist/styles.css missing from package"

- **Symptom.** `ci.yml` `validate-package` job red.
- **Diagnostic.** Run locally: `npm run build && npm pack --dry-run`. Look for `dist/styles.css` in the file list.
- **Fix.** Most often a Vite config regression that drops the CSS asset, or a `package.json` `files` field that forgot `dist`. Inspect [`vite.config.ts`](vite.config.ts) and the `files` array in `package.json`; both must keep `dist`.

### 4.4 `validate-package-exports.mjs` fails

- **Symptom.** `ci.yml` "Verify exports field resolution" step red.
- **Diagnostic.** The script prints `FAIL` lines for missing critical exports (`.`, `./styles`, `./styles.css`).
- **Fix.** Either the build emitted nothing for that export (Vite config), or the `exports` field references a file the build does not produce. Reconcile the two — `package.json` `exports` is the contract, `dist/` is the implementation.

### 4.5 Vitest fails locally with "ReferenceError: document is not defined"

- **Symptom.** Component test cannot find `document` / `window`.
- **Diagnostic.** Check [`vitest.config.ts`](vitest.config.ts) — the environment must be `happy-dom` or `jsdom`.
- **Fix.** Restore the environment setting; do not switch a single test to `// @vitest-environment node` unless you genuinely don't need a DOM.

### 4.6 Storybook build fails with MDX / module resolution errors

- **Symptom.** `npm run build:storybook` (or `storybook.yml` `build` job) red with "Module not found" or MDX parse errors.
- **Diagnostic.** Reproduce locally with `npm run build:storybook`. Storybook 8.6 is strict about story file extensions (`.stories.tsx`, `.mdx`).
- **Fix.** Most common cause is a story importing a path that exists in `src/` but is not exported via the barrel — fix the import or add the export. Second most common is an MDX file using JSX without the `.mdx` extension.

### 4.7 Consumer install fails with `404` against `https://npm.pkg.github.com/@noorinalabs/design-system`

- **Symptom.** Downstream CI red on `npm ci`.
- **Diagnostic.** `gh api /orgs/noorinalabs/packages/npm/design-system` should return package metadata. If `404`, the version was deleted or never published.
- **Fix.** If a version was deleted (see §3.2), have the consumer pin to the latest still-published version. If publish never succeeded, re-trigger §2.2.

### 4.8 Consumer install fails with `403 Forbidden`

- **Symptom.** Downstream CI red with auth error despite `NODE_AUTH_TOKEN` set.
- **Diagnostic.** Check the consumer's token scopes. GitHub Actions `GITHUB_TOKEN` only reads packages within the same org by default; cross-org consumption needs a PAT.
- **Fix.** Ensure the consumer workflow has `permissions.packages: read` and that the package is visible to the consumer's repo (check Package Settings → "Manage Actions access").

### 4.9 BiDi/RTL component renders LTR in a consumer

- **Symptom.** Consumer reports Arabic text is left-aligned.
- **Diagnostic.** This is almost always the consumer not setting `dir="rtl"` on the document root, not a design-system bug.
- **Fix.** Direct the consumer to set `dir` based on locale at the document/`<html>` level. Components use CSS logical properties (`ps-3`, `pe-3`, `text-start`) and inherit direction — they do not detect locale themselves.

### 4.10 Token / dark-mode regression after a CSS-vars change

- **Symptom.** A consumer reports a color or shadow looks wrong after upgrading.
- **Diagnostic.** Diff `dist/styles.css` between the old and new versions for the affected CSS custom property; cross-check with `src/tokens/`.
- **Fix.** If it's a deliberate token change, document the breaking nature in the release notes and bump minor (pre-1.0). If it's an accidental regression, follow §3 to ship a corrected patch.

---

## 5. On-call escalation

The design system has **no runtime production presence** — no service is paged when this repo is broken. Escalation here is about who to involve when a publish, release, or downstream-consumer incident needs a decision.

### 5.1 Escalation ladder

| Severity | Trigger | First responder | Escalate to |
|---|---|---|---|
| **P3 — Inconvenience** | Storybook deploy red, lint red on a non-blocking commit, slow-burn deprecation. | Documentation / Storybook Engineer (Kofi Mensah) for Storybook; Component Engineer on-rotation otherwise. | Architect (Keanu Tama) within one business day. |
| **P2 — Build broken on main** | `ci.yml` red on `main`; new releases blocked. | Whoever merged the offending PR. If unclear, Architect (Keanu Tama). | Manager (Maeve Callahan) if unfixed within 2 hours during work hours. |
| **P1 — Consumer outage** | A downstream repo (`noorinalabs-isnad-graph`, `noorinalabs-landing-page`) cannot install or build because of this package. | Architect (Keanu Tama). | Manager (Maeve Callahan) immediately; coordinate with the affected repo's manager (Bereket Tadesse for landing-page deploy issues, isnad-graph manager for frontend issues). |
| **P0 — Bad version published** | A broken `@noorinalabs/design-system` version is live and being installed. | Architect (Keanu Tama) — execute §3 (rollback). | Manager (Maeve Callahan); notify Program Director (Nadia Khoury) given cross-repo blast radius. |

### 5.2 Out-of-scope events (do not page)

- GitHub Pages outages affecting Storybook viewing (Storybook deploy is `if: false` anyway).
- npm public-registry outages (we don't publish there).
- Consumer-repo CI failures that are not caused by this package (verify by reproducing the consumer install in a clean directory before escalating here).

### 5.3 Coordination notes

- Cross-repo design tokens and accessibility are a shared concern of Architect (Keanu Tama), Manager (Maeve Callahan), and UX Lead (Beren Yildiz). Loop in Beren on any token-shape decision made under incident pressure.
- Visual-regression concerns route through QA Engineer (Luciana Ferreyra).
- Accessibility regressions route through Accessibility Engineer (Nhan Pham).

---

## 6. Maintenance

Keep this runbook current when:

- A workflow file under `.github/workflows/` changes meaningfully (new gate, changed trigger, deploy enable).
- The publish target changes (e.g. moving off GitHub Packages).
- A new common failure mode is observed in production — add it to §4 with the symptom and the actual fix used.
- The team roster changes (escalation table in §5).

Out-of-scope updates that do **not** require a runbook change: token additions, new component variants, story authoring, day-to-day component refactors.
