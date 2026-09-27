// Run after deployment: node test/publications.cjs
const assert = require("node:assert/strict");
const { chromium } = require("playwright");

async function main() {
  const browser = await chromium.launch({ channel: "chrome" });
  try {
    const page = await browser.newPage();
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    for (const width of [1280, 390]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto("https://jojo0217.github.io/");
      assert.equal(await page.locator(".news-item").count(), 4);
      assert.equal(await page.locator(".news-item .date").first().textContent(), "Sep 25, 2026");
      assert.match(await page.locator(".news-item").first().innerText(), /Our papers Generative Recursive Reasoning and BabyTheorist: .* are accepted to NeurIPS 2026!/);
      assert.equal(await page.locator(".publication").count(), 2);
      assert.equal(await page.locator(".publication").filter({ hasText: "BabyTheorist" }).count(), 0);

      for (const path of ["", "publications.html"]) {
        if (path) await page.goto(`https://jojo0217.github.io/${path}`);
        const grr = page.locator(".publication").filter({ hasText: "Generative Recursive Reasoning" });
        assert.equal(await grr.locator(".authors + .meta").textContent(), "* Equal contribution");
        assert.equal(await grr.locator(".meta + .venue").textContent(), "Advances in Neural Information Processing Systems (NeurIPS), 2026");
        assert.equal(await grr.locator(".authors .me").textContent(), "Mingyu Jo");
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
        if (process.env.SCREENSHOT_DIR) {
          await page.screenshot({ path: `${process.env.SCREENSHOT_DIR}/${path ? "publications" : "home"}-${width}.png`, fullPage: true });
        }
      }

      const titles = await page.locator(".publication h2").allTextContents();
      assert.equal(titles.length, 3);
      assert.match(titles[1], /^BabyTheorist:/);
      assert.match(titles[2], /^Loopholing Discrete Diffusion:/);
      const baby = page.locator(".publication").filter({ hasText: "BabyTheorist" });
      assert.equal(await baby.locator("a").count(), 0);
      assert.equal(await baby.locator(".authors .me").textContent(), "Mingyu Jo");
    }
    assert.deepEqual(errors, []);
    console.log("Desktop and mobile: news, publication order, author notes, links, and layout passed.");
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
