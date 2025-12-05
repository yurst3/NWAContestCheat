This repo has a script to help boost the number of ballots cast for Blake Hansen and Simplified Health in the "Best of Northwest Arkansas" contest.

To use the script run `npm run stuff-ballots X` where X is the number of ballots to cast for Blake and Simplified Health.

This script utilizes Playwright and a Chromium browser to automate navigation and clicking buttons. The contest doesn't require any verfication to cast a ballot but it does record your IP address with each ballot cast. It blocked me after using the script to send in 250ish ballots, but changing your IP address or location seems to reset this block.

If you would like the browser automation to run in "headless mode" (IE, without actually opening a Chrome window), change the "headless" launch setting in `index.js`:

```
const browser = await chromium.launch({
    headless: false
});
```