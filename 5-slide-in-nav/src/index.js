// Element selectors
const nav = document.querySelector('.nav');
const body = document.querySelector('body');
const navOpen = document.querySelector('.nav__open');
const navClose = document.querySelector('.nav__close');

const tabs = document.querySelectorAll('[tabindex]');

// Nav Functions

// Helper function: returns true/false whether the nav is currently opened or closed
function isNavOpen() {
  return nav.classList.contains('nav--open');
}

// toggles all elements with an attribute of tabindex
// if tabindex="0", sets to tabindex="-1", and vice-versa
function toggleTabs() {
  tabs.forEach((tab) => {
    if (tab.getAttribute('tabindex') === '0') {
      tab.setAttribute('tabindex', '-1');
    } else {
      tab.setAttribute('tabindex', 0);
    }
  });
}

function openNav() {
  nav.classList.add('nav--open');
  body.classList.add('no-scroll');

  // aria attributes
  nav.removeAttribute('aria-hidden');
  navOpen.setAttribute('aria-expanded', 'true');

  // tabindex
  // when the nav menu is opened, users should be able to tab to the links inside
  toggleTabs();

  // focusing nav close button, to take focus off the navOpen if user tabbed to it
  navClose.focus();
}

function closeNav() {
  nav.classList.remove('nav--open');
  body.classList.remove('no-scroll');

  // aria attributes
  nav.setAttribute('aria-hidden', 'true');
  navOpen.removeAttribute('aria-expanded');

  // tabindex
  // when the nav menu is closed, users should not be able to tab to the links inside
  toggleTabs();

  // focusing nav open button, to take focus off the navClose if user tabbed to it
  navOpen.focus();
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
