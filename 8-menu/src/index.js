// data

import avocadoSaladImgSrc from 'url:./images/avocado-salad.jpg?width=450';
import houseSaladImgSrc from 'url:./images/house-salad.jpg?width=450';
import mediterraneanSaladImgSrc from 'url:./images/mediterranean-salad.jpg?width=450';
import gnocchiImgSrc from 'url:./images/gnocchi.jpg?width=450';
import lobsterRavioliImgSrc from 'url:./images/lobster-ravioli.jpg?width=450';
import bologneseImgSrc from 'url:./images/pasta-bolognese.jpg?width=450';
import pastaWithShrimpImgSrc from 'url:./images/pasta-with-shrimp.jpg?width=450';
import penneAllaVodkaImgSrc from 'url:./images/penne-alla-vodka.jpg?width=450';
import bbqShrimpImgSrc from 'url:./images/bbq-shrimp.jpg?width=450';
import fishFryImgSrc from 'url:./images/fish-fry.jpg?width=450';
import grilledSalmonImgSrc from 'url:./images/grilled-salmon.jpg?width=450';
import sushiPlatterImgSrc from 'url:./images/sushi-platter.jpg?width=450';
import filetMignonImgSrc from 'url:./images/filet-mignon.jpg?width=450';
import chocolateCakeImgSrc from 'url:./images/chocolate-cake.jpg?width=450';
import deathByBrownieImgSrc from 'url:./images/death-by-brownie.jpg?width=450';
import tiramisuImgSrc from 'url:./images/tiramisu.jpg?width=450';
import veryBerryCheesecakeImgSrc from 'url:./images/very-berry-cheesecake.jpg?width=450';

const dishes = [
  {
    title: 'Avocado Salad',
    price: '10.50',
    imgSrc: avocadoSaladImgSrc,
    type: 'salad',
    description:
      'Item description. Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum. Item description.',
  },
  {
    title: 'House Salad',
    price: '9.50',
    imgSrc: houseSaladImgSrc,
    type: 'salad',
    description:
      'Item description. Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum. Item description.',
  },
  {
    title: 'Mediterranean Salad',
    price: '11.50',
    imgSrc: mediterraneanSaladImgSrc,
    type: 'salad',
    description:
      'Item description. Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum. Item description.',
  },
  {
    title: 'Gnocchi',
    price: '17.50',
    imgSrc: gnocchiImgSrc,
    type: 'pasta',
    description:
      'Item description. Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum. Item description.',
  },
  {
    title: 'Lobster Ravioli',
    price: '20',
    imgSrc: lobsterRavioliImgSrc,
    type: 'pasta',
    description:
      'Item description. Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum. Item description.',
  },
  {
    title: 'Pasta Bolognese',
    price: '18',
    imgSrc: bologneseImgSrc,
    type: 'pasta',
    description:
      'Item description. Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum. Item description.',
  },
  {
    title: 'Pasta with Shrimp',
    price: '17.50',
    imgSrc: pastaWithShrimpImgSrc,
    type: 'pasta',
    description:
      'Item description. Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum. Item description.',
  },
  {
    title: 'Penne alla Vodka',
    price: '17',
    imgSrc: penneAllaVodkaImgSrc,
    type: 'pasta',
    description:
      'Item description. Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum. Item description.',
  },
  {
    title: 'BBQ Shrimp',
    price: '17.50',
    imgSrc: bbqShrimpImgSrc,
    type: 'seafood',
    description:
      'Item description. Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum. Item description.',
  },
  {
    title: 'Fish Fry',
    price: '16.50',
    imgSrc: fishFryImgSrc,
    type: 'seafood',
    description:
      'Item description. Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum. Item description.',
  },
  {
    title: 'Grilled Salmon',
    price: '19.50',
    imgSrc: grilledSalmonImgSrc,
    type: 'seafood',
    description:
      'Item description. Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum. Item description.',
  },
  {
    title: 'Sushi Platter',
    price: '16',
    imgSrc: sushiPlatterImgSrc,
    type: 'seafood',
    description:
      'Item description. Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum. Item description.',
  },
  {
    title: 'Filet Mignon',
    price: '22',
    imgSrc: filetMignonImgSrc,
    type: 'steak',
    description:
      'Item description. Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum. Item description.',
  },
  {
    title: 'Chocolate Cake',
    price: '9',
    imgSrc: chocolateCakeImgSrc,
    type: 'dessert',
    description:
      'Item description. Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum. Item description.',
  },
  {
    title: 'Death by Brownie',
    price: '8.50',
    imgSrc: deathByBrownieImgSrc,
    type: 'dessert',
    description:
      'Item description. Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum. Item description.',
  },
  {
    title: 'Tiramisu',
    price: '10',
    imgSrc: tiramisuImgSrc,
    type: 'dessert',
    description:
      'Item description. Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum. Item description.',
  },
  {
    title: 'Very Berry Cheesecake',
    price: '9.50',
    imgSrc: veryBerryCheesecakeImgSrc,
    type: 'dessert',
    description:
      'Item description. Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum. Item description.',
  },
];

// element selectors

const menu = document.querySelector('#menu');

// populating the HTML
function populateItem(item) {
  return `
    <div class="item__image-wrap">
      <img
        class="item__image"
        src="${item.imgSrc}"
        alt="Picture of ${item.title}"
      />
    </div>
    <section class="item__body">
      <header class="item__header">
        <h2 class="item__title">${item.title}</h2>
        <span class="item__price">${item.price}</span>
      </header>
      <p class="item__description">
      ${item.description}
      </p>
    </section>
  `;
}

function writeItem(item) {
  const newItem = document.createElement('article');
  newItem.classList.add('item');
  newItem.setAttribute('data-type', item.type);
  newItem.innerHTML = populateItem(item);
  menu.appendChild(newItem);
}

for (let i = 0; i < dishes.length; i++) {
  writeItem(dishes[i]);
}

// updating the HTML

// event listeners
