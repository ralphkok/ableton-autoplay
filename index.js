require('dotenv').config({path: '.env'});
const fse = require('fs-extra');
const open = require('open');
const robot = require("robotjs");
const Logger = require('./utils/Logger');

const playAbletonDelayed = delay => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      Logger.log('Hitting space bar');
      robot.keyTap("space");
      resolve();
    }, delay)
  })
);

// cleanup on exit
const quit = () => {
  process.exit(0);
}

(async () => {
  const {
    REMOVE_RECOVERY_FILES,
    ABLETON_RECOVERY_FILES,
    ABLETON_PROJECT_FILE,
    ABLETON_PLAY_DELAY,
  } = process.env;

  // remove recovery files before opening Ableton 
  if (REMOVE_RECOVERY_FILES === 'true') {
    Logger.log(`Removing Ableton recovery files from "${ABLETON_RECOVERY_FILES}"`);
    await fse.remove(ABLETON_RECOVERY_FILES);
  }
  else {
    Logger.log(`Skipping removal of recovery files`);
  }

  // open Ableton project
  Logger.log(`Opening Ableton project from "${ABLETON_PROJECT_FILE}"`);
  await open(ABLETON_PROJECT_FILE);

  // wait for a certain amount of time before sending OSC to Ableton
  await playAbletonDelayed(Number.parseInt(ABLETON_PLAY_DELAY * 1000));

  quit();

})();
