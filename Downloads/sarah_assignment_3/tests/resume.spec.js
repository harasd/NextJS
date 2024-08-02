// @ts-check
const { test, expect } = require('@playwright/test');

const resumeURL = 'http://localhost:3000'; // Replace with the URL of the student's resume page

/* This test checks that the profile name (h2) is visible on the page */
test('Check Profile Name', async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator('.sidebar h2')).toBeVisible();
});

/* This test checks that the profile image is visible on the page */
test('Check Profile Image', async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator('.portrait img')).toBeVisible();
});

/* This test checks that the job title is visible on the page */
test('Check Job Title', async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator('.sidebar h3')).toBeVisible();
});

/* This test checks that the social links are visible on the page */
test('Check Social Links', async ({ page }) => {
  await page.goto(resumeURL);
  const linksCount = await page.locator('.links a').count();
  await expect(linksCount).toBeGreaterThan(0);
});

/* This test checks that the Objective section is visible on the page */
test('Check Objective Section', async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator('.sidebar-bottom h4')).toBeVisible();
});

/* This test checks that the Skills section is visible on the page */
test('Check Skills Section', async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator('.skills-section h2')).toBeVisible();
});

/* This test checks that the Experience section is visible on the page */
test('Check Experience Section', async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator('.experience-section h2')).toBeVisible();
});

/* This test checks that the Education section is visible on the page */
test('Check Education Section', async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator('.education-section h2')).toBeVisible();
});

/* This test checks that the page title is not empty */
test('Check Page Title', async ({ page }) => {
  await page.goto(resumeURL);
  const title = await page.title();
  await expect(title).not.toBe('');
});

/* This test checks that the meta description for SEO is not empty */
test('Check SEO Meta Description', async ({ page }) => {
  await page.goto(resumeURL);
  const metaDescription = await page.getAttribute('meta[name="description"]', 'content');
  await expect(metaDescription).not.toBe('');
});

/* This test checks that the meta keywords for SEO are not empty */
test('Check SEO Meta Keywords', async ({ page }) => {
  await page.goto(resumeURL);
  const metaKeywords = await page.getAttribute('meta[name="keywords"]', 'content');
  await expect(metaKeywords).not.toBe('');
});
/* This test checks that the main content area is present on the page */
test('Check Main Content Area', async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator('body > .container > .main-content')).toBeVisible();
});

/* This test checks that the sidebar area is present on the page */
test('Check Sidebar Area', async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator('body > .container > aside.sidebar')).toBeVisible();
});

/* This test checks that the tagline heading (h1) is visible on the page */
test('Check Tagline Heading', async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator('header h1')).toBeVisible();
});

/* This test checks that the skills icons are present on the page */
test('Check Skills Icons', async ({ page }) => {
  await page.goto(resumeURL);
  const skillsIconsCount = await page.locator('.skill-list li i').count();
  await expect(skillsIconsCount).toBeGreaterThan(0);
});

/* This test checks that the experience company and role are visible on the page */
test('Check Experience Role and Company', async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator('.experience-section h3')).toBeVisible();
});

/* This test checks that the experience duration is visible on the page */
test('Check Experience Duration', async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator('.experience-section h4')).toBeVisible();
});

/* This test checks that the education degree and university are visible on the page */
test('Check Education Degree and University', async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator('.education-section h3')).toBeVisible();
});

/* This test checks that the education duration is visible on the page */
test('Check Education Duration', async ({ page }) => {
  await page.goto(resumeURL);
  await expect(page.locator('.education-section h4')).toBeVisible();
});

/* This test checks that the responsive meta tag is present */
test('Check Responsive Meta Tag', async ({ page }) => {
  await page.goto(resumeURL);
  const viewportMeta = await page.getAttribute('meta[name="viewport"]', 'content');
  await expect(viewportMeta).toBe('width=device-width, initial-scale=1');
});
