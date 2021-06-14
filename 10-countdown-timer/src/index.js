// element selectors
const time = document.querySelector('#time');

// getting random date

// because this is a fake launch, there is no real launch date: must create a random date to use

// returns a random number between min and max, inclusive
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// returns a random future date
function randomDate() {
  // get the current date in miliseconds (since 1 Jan 1970)
  let currentDate = Date.now();
  // calculating the new Date:
  // there are 86400000 miliseconds in a day
  // multiply this * random 10 to 100 (to get the number of miliseconds representing 10 to 100 days)
  // then add to this a random number between -86400000 to 86400000, to randomly generate hours, minutes, and seconds
  let futureMS = 86400000 * randomNum(10, 100) + randomNum(-86400000, 86400000);
  // generating the new Date
  let launchDate = new Date(futureMS + currentDate);

  return launchDate;
}

// updating time

// takes an argument representing a number in miliseconds
// returns an object with the miliseconds divided into days, hours, minutes, and seconds
function parseDate(miliseconds) {
  // converting miliseconds to seconds to make math easier
  let totalSeconds = Math.floor(miliseconds / 1000);

  // there are 86400 seconds in a day,
  // 3600 seconds in an hour,
  // 60 seconds in a minute
  let days = Math.floor(totalSeconds / 86400);

  // to get total hours, must first subtract totalSeconds by (days * secondsInADay), in order to not count the seconds twice.
  // This process is repeated for all calculations below
  let hours = Math.floor((totalSeconds - days * 86400) / 3600);
  let minutes = Math.floor((totalSeconds - days * 86400 - hours * 3600) / 60);
  let seconds = Math.floor(
    totalSeconds - days * 86400 - hours * 3600 - minutes * 60
  );

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}

// parses an object containing days, hours, minutes, and seconds, into a string to display the data in human-readable format
function writeDisplay({ days, hours, minutes, seconds }) {
  let dateString = '';
  // Accounting for time less than 1 day (if day === 0): should no longer display the day counter
  if (days) {
    // Fixing grammar to account for singular/plural
    let dayStr = days === 1 ? '1 day, ' : `${days} days, `;
    dateString += dayStr;
  }

  let hourStr =
    String(hours).length < 2 ? String(hours).padStart(2, '0') : String(hours);
  let minuteStr =
    String(minutes).length < 2
      ? String(minutes).padStart(2, '0')
      : String(minutes);
  let secondStr =
    String(seconds).length < 2
      ? String(seconds).padStart(2, '0')
      : String(seconds);
  dateString += `${hourStr}:${minuteStr}:${secondStr}`;
  return dateString;
}

// the main animation loop
// calculates the amount of time left, calls the above functions to parse and format the time, then updates the DOM with the new value
function updateDisplay() {
  let currentDate = new Date();
  let elapsed = launchDate - currentDate; // getting difference (in miliseconds) between the current time and the goal time

  // Preventing the countdown from going below 00:00:00
  if (elapsed <= 0) {
    elapsed = 0;
  }

  // updating the DOM with the new time
  time.textContent = writeDisplay(parseDate(elapsed));
  requestAnimationFrame(updateDisplay);
}

const launchDate = randomDate();

requestAnimationFrame(updateDisplay);
