// Run after deployment: node test/cv.cjs
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
      await page.goto("https://jojo0217.github.io/cv.html");
      const open = page.getByRole("link", { name: "PDF", exact: true });
      assert.equal(await open.getAttribute("target"), "_blank");
      assert.equal(await open.getAttribute("href"), "assets/files/Mingyu_Jo_CV.pdf");
      assert.equal(await page.getByRole("link", { name: "Download", exact: true }).count(), 0);
      const pdf = await page.request.get(new URL(await open.getAttribute("href"), page.url()).href);
      assert.equal(pdf.status(), 200);
      assert.match(pdf.headers()["content-type"], /application\/pdf/);
      assert.equal((await pdf.body()).subarray(0, 5).toString(), "%PDF-");
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
      if (process.env.SCREENSHOT_DIR) {
        await page.screenshot({ path: `${process.env.SCREENSHOT_DIR}/cv-${width}.png`, fullPage: true });
      }
    }
    assert.deepEqual(errors, []);
    console.log("CV PDF response, single PDF action, and desktop/mobile layout passed.");
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
