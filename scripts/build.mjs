import { spawnSync } from 'node:child_process';
import { join } from 'node:path';

const license = process.env.PRIMENG_LICENSE ?? '';
const result = spawnSync(
  process.execPath,
  [
    join('node_modules', '@angular', 'cli', 'bin', 'ng.js'),
    'build',
    `--define=__PRIMENG_LICENSE__=${JSON.stringify(license)}`,
  ],
  { stdio: 'inherit' },
);

if (result.error) {
  throw result.error;
}

process.exitCode = result.status ?? 1;
