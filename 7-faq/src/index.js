const accordionButtons = document.querySelectorAll('.accordion__toggle');
const accordions = document.querySelectorAll('.accordion');

function closeAccordions() {
  accordions.forEach((accordion) => {
    accordion.classList.remove('accordion--open');
  });
}

function openAccordion(accordion) {
  accordion.classList.add('accordion--open');
}

function isAccordionOpen(accordion) {
  return accordion.classList.contains('accordion--open');
}

function togglePanel(e) {
  const targetAccordion = e.target.parentNode;
  if (isAccordionOpen(targetAccordion)) {
    closeAccordions();
  } else {
    closeAccordions();
    openAccordion(targetAccordion);
  }
}

accordionButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    togglePanel(e);
  });
});
