import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const ROOT = process.cwd();
const OUTPUT_PATH = resolve(ROOT, 'assets/sitemap.xml');
const STATE_PATH = resolve(ROOT, 'assets/.sitemap-state.json');
const DEFAULT_SITE_URL = 'https://www.eloantourtelier.com';
const siteUrl = (process.env.SITE_URL || DEFAULT_SITE_URL).replace(/\/+$/, '');

const pages = [
  {
    path: '/',
    changefreq: 'weekly',
    priority: '1.0',
    files: ['index.html', 'src/home/HomeView.vue', 'src/home/home.css'],
  },
  {
    path: '/focustrain/',
    changefreq: 'monthly',
    priority: '0.6',
    files: ['src/focustrain/TermsView.vue', 'src/focustrain/focustrain.css'],
  },
  {
    path: '/notebook/',
    changefreq: 'monthly',
    priority: '0.5',
    files: ['src/notebook/NotebookView.vue', 'src/notebook/notebook.css'],
  },
];

function escapeXml(text) {
  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function toIsoDate(date) {
  return date.toISOString().slice(0, 10);
}

function getPageSignature(files) {
  const hash = createHash('sha256');

  for (const filePath of files) {
    const absolutePath = resolve(ROOT, filePath);
    hash.update(filePath);
    hash.update('\n');
    hash.update(readFileSync(absolutePath));
    hash.update('\n');
  }

  return hash.digest('hex');
}

function loadState() {
  if (!existsSync(STATE_PATH)) {
    return {};
  }

  try {
    return JSON.parse(readFileSync(STATE_PATH, 'utf8'));
  } catch {
    return {};
  }
}

function buildSitemapXml(pageEntries) {
  const urls = pages
    .map((page) => {
      const entry = pageEntries[page.path];
      const loc = `${siteUrl}${page.path}`;

      return [
        '  <url>',
        `    <loc>${escapeXml(loc)}</loc>`,
        `    <lastmod>${entry.lastmod}</lastmod>`,
        `    <changefreq>${page.changefreq}</changefreq>`,
        `    <priority>${page.priority}</priority>`,
        '  </url>',
      ].join('\n');
    })
    .join('\n');

  return ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">', urls, '</urlset>', ''].join('\n');
}

const previousState = loadState();
const today = toIsoDate(new Date());
const nextState = {};

for (const page of pages) {
  const signature = getPageSignature(page.files);
  const previousEntry = previousState[page.path];
  const lastmod = previousEntry && previousEntry.signature === signature ? previousEntry.lastmod : today;

  nextState[page.path] = { signature, lastmod };
}

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, buildSitemapXml(nextState), 'utf8');
writeFileSync(STATE_PATH, `${JSON.stringify(nextState, null, 2)}\n`, 'utf8');

const checksum = readFileSync(OUTPUT_PATH, 'utf8').length;
console.log(`Generated sitemap at ${OUTPUT_PATH} (${checksum} bytes)`);
