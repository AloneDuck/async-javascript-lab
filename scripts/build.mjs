import fs from 'node:fs/promises';
async function copyDirectory(source, target) {
  await fs.mkdir(target, { recursive: true });
  for (const entry of await fs.readdir(source, { withFileTypes: true })) {
    const from = new URL(entry.name + (entry.isDirectory() ? '/' : ''), source);
    const to = new URL(entry.name + (entry.isDirectory() ? '/' : ''), target);
    if (entry.isDirectory()) await copyDirectory(from, to); else await fs.copyFile(from, to);
  }
}
await fs.mkdir(new URL('../dist/', import.meta.url), { recursive: true });
for (const file of ['index.html', 'styles.css']) await fs.copyFile(new URL(`../${file}`, import.meta.url), new URL(`../dist/${file}`, import.meta.url));
await copyDirectory(new URL('../src/', import.meta.url), new URL('../dist/src/', import.meta.url));
await import(new URL('../src/index.js', import.meta.url));
console.log('browser bundle validated');
