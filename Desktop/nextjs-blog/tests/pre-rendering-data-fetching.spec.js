import { test, expect } from "@playwright/test";

const localhost = "http://localhost:3000";

test("Home page has blogs list", async ({ page }) => {
  await page.goto(localhost);
  await expect(page.getByRole("list")).not.toBeEmpty();
});

test("blogs have correct info", async ({ page }) => {
  await page.goto(localhost);
  await expect(page.locator("ul>li")).toContainText([
    "When to Use Static Generation v.s. Server-side Rendering",
    "Two Forms of Pre-rendering",
  ]);
});
