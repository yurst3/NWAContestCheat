## NWAContestCheat

This repo has a script to help boost the number of ballots cast for Blake Hansen and Simplified Health in the "Best of Northwest Arkansas" contest.

To use the script run `npm run stuff-ballots X` where X is the number of ballots to cast for Blake and Simplified Health.

This script utilizes Playwright and a Chromium browser to automate navigation and clicking buttons. The contest doesn't require any verfication to cast a ballot but it does record your IP address with each ballot cast. It blocked me after using the script to send in 250ish ballots, but changing your IP address or location seems to reset this block.

If you would like the browser automation to run in "headless mode" (IE, without actually opening a Chrome window), change the "headless" launch setting in `index.js`:

```
const browser = await chromium.launch({
    headless: false
});
```

# Instructions for Megan

Go to the “Launchpad”, search for “Terminal” and open it. Then copy and paste the following commands into the console, pressing “enter” after each one. 

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)”
```

This will download and install the “Homebrew” package manager. You’ll probably never use this again, it’s just so you can install “git” and “node” in the next steps.

```
brew install git
```

This will download and install “git” (along with a bunch of other dependencies), a tool that you’ll need to download and run my code

```
brew install node
```

This will download and install “node” (along with a bunch of other dependencies), which you will need to run the code

```
cd ~/Desktop
```

This changes the working directory to your Desktop, so when you download the code it will be located in a folder on your Desktop

```
git clone https://github.com/yurst3/NWAContestCheat.git
```

This will download the code I wrote from my GitHub repository. It will be in a folder called NWAContestCheat

```
cd NWAContestCheat
```

This changes the working directory to the NWAContestCheat folder, so you can run the code

```
npm install
```

This will download all of the required dependencies to run the code

```
npm run stuff-ballots 50
```

This will run the script to cast 50 ballots for Blake. You can change the “50” to whatever number you’d like and it will cast that many ballots. The terminal will show a progress bar to let you know how many ballots are left