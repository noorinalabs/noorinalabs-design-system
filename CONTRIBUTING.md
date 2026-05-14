# Contributing to `@noorinalabs/design-system`

## Versioning convention

This package follows [Semantic Versioning](https://semver.org/):

- **PATCH** (`0.0.X`): bug fixes, internal refactors, dependency bumps that do not change the public API.
- **MINOR** (`0.X.0`): new components, tokens, icons, or props added in a backward-compatible way.
- **MAJOR** (`X.0.0`): breaking changes — renamed/removed components, changed prop signatures, or token contract changes.

While the package is at `0.x.x`, MINOR bumps may include narrow breaking changes per SemVer 0.x conventions; document any such break in the PR description and the changelog entry.

### When to bump

Every PR that changes runtime behavior, exported API, or published assets MUST bump the version in `package.json` as part of the PR. Reviewers should reject PRs that change behavior without a version bump.

PRs that touch only the following do NOT require a version bump:

- Tests (`*.test.{ts,tsx}`, `*.spec.{ts,tsx}`)
- Storybook stories (`*.stories.{ts,tsx,mdx}`)
- Documentation (`README.md`, `docs/**`, this file)
- CI/workflow configuration (`.github/**`)
- Internal tooling (`scripts/**`, `.eslintrc`, `prettier.config.*`)

### Publish trigger

`@noorinalabs/design-system` publishes to the GitHub Packages npm registry via `.github/workflows/publish.yml`. The workflow fires on:

1. **Push to `main`** — auto-publishes whatever version is in `package.json`. If the version already exists on the registry, the publish step is skipped (no failure). This means a merge to `main` without a version bump is a no-op publish, by design.
2. **Push to `deployments/**`** (wave branches) — publishes wave pre-releases for cross-repo consumers. See "Wave-branch pre-releases" below.
3. **Tag push matching `v*`** (e.g., `git tag v0.0.4 && git push --tags`) — same publish path, marked semantically as a release.
4. **Release published** — kept for backward compatibility with the original tag-and-release flow.

For most PRs the push-to-main trigger is sufficient. Use tagged releases for milestones that consumers should pin against.

### Wave-branch pre-releases

Cross-repo wave work (Phase 3 wave-10 and forward) sometimes needs consumers in sibling repos to depend on an unreleased design-system change before the wave branch merges to `main`. To support that, wave branches under `deployments/**` are allowed to publish **pre-release** semver versions to GitHub Packages.

**Pre-release version format:** `<X.Y.Z>-wave<N>.<patch>` where:

- `<X.Y.Z>` is the SemVer base — the version that will become canonical once this wave merges to `main`.
- `<N>` is the wave number (e.g., `10` for `deployments/phase-3/wave-10`).
- `<patch>` increments per re-cut on the same wave branch, starting at `0` (e.g., `0.0.3-wave10.0`, `0.0.3-wave10.1` if a follow-up fix is required mid-wave).

**Rules:**

- The main-branch publish remains the **canonical release**. Pre-releases are time-bounded by their wave's lifespan and exist to unblock cross-repo integration during the wave, not to ship to end users.
- Consumers depending on a wave pre-release MUST pin the exact version (e.g., `"@noorinalabs/design-system": "0.0.3-wave10.0"`) — SemVer range matchers do not auto-include pre-release versions, which is the desired behavior here.
- When the wave branch merges to `main`, bump the version in the merge to the canonical `<X.Y.Z>` (drop the `-wave<N>.<patch>` suffix) and let the main-branch publish trigger ship the canonical release. Consumers should then move their pin to the canonical version in a follow-up PR.
- A wave branch may publish multiple `<patch>` increments during its lifespan; each must bump the suffix patch number to avoid registry collision (the `npm view` guard would otherwise skip the re-publish).

## Consumer migration

Consumers install this package from GitHub Packages. They need:

1. `.npmrc` at the repo root containing:
   ```
   @noorinalabs:registry=https://npm.pkg.github.com
   ```
2. A `NODE_AUTH_TOKEN` environment variable with at least `read:packages` scope during `npm ci`. In CI this can be `${{ secrets.GITHUB_TOKEN }}` if the workflow has `packages: read` permission.
3. In Dockerfiles, pass the token via `--build-arg` from the CI workflow and set it as `NODE_AUTH_TOKEN` for the install step.

For local development, contributors need a personal access token with `read:packages` scope in `~/.npmrc`:

```
//npm.pkg.github.com/:_authToken=ghp_xxx
```

## Pull request workflow

Follow the noorinalabs charter conventions:

- Feature branches named `{FirstInitial}.{LastName}/{IIII}-{slug}`
- Two reviewers per PR (Approved verdict required)
- No `--no-verify` on commits
- Commit identity via per-commit `-c` flags (`git -c user.name="..." -c user.email="parametrization+First.Last@gmail.com" commit -F /tmp/<file>.md`)
