import { test, expect } from "@playwright/test";

const localhost = "http://localhost:3000";

test("simple api endpoint", async ({ request }) => {
  const response = await request.get(`${localhost}/api/hello`);
  expect(response.ok()).toBeTruthy();

  const responseBody = await response.json();
  expect(responseBody).toHaveProperty("text", "Hello");
});
