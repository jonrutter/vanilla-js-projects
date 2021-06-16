// element selectors

const list = document.querySelector('.list');
const form = document.querySelector('.form');
const formInput = document.querySelector('#item-input');
const submitButton = document.querySelector('#submit');
const clearListButton = document.querySelector('#clear-list');

// add item

let counter = -1; // counter iterates on each form submission. starting count at -1 to preserve zero-indexing.
let editing = -1; // stores which item is currently being edited

function addItem(value) {
  counter++;

  // creating the container element
  const listItem = document.createElement('li');
  listItem.setAttribute('class', 'list__item');
  listItem.setAttribute('data-item', counter);

  // child element: label
  const label = document.createElement('label');
  label.setAttribute('class', 'list__label');
  label.setAttribute('for', `item${counter}`);
  label.textContent = value;
  listItem.appendChild(label);

  // child element: input (for updating value in the future);
  const input = document.createElement('input');
  input.setAttribute('name', `item${counter}`);
  input.setAttribute('data-for', counter);
  input.setAttribute('value', value);
  input.setAttribute('id', `item${counter}`);
  input.setAttribute('class', 'list__edit');
  listItem.appendChild(input);

  // child element: delete button
  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('class', 'list__delete');
  deleteButton.setAttribute('data-for', counter);
  deleteButton.innerHTML = '<span class="material-icons">delete</span>';
  listItem.appendChild(deleteButton);

  deleteButton.addEventListener('click', deleteItem);

  // child element: done button
  const doneButton = document.createElement('button');
  doneButton.setAttribute('class', 'list__done');
  doneButton.setAttribute('data-for', counter);
  doneButton.innerHTML = '<span class="material-icons">done</span>';
  listItem.appendChild(doneButton);

  list.appendChild(listItem);
}

// delete item

function deleteItem() {
  if (this.classList.contains('list__delete')) {
    let currentItem = this.parentNode;
    list.removeChild(currentItem);
  }
}

// clear list

function clearList() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  formInput.focus();
}

// form handler

function handleSubmit(e) {
  e.preventDefault();
  let value = formInput.value;
  if (!value) {
    return false; // handling no value in input
  } else {
    addItem(value);
    this.reset();
    formInput.focus();
  }
}

// event listeners

form.addEventListener('submit', handleSubmit);

clearListButton.addEventListener('click', clearList);

document.addEventListener('keydown', (e) => {
  if (editing < 0 || e.key !== 'Enter') {
    return;
  } else {
    console.log(`Currently editing: item${editing}`);
  }
});

// setup
