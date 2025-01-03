import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await page.waitForTimeout(2000);
  // to show page.evaluate console output to terminal
	page.on('console', msg => {
		console.log(msg.text())
	});
  expect(await page.title()).toBe('Vite + TS');
  await page.evaluate(async () => {
    const memory = await performance.measureUserAgentSpecificMemory();
    console.log(`Memory: ${memory.bytes} bytes`);
  })
});
