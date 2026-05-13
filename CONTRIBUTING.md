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
2. **Tag push matching `v*`** (e.g., `git tag v0.0.4 && git push --tags`) — same publish path, marked semantically as a release.
3. **Release published** — kept for backward compatibility with the original tag-and-release flow.

For most PRs the push-to-main trigger is sufficient. Use tagged releases for milestones that consumers should pin against.

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
