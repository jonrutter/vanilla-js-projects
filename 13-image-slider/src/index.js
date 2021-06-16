// element selectors
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

// functionality
let currentSlide = 0; // tracks which slide we're on

function moveSlides() {
  console.log(currentSlide);
  // moving the slides:
  // all the slides begin by being pushed to the right (positive left value)
  // the slides are moved by passing translateX() by a negative value (to move the slide back left)
  // because each slide is 100% the container's width, the slides will move by 1 position each translateX(-100%)
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${currentSlide * 100}%)`;
  });

  // updating button styling to prevent going past the last/first slide
  if (currentSlide > 0) {
    prev.classList.remove('disabled');
  } else {
    prev.classList.add('disabled');
  }
  if (currentSlide < slides.length - 1) {
    next.classList.remove('disabled');
  } else {
    next.classList.add('disabled');
  }
}

// event listeners
next.addEventListener('click', () => {
  if (next.classList.contains('disabled')) return;
  currentSlide++;
  moveSlides();
});

prev.addEventListener('click', () => {
  if (prev.classList.contains('disabled')) return;
  currentSlide--;
  moveSlides();
});

// setup: dynamically set the slides' positions, in case we want to add more slides
slides.forEach((slide, i) => {
  slide.style.left = `${i * 100}%`;
});
