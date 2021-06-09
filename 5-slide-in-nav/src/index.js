// Element selectors
const nav = document.querySelector('.nav');
const body = document.querySelector('body');
const navOpen = document.querySelector('.nav__open');
const navClose = document.querySelector('.nav__close');

const mainTabs = document.querySelector('[tabindex="-1"]');
const navTabs = document.querySelector('[tabindex="0"]');

// Nav Functions

// Helper function: returns true/false whether the nav is currently opened or closed
function isNavOpen() {
  return nav.classList.contains('nav--open');
}

function openNav() {
  nav.classList.add('nav--open');
  body.classList.add('no-scroll');
}

function closeNav() {
  nav.classList.remove('nav--open');
  body.classList.remove('no-scroll');
}

// Event Listeners

navOpen.addEventListener('click', () => {
  if (isNavOpen()) {
    closeNav();
  } else {
    openNav();
  }
});

navClose.addEventListener('click', () => {
  closeNav();
});

body.addEventListener('click', (e) => {
  // Close nav when the greyed-out part of the body is pressed
  // Must select e.target instead of body, to prevent the event from
  // firing every time the button is pressed
  if (e.target.classList.contains('no-scroll')) {
    closeNav();
  }
});
