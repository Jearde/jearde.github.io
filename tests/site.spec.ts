import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const projects = ["NexuML", "NexuFL", "pFedMARL", "ASN Database"];
const anchors = [
  "top",
  "about",
  "practice",
  "work",
  "research",
  "community",
  "contact",
  "imprint",
  "privacy",
];

test("exports the complete static narrative", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("h1")).toHaveCount(1);
  await expect(page.locator("h1")).toContainText("Nerd with a");
  await expect(page.getByText("Researcher. Builder. Founder.")).toBeVisible();
  await expect(page.getByText("Ruhr University Bochum")).toBeVisible();
  await expect(
    page.getByText("Kubernetes-based AI-training clusters"),
  ).toBeVisible();
  await expect(page.getByText("Practical Data Science Congress")).toBeVisible();
  await expect(
    page.getByRole("link", { name: "VDE Rhein-Ruhr e.V." }),
  ).toHaveAttribute("href", "https://www.vde-rhein-ruhr.de/youngnet");
  await expect(page.locator(".off-hours li")).toHaveText([
    "Espresso",
    "Sailing",
    "Open-source smart home",
  ]);
  await expect(
    page.locator('#imprint a[href="mailto:rene.glitza@nexufed.ai"]'),
  ).toHaveText("rene.glitza@nexufed.ai");
  await expect(page.locator('#imprint a[href="tel:+492343218591"]')).toHaveText(
    "+49 234 32 18591",
  );

  for (const project of projects)
    await expect(page.getByRole("heading", { name: project })).toBeAttached();
  for (const anchor of anchors)
    await expect(page.locator(`#${anchor}`)).toHaveCount(1);
});

test("works without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:4173/#imprint");

  await expect(page.locator("main")).toContainText("NexuML");
  await expect(page.getByText("Portrait asset required")).toBeVisible();
  await page.locator("#imprint summary").focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("#imprint")).toContainText("René Glitza");
  await expect(page.locator("#imprint")).toContainText("c/o Auto-Intern GmbH");
  await expect(page.locator("#imprint")).toContainText("Herner Str. 299");
  await page.locator("#privacy summary").focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("#privacy")).toContainText("GitHub Pages");
  await expect(page.locator("#privacy")).toContainText("Article 6(1)(f) GDPR");

  await context.close();
});

test("supports keyboard navigation and project focus", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to main content" }),
  ).toBeFocused();
  const outline = await page
    .getByRole("link", { name: "Skip to main content" })
    .evaluate((element) => getComputedStyle(element).outlineStyle);
  expect(outline).not.toBe("none");

  const projectLink = page.getByRole("link", {
    name: "Explore NexuML on GitHub",
  });
  await projectLink.focus();
  await expect(page.locator("canvas")).toHaveAttribute(
    "data-active-project",
    "nexuml",
  );
  await page.getByRole("link", { name: "Explore pFedMARL on GitHub" }).focus();
  await expect(page.locator("canvas")).toHaveAttribute(
    "data-active-project",
    "pfedmarl",
  );

  await page.getByText("Privacy", { exact: true }).click();
  await expect(page.locator("#privacy")).toHaveAttribute("open", "");
});

test("moves through four discrete canvas states", async ({ page }) => {
  await page.goto("/");
  const canvas = page.locator("canvas");
  await expect(canvas).toHaveAttribute("data-render-state", "independent");

  await page.locator("#about").scrollIntoViewIfNeeded();
  await expect(canvas).toHaveAttribute("data-render-state", "clustered");
  await page.locator("#work").scrollIntoViewIfNeeded();
  await expect(page.locator('a[href="#work"]')).toHaveAttribute(
    "aria-current",
    "location",
  );
  await expect(canvas).toHaveAttribute("data-render-state", "connected");
  await page.locator("#community").scrollIntoViewIfNeeded();
  await expect(canvas).toHaveAttribute("data-render-state", "expanded");

  await page.goto("/#work");
  await expect(page.locator('a[href="#work"]')).toHaveAttribute(
    "aria-current",
    "location",
  );
});

test("responds live to reduced motion and pauses while hidden", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const canvas = page.locator("canvas");
  await expect(canvas).toHaveAttribute("data-motion", "reduced");
  expect(
    await page
      .locator("html")
      .evaluate((element) => getComputedStyle(element).scrollBehavior),
  ).toBe("auto");

  const reducedFrame = Number(await canvas.getAttribute("data-frame-count"));
  await page.getByRole("link", { name: "Explore NexuML on GitHub" }).focus();
  await expect(canvas).toHaveAttribute("data-active-project", "nexuml");
  await expect
    .poll(async () => Number(await canvas.getAttribute("data-frame-count")))
    .toBeGreaterThan(reducedFrame);

  await page.emulateMedia({ reducedMotion: "no-preference" });
  await expect(canvas).toHaveAttribute("data-motion", "animated");

  await page.evaluate(() => {
    Object.defineProperty(document, "hidden", {
      configurable: true,
      get: () => true,
    });
    document.dispatchEvent(new Event("visibilitychange"));
  });
  const pausedAt = Number(await canvas.getAttribute("data-frame-count"));
  await page.waitForTimeout(150);
  expect(Number(await canvas.getAttribute("data-frame-count"))).toBe(pausedAt);
  await page.evaluate(() => {
    Object.defineProperty(document, "hidden", {
      configurable: true,
      get: () => false,
    });
    document.dispatchEvent(new Event("visibilitychange"));
  });
  await expect
    .poll(async () => Number(await canvas.getAttribute("data-frame-count")))
    .toBeGreaterThan(pausedAt);
});

test("keeps the mobile experience complete and bounded", async ({
  browser,
}) => {
  const context = await browser.newContext({
    viewport: { width: 320, height: 720 },
    deviceScaleFactor: 3,
    hasTouch: true,
    isMobile: true,
  });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:4173");

  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  await expect(page.locator("canvas")).toHaveAttribute("data-node-count", "32");
  expect(
    Number(await page.locator("canvas").getAttribute("data-buffer-pixels")),
  ).toBeLessThanOrEqual(4_000_000);
  await expect(page.locator(".project-index h3")).toHaveText(projects);

  for (const viewport of [
    { width: 768, height: 1024 },
    { width: 1024, height: 768 },
  ]) {
    await page.setViewportSize(viewport);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    expect(
      Number(await page.locator("canvas").getAttribute("data-buffer-pixels")),
    ).toBeLessThanOrEqual(4_000_000);
  }

  await context.close();
});

test("has no serious accessibility issues or passive third-party requests", async ({
  page,
  context,
}) => {
  const failures: string[] = [];
  const origins = new Set<string>();
  page.on("pageerror", (error) => failures.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") failures.push(message.text());
  });
  page.on("request", (request) => origins.add(new URL(request.url()).origin));

  await page.goto("/");
  await page.waitForLoadState("networkidle");
  const results = await new AxeBuilder({ page }).analyze();
  expect(
    results.violations.filter((violation) =>
      ["serious", "critical"].includes(violation.impact ?? ""),
    ),
  ).toEqual([]);
  expect([...origins]).toEqual(["http://127.0.0.1:4173"]);
  expect(await context.cookies()).toEqual([]);
  expect(await page.evaluate(() => localStorage.length)).toBe(0);
  expect(failures).toEqual([]);
});
