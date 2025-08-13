import { test, expect } from '@playwright/test';

test('navigation works', async ({ page }) => {
  await page.goto('/');
  await page.click('text=Projects');
  await expect(page).toHaveURL(/projects/);
});

test('command palette opens', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Meta+K');
  await expect(page.locator('[placeholder="Search..."]')).toBeVisible();
});

test('mdx renders', async ({ page }) => {
  await page.goto('/projects');
  await page.click('text=Kubernetes-Based Cloud Cluster');
  await expect(page.locator('h1')).toContainText('Kubernetes-Based Cloud Cluster');
});
