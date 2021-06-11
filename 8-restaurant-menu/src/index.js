// data
import avocadoSaladImgSrc from 'url:./images/avocado-salad.jpg';
import houseSaladImgSrc from 'url:./images/house-salad.jpg';
import mediterraneanSaladImgSrc from 'url:./images/mediterranean-salad.jpg';
import gnocchiImgSrc from 'url:./images/gnocchi.jpg';
import lobsterRavioliImgSrc from 'url:./images/lobster-ravioli.jpg';
import bologneseImgSrc from 'url:./images/pasta-bolognese.jpg';
import pastaWithShrimpImgSrc from 'url:./images/pasta-with-shrimp.jpg';
import penneAllaVodkaImgSrc from 'url:./images/penne-alla-vodka.jpg';
import bbqShrimpImgSrc from 'url:./images/bbq-shrimp.jpg';
import fishFryImgSrc from 'url:./images/fish-fry.jpg';
import grilledSalmonImgSrc from 'url:./images/grilled-salmon.jpg';
import sushiPlatterImgSrc from 'url:./images/sushi-platter.jpg';
import filetMignonImgSrc from 'url:./images/filet-mignon.jpg';
import chocolateCakeImgSrc from 'url:./images/chocolate-cake.jpg';
import deathByBrownieImgSrc from 'url:./images/death-by-brownie.jpg';
import tiramisuImgSrc from 'url:./images/tiramisu.jpg';
import veryBerryCheesecakeImgSrc from 'url:./images/very-berry-cheesecake.jpg';

const dishes = [
  {
    title: 'Avocado Salad',
    price: '10.50',
    imgSrc: avocadoSaladImgSrc,
    type: 'salad',
    description: 'Spinach, tomato, and avocado salad.',
  },
  {
    title: 'House Salad',
    price: '9.50',
    imgSrc: houseSaladImgSrc,
    type: 'salad',
    description: 'Our signature salad, served with a side of bread.',
  },
  {
    title: 'Mediterranean Salad',
    price: '11.50',
    imgSrc: mediterraneanSaladImgSrc,
    type: 'salad',
    description: 'Leafy greens topped with tomatoes and feta cheese.',
  },
  {
    title: 'Gnocchi',
    price: '17.50',
    imgSrc: gnocchiImgSrc,
    type: 'pasta',
    description: 'Gnocchi with pesto sauce, topped with parmesean cheese.',
  },
  {
    title: 'Lobster Ravioli',
    price: '20',
    imgSrc: lobsterRavioliImgSrc,
    type: 'pasta',
    description:
      'Ravioli filled with lobster, topped with creamy sauce and greens.',
  },
  {
    title: 'Pasta Bolognese',
    price: '18',
    imgSrc: bologneseImgSrc,
    type: 'pasta',
    description: 'Pasta with our signature bolognese sauce.',
  },
  {
    title: 'Pasta with Shrimp',
    price: '17.50',
    imgSrc: pastaWithShrimpImgSrc,
    type: 'pasta',
    description: 'Pasta topped with shrimp and chopped tomatoes.',
  },
  {
    title: 'Penne alla Vodka',
    price: '17',
    imgSrc: penneAllaVodkaImgSrc,
    type: 'pasta',
    description: 'Penne with creamy red sauce.',
  },
  {
    title: 'BBQ Shrimp',
    price: '17.50',
    imgSrc: bbqShrimpImgSrc,
    type: 'seafood',
    description: 'BBQ shrimp, served on a skewer.',
  },
  {
    title: 'Fish Fry',
    price: '16.50',
    imgSrc: fishFryImgSrc,
    type: 'seafood',
    description: 'Fish fry, served with a side of chips and tartar sauce.',
  },
  {
    title: 'Grilled Salmon',
    price: '19.50',
    imgSrc: grilledSalmonImgSrc,
    type: 'seafood',
    description: 'Grilled salmon, served with a side of roasted vegetables.',
  },
  {
    title: 'Sushi Platter',
    price: '16',
    imgSrc: sushiPlatterImgSrc,
    type: 'seafood',
    description:
      'A platter of tuna, salmon, and shrimp sushi, served with wasabi and soy sauce.',
  },
  {
    title: 'Filet Mignon',
    price: '22',
    imgSrc: filetMignonImgSrc,
    type: 'steak',
    description: 'Our signature filet mignon, cooked to order.',
  },
  {
    title: 'Chocolate Cake',
    price: '9',
    imgSrc: chocolateCakeImgSrc,
    type: 'dessert',
    description: 'Multi-layered chocolate cake.',
  },
  {
    title: 'Death by Brownie',
    price: '8.50',
    imgSrc: deathByBrownieImgSrc,
    type: 'dessert',
    description: 'Decadent chocolate brownie.',
  },
  {
    title: 'Tiramisu',
    price: '10',
    imgSrc: tiramisuImgSrc,
    type: 'dessert',
    description: 'Our signature tiramisu.',
  },
  {
    title: 'Very Berry Cheesecake',
    price: '9.50',
    imgSrc: veryBerryCheesecakeImgSrc,
    type: 'dessert',
    description: 'Cheesecake served with a side of mixed berries.',
  },
];

// element selectors

const menu = document.querySelector('#menu');
const buttons = document.querySelectorAll('.buttons__list .btn');

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

function updateDisplay(type) {
  const menuItems = menu.childNodes;
  if (type === 'all') {
    menuItems.forEach((menuItem) => {
      menuItem.classList.remove('item--inactive');
    });
  } else {
    menuItems.forEach((menuItem) => {
      if (menuItem.dataset.type != type) {
        menuItem.classList.add('item--inactive');
      } else {
        menuItem.classList.remove('item--inactive');
      }
    });
  }
}

// event listeners

buttons.forEach((selectedButton) => {
  selectedButton.addEventListener('click', () => {
    buttons.forEach((button) => button.classList.remove('btn--active'));
    selectedButton.classList.add('btn--active');
    const type = selectedButton.id;
    updateDisplay(type);
  });
});
