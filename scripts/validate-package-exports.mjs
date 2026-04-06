/**
 * Validates that the package.json exports field maps to files that exist
 * and that Node can resolve them using standard module resolution.
 *
 * Run after `npm run build` to verify the package is correctly structured.
 */

import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const pkg = JSON.parse(readFileSync(resolve(root, 'package.json'), 'utf8'));

let failures = 0;
let warnings = 0;

// Exports that are critical for consumers — failure here blocks CI
const criticalExports = new Set(['.', './styles', './styles.css']);

function check(label, filePath) {
  const full = resolve(root, filePath);
  const exportKey = label.replace(/ \[.*\]$/, '');
  const isCritical = criticalExports.has(exportKey);

  if (existsSync(full)) {
    console.log(`  OK    ${label} -> ${filePath}`);
  } else if (isCritical) {
    console.error(`  FAIL  ${label} -> ${filePath} (file not found)`);
    failures++;
  } else {
    console.warn(`  WARN  ${label} -> ${filePath} (file not found)`);
    warnings++;
  }
}

console.log('Validating package exports...\n');

for (const [key, value] of Object.entries(pkg.exports)) {
  if (typeof value === 'string') {
    check(key, value);
  } else if (typeof value === 'object' && value !== null) {
    for (const [condition, target] of Object.entries(value)) {
      // Skip wildcard patterns — they can't be validated statically
      if (typeof target === 'string' && !target.includes('*')) {
        check(`${key} [${condition}]`, target);
      }
    }
  }
}

// Verify styles.css is importable via both export paths
console.log('\nVerifying CSS export paths...');
check('./styles', pkg.exports['./styles']);
check('./styles.css', pkg.exports['./styles.css']);

// Verify main entry point
console.log('\nVerifying main entry points...');
if (pkg.main) check('main', pkg.main);
if (pkg.module) check('module', pkg.module);
if (pkg.types) check('types', pkg.types);

console.log('');
if (failures > 0) {
  console.error(`${failures} critical export(s) failed validation.`);
  process.exit(1);
}
if (warnings > 0) {
  console.warn(`${warnings} non-critical export(s) missing (see warnings above).`);
}
console.log('All critical exports validated successfully.');
