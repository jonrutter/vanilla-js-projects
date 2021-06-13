// element selectors

const tabsButtons = document.querySelectorAll('.tabs__button');
const tabsPanels = document.querySelectorAll('.tabs__panel');

// functions

// takes three arguments:
// a nodelist, representing a type of element
// an element (which should be part of the nodelist)
// a class
// the function will remove the given class from all elements of the nodelist, except the element given as the second argument
function toggleClass(nodelist, element, classToToggle) {
  nodelist.forEach((ele) => {
    if (ele.isSameNode(element)) {
      ele.classList.add(classToToggle);
    } else {
      ele.classList.remove(classToToggle);
    }
  });
}

function switchPanel(e) {
  const button = e.target;
  const panelID = '#' + button.dataset.opens;
  const panel = document.querySelector(panelID);
  toggleClass(tabsButtons, button, 'tabs__button--active');
  toggleClass(tabsPanels, panel, 'tabs__panel--active');
}

// event listeners

tabsButtons.forEach((tabsButton) => {
  tabsButton.addEventListener('click', switchPanel);
});
