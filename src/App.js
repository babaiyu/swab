import './css/styles.css';
import time from './functions/clock';
import randomQuotes from './functions/randomQuotes';
import greetings from './functions/greetings';

function main() {
  // Show Clock
  time();
  setInterval(time, 1000);

  // Greetings
  greetings();

  // Random Quotes
  randomQuotes();
}

export default main();
