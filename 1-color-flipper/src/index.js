// Element selectors

const panelButtons = document.querySelectorAll('.controls button');
const randomColorButton = document.querySelector('#color-random');
const colorPreview = document.querySelector('#color-preview');

// Update Color

function updateColor(color) {
  colorPreview.textContent = color;
  document.documentElement.style.setProperty('--bg', color);
}

// Random Color

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function rgbToHex(r, g, b) {
  let hexR = r.toString(16);
  let hexG = g.toString(16);
  let hexB = b.toString(16);

  if (hexR.length < 2) {
    hexR = '0' + hexR;
  }
  if (hexG.length < 2) {
    hexG = '0' + hexG;
  }
  if (hexB.length < 2) {
    hexB = '0' + hexB;
  }

  return '#' + hexR + hexG + hexB;
}

randomColorButton.addEventListener('click', () => {
  let color = rgbToHex(rand(0, 255), rand(0, 255), rand(0, 255));
  updateColor(color);
});

// Switch panels
panelButtons.forEach((panelButton) => {
  panelButton.addEventListener('click', (e) => {
    // Selecting panel
    let queryString = '#' + e.target.dataset.for;
    const selectedPanel = document.querySelector(queryString);
    selectedPanel.classList.remove('hidden');

    // Resetting all panels
    document.querySelectorAll('.panel').forEach((panel) => {
      if (panel !== selectedPanel) {
        panel.classList.add('hidden');
      }
    });
  });
});

// Manual Color

const colorInput = document.querySelector('#color-manual');
const colorSubmit = document.querySelector('#color-manual-submit');
const colorForm = document.querySelector('#panel-manual');
const colorError = document.querySelector('.panel__error');

function validateColor(color) {
  let regex = /^#[0-9a-fA-F]{6}$/;
  console.log(color, regex, regex.test(color));

  return regex.test(color);
}

function errorOn() {
  if (colorError.classList.contains('hidden')) {
    colorError.classList.remove('hidden');
  }
}

function errorOff() {
  colorError.classList.add('hidden');
}

function checkColor(e) {
  e.preventDefault();
  let color = colorInput.value;
  if (!color.startsWith('#')) {
    color = '#' + color;
  }

  if (validateColor(color)) {
    updateColor(color);
    errorOff();
  } else {
    errorOn();
  }
  colorInput.focus();
}

colorForm.addEventListener('submit', (e) => {
  checkColor(e);
});

colorSubmit.addEventListener('click', (e) => {
  checkColor(e);
});
