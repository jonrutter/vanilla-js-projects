// Selectors

const counter = document.querySelector('.counter-text');
const increase = document.querySelector('.increase');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');

// Functions

let count = 0;

function updateDisplay() {
  counter.textContent = count;
  if (count > 0) {
    counter.style.color = 'green';
  } else if (count < 0) {
    counter.style.color = 'red';
  } else {
    counter.style.color = 'black';
  }
}

function increaseCount() {
  count++;
  updateDisplay();
}

function decreaseCount() {
  count--;
  updateDisplay();
}

function resetCount() {
  count = 0;
  updateDisplay();
}

// Event Listeners

increase.addEventListener('click', () => {
  increaseCount();
});

decrease.addEventListener('click', () => {
  decreaseCount();
});

reset.addEventListener('click', () => {
  resetCount();
});
