const navTrigger = document.querySelector('#nav-trigger');
const navIcon = document.querySelector('.nav__button-icon');
const navList = document.querySelector('#nav-dropdown');

function navOpen() {
  navList.classList.add('nav__list--active');
  navIcon.textContent = 'close';
}

function navClose() {
  navList.classList.remove('nav__list--active');
  navIcon.textContent = 'menu';
}

navTrigger.addEventListener('click', () => {
  if (navList.classList.contains('nav__list--active')) {
    navClose();
  } else {
    navOpen();
  }
});
