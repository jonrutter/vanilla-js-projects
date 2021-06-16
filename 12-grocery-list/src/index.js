// element selectors

const list = document.querySelector('.list'); // the grocery list
const form = document.querySelector('.form'); // the form to add a new item
const formInput = document.querySelector('#item-input'); // the input form for ^
const clearListButton = document.querySelector('#clear-list'); // the button to clear the entire list

// create item

let counter = 0; // global counter to track which index to give to the next item created

// creates a new item, adds it to the list element, updates the DOM
function createItem(value) {
  let index = counter++; // declaring index as local counter; increment counter

  // creating the container element
  const listItem = document.createElement('li');
  listItem.setAttribute('class', 'list__item');
  listItem.setAttribute('id', `item${index}`);

  // child element: form
  const listForm = document.createElement('form');
  listForm.setAttribute('class', 'list__form');
  listForm.setAttribute('data-for', index);

  // child element: label
  const label = document.createElement('label');
  label.setAttribute('class', 'list__label');
  label.setAttribute('data-for', index);
  label.setAttribute('for', `list-input${index}`);
  label.textContent = value;
  listForm.appendChild(label);

  label.addEventListener('click', updateStart); // the label is displayed normally, but is swapped out for the input on click

  // child element: input (for updating value in the future);
  const input = document.createElement('input');
  input.setAttribute('name', `item${index}`);
  input.setAttribute('data-for', index);
  input.setAttribute('value', value);
  input.setAttribute('id', `list-input${index}`);
  input.setAttribute('class', 'list__edit hidden');
  listForm.appendChild(input);

  listItem.appendChild(listForm); // appending the completed form to the main container

  // child element: delete button
  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('class', 'list__delete');
  deleteButton.setAttribute('data-for', index);
  deleteButton.setAttribute('aria-label', 'Delete item');
  deleteButton.innerHTML = '<span class="material-icons">delete</span>';
  listItem.appendChild(deleteButton);

  deleteButton.addEventListener('click', () => {
    deleteItem(index); // passing in the local scope counter to track the current list item
  });

  list.appendChild(listItem);
}

// update item

// begins the item updating process: swaps out an input field for the label, creates event listeners for the current item to update when updating is finished
function updateStart() {
  const form = this.parentNode; // updateStart is always called from an event listener on the label field, so this is the label
  const input = form.querySelector('input');
  const label = this;
  label.classList.add('hidden');
  input.classList.remove('hidden');

  input.focus();
  input.addEventListener('blur', updateEnd);
  form.addEventListener('submit', updateEnd);
}

function updateEnd(e) {
  e.preventDefault();
  const form = this.parentNode;
  const input = form.querySelector('input');
  const label = form.querySelector('label');
  if (!input.value) {
    deleteItem(input.dataset.for);
  } else {
    label.textContent = input.value;
    label.classList.remove('hidden');
    input.classList.add('hidden');
    input.blur();
  }
}

// delete item

function deleteItem(index) {
  let id = '#item' + index;
  let currentItem = document.querySelector(id);
  list.removeChild(currentItem);
}

// form handler

function handleSubmit(e) {
  e.preventDefault();
  let value = formInput.value;
  if (!value) {
    return false; // handling no value in input
  } else {
    createItem(value);
    this.reset();
    formInput.focus();
  }
}

// clear list

function clearList() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  formInput.focus();
}

// event listeners

form.addEventListener('submit', handleSubmit);
clearListButton.addEventListener('click', clearList);

// setup

formInput.focus();
