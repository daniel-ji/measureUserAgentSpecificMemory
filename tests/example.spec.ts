import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173');
  expect(await page.title()).toBe('Vite + TS');
  await page.evaluate("performance.measureUserAgentSpecificMemory()");
});
