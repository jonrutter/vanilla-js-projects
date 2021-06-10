// Element Selectors

const modalOpen = document.querySelector('.modal__open');
const modalClose = document.querySelector('.modal__close');
const modal = document.querySelector('.modal');
const body = document.querySelector('body');

// Functions

function openModal() {
  modal.classList.add('modal--open');
  body.classList.add('no-scroll');

  modal.removeAttribute('aria-hidden');
  modalOpen.setAttribute('aria-expanded', 'true');
}

function closeModal() {
  modal.classList.remove('modal--open');
  body.classList.remove('no-scroll');

  modal.setAttribute('aria-hidden', 'true');
  modalOpen.removeAttribute('aria-expanded');
}

// Event Listeners

modalOpen.addEventListener('click', () => {
  openModal();
});

modalClose.addEventListener('click', () => {
  closeModal();
});

body.addEventListener('click', (e) => {
  if (e.target.classList.contains('no-scroll')) {
    closeModal();
  }
});
