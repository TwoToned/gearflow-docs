import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const BASE = 'http://localhost:3001';
const EMAIL = 'docs@gearflow-test.local';
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
    // networkidle can hang on apps with persistent connections; fall back
    await page.waitForLoadState('domcontentloaded');
  }
}

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
const page = await context.newPage();

// Log auth-related responses for diagnostics
page.on('response', (r) => {
  const u = r.url();
  if (/sign-in|signin|auth|login/i.test(u)) {
    console.log(`  [net] ${r.status()} ${r.request().method()} ${u}`);
  }
});

try {
  // 1. Login page (before typing)
  await page.goto(`${BASE}/login`, { waitUntil: 'domcontentloaded' });
  await settle(page);
  await shot(page, 'login');

  // Email-first Better Auth flow: type email -> Continue
  await page.fill('#email', EMAIL);
  await page.getByRole('button', { name: /continue/i }).click();

  // Wait for password field to appear
  await page.waitForSelector('input[type="password"]', { timeout: 15000 });
  await page.fill('input[type="password"]', PASSWORD);

  // Click the password-submit "Sign in" button (exclude "Sign in with Passkey")
  const signIn = page.locator('button[type="submit"]', { hasText: /^sign in$/i });
  await signIn.click();

  // 2. Wait for redirect away from /login (SPA client-side nav -> poll the URL)
  const deadline = Date.now() + 25000;
  while (Date.now() < deadline) {
    if (!new URL(page.url()).pathname.includes('/login')) break;
    // Surface any inline auth error if one appears
    const err = await page.locator('[role="alert"], [data-slot="form-message"], .text-destructive')
      .first().textContent().catch(() => null);
    if (err && err.trim()) console.log(`  [auth error text] ${err.trim()}`);
    await page.waitForTimeout(500);
  }
  if (new URL(page.url()).pathname.includes('/login')) {
    throw new Error('Still on /login after sign-in attempt (no redirect)');
  }
  await settle(page);
  await shot(page, 'dashboard');

  console.log(`Logged in. Landed at: ${page.url()}`);

  // 3-5. Authenticated pages
  for (const [path, name] of [
    ['/inventory', 'inventory'],
    ['/projects', 'projects'],
    ['/warehouse', 'warehouse'],
  ]) {
    try {
      await page.goto(`${BASE}${path}`, { waitUntil: 'domcontentloaded' });
      await settle(page);
      await shot(page, name);
    } catch (e) {
      results.push({ name, ok: false, error: String(e).split('\n')[0] });
      console.log(`✗ failed ${name}: ${String(e).split('\n')[0]}`);
    }
  }
} catch (e) {
  console.error('FATAL during flow:', e);
  // Capture whatever is on screen for debugging
  try { await page.screenshot({ path: `${OUT}/error-state.png` }); console.log('Saved error-state.png'); } catch {}
  console.log('Current URL at failure:', page.url());
} finally {
  console.log('\n--- SUMMARY ---');
  console.log(JSON.stringify(results, null, 2));
  await browser.close();
}
