// Copies the DS files into public/files so the site can offer them as downloads,
// and llms.txt to the site root for AI tools. Runs before dev and build.
import { cpSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const root = new URL('../../', import.meta.url);
const pub = new URL('../public/', import.meta.url);
mkdirSync(new URL('files/', pub), { recursive: true });

const files = {
  'tailwind/theme.css': 'files/theme.css',
  'tailwind/theme.min.css': 'files/theme.min.css',
  'css/styles.css': 'files/styles.css',
  'css/styles.min.css': 'files/styles.min.css',
  'tokens/tokens.json': 'files/tokens.json',
};
for (const [from, to] of Object.entries(files)) cpSync(new URL(from, root), new URL(to, pub));

// llms.txt uses repo-relative links. On the website they must be absolute,
// so they point to the plain Markdown files on GitHub (easy for AI to read).
const RAW = 'https://raw.githubusercontent.com/josefloresdesign/space-ds/main/';
const llms = readFileSync(new URL('llms.txt', root), 'utf8')
  .replace(/\]\((?!https?:|#)([^)]+)\)/g, (_, p) => `](${RAW}${p.replace(/^\.\//, '')})`);
writeFileSync(new URL('llms.txt', pub), llms);

console.log('Copied DS files to public/');
