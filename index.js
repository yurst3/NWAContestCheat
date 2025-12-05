import { chromium } from 'playwright';
import cliProgress from 'cli-progress';

(async () => {
  const browser = await chromium.launch({
    headless: false
  });

  const numBallots = process.argv[2];
  const progressBar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

  progressBar.start(numBallots, 0);

  for (let i = 0; i < numBallots; i++) {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.votebestnwa.com/');

    await page.getByText("Health & Beauty").click();
    await page.getByText("Doctor").click();
    await page.getByText("Blake Hansen, DO - Simplified Health").click();
    await page.getByText("Vote in another Health & Beauty ").click();
    await page.getByText("Medical Facility").click();
    await page.getByText("Simplified Health").click();
    await page.getByText("Review and cast my ballot").click();
    await page.getByText("Submit Ballot").click();
    await page.getByText("Done").click();

    await page.close();
    await context.close();

    progressBar.increment();
  }

  progressBar.stop();
  await browser.close();
})();