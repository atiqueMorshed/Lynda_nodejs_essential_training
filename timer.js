const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;

console.log(`Setting a timer for ${waitTime / 1000} seconds`);

const incTime = () => {
  currentTime += waitInterval;
  const p = Math.floor((currentTime / waitTime) * 100);
  process.stdout.clearLine(); //Clears previous lines in terminal
  process.stdout.cursorTo(0); // Moves cursor to 0 (start)
  process.stdout.write(`waiting ... ${p}%`);
}

const onTimerFinish = () => {
  process.stdout.clearLine(); //Clears previous lines in terminal
  process.stdout.cursorTo(0); // Moves cursor to 0 (start)
  console.log("Done");
  clearInterval(interval); // Clears the interval
}

const interval = setInterval(incTime, waitInterval); // waits "waitInterval" seconds and executes "incTime" function and keeps doing that again and again
setTimeout(onTimerFinish, waitTime);  // Waits "waitTime" seconds and executes "onTimerFinish" function
