// Element selectors

const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

const cards = document.querySelectorAll('.card');

// Functions

let index = 0;

function switchCard(index) {
  cards.forEach((card) => {
    if (card.id === `card${index}`) {
      card.classList.add('card--active');
    } else {
      card.classList.remove('card--active');
    }
  });
}

// Event listeners

prev.addEventListener('click', () => {
  if (index <= 0) {
    index = 4;
  } else {
    index--;
  }
  switchCard(index);
});

next.addEventListener('click', () => {
  if (index >= 4) {
    index = 0;
  } else {
    index++;
  }
  switchCard(index);
});
