import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
import { execSync } from 'node:child_process';

const BASE = 'http://localhost:3001';
const EMAIL = 'docs-screenshots@gearflow-test.local';
const PASSWORD = 'gearflow2026!';
const OUT = '/home/jayden/.hermes/kanban/workspaces/t_1d2c3dd5/gearflow-docs/static/img/screenshots';

mkdirSync(OUT, { recursive: true });

const results = [];

async function shot(page, name) {
  const file = `${OUT}/${name}.png`;
  await page.screenshot({ path: file, fullPage: false });
  results.push({ name, ok: true, file });
  console.log(`✓ captured ${name}.png`);
}

async function settle(page) {
  try {
    await page.waitForLoadState('networkidle', { timeout: 15000 });
  } catch {
    await page.waitForLoadState('domcontentloaded');
  }
}

// Authenticate via curl and extract cookies
console.log('Authenticating via curl...');
const raw = execSync(
  `curl -s -D - -X POST ${BASE}/api/auth/sign-in/email -H "Content-Type: application/json" -d '${JSON.stringify({ email: EMAIL, password: PASSWORD })}'`,
  { encoding: 'utf-8', maxBuffer: 1024 * 1024 }
);

// Parse Set-Cookie headers
const cookieHeaders = [];
for (const line of raw.split('\r\n')) {
  if (line.toLowerCase().startsWith('set-cookie:')) {
    cookieHeaders.push(line.substring('set-cookie:'.length).trim());
  }
}
console.log(`Found ${cookieHeaders.length} Set-Cookie headers`);

// Parse cookies into Playwright format
const playwrightCookies = [];
for (const c of cookieHeaders) {
  const semiParts = c.split(';');
  const [name, value] = semiParts[0].split('=');
  if (!name || value === undefined) continue;
  const rest = semiParts.slice(1).map(s => s.trim().toLowerCase());
  playwrightCookies.push({
    name: name.trim(),
    value: value.trim(),
    domain: 'localhost',
    path: '/',
    httpOnly: rest.includes('httponly'),
    secure: rest.includes('secure'),
    sameSite: (rest.find(s => s.startsWith('samesite='))?.split('=')[1] || 'Lax').replace(/^./, c => c.toUpperCase()),
  });
}
console.log(`Parsed ${playwrightCookies.length} cookies`);

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
await context.addCookies(playwrightCookies);
console.log(`Set ${playwrightCookies.length} cookies in browser context`);

const page = await context.newPage();

try {
  // 1. Login page screenshot
  await page.goto(`${BASE}/login`, { waitUntil: 'domcontentloaded' });
  await settle(page);
  await shot(page, 'login');

  // 2. Dashboard (already authenticated via cookies)
  await page.goto(`${BASE}/dashboard`, { waitUntil: 'domcontentloaded' });
  await settle(page);
  const dashUrl = page.url();
  console.log(`Dashboard URL: ${dashUrl}`);
  if (dashUrl.includes('/login')) {
    console.log('Auth failed — redirected to login');
    // Try one more time via form
    await page.fill('#email', EMAIL);
    await page.getByRole('button', { name: /continue/i }).click();
    await page.waitForTimeout(2000);
    await page.fill('input[type="password"]', PASSWORD);
    await page.locator('button[type="submit"]').click();
    await page.waitForTimeout(5000);
    console.log(`After form retry URL: ${page.url()}`);
  }
  await shot(page, 'dashboard');

  // 3-5. Authenticated pages
  for (const [path, name] of [
    ['/inventory', 'inventory'],
    ['/projects', 'projects'],
    ['/warehouse', 'warehouse'],
  ]) {
    try {
      await page.goto(`${BASE}${path}`, { waitUntil: 'domcontentloaded' });
      await settle(page);
      const url = page.url();
      if (url.includes('/login')) {
        results.push({ name, ok: false, error: 'redirected to login' });
        console.log(`✗ failed ${name}: redirected to login`);
      } else {
        await shot(page, name);
      }
    } catch (e) {
      results.push({ name, ok: false, error: String(e).split('\n')[0] });
      console.log(`✗ failed ${name}: ${String(e).split('\n')[0]}`);
    }
  }
} catch (e) {
  console.error('FATAL during flow:', e);
  try { await page.screenshot({ path: `${OUT}/error-state.png` }); console.log('Saved error-state.png'); } catch {}
  console.log('Current URL at failure:', page.url());
} finally {
  console.log('\n--- SUMMARY ---');
  console.log(JSON.stringify(results, null, 2));
  await browser.close();
}
