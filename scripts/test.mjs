import fs from 'node:fs/promises';
const files = (await fs.readdir(new URL('../tests/', import.meta.url))).filter((file) => file.endsWith('.test.js')).sort();
for (const file of files) { const test = await import(new URL(`../tests/${file}`, import.meta.url)); await test.default(); }
console.log(`${files.length} test modules passed`);
