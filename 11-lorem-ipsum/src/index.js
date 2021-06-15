// data
const loremIpsum = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eu ultrices vitae auctor eu augue ut lectus arcu. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Porta lorem mollis aliquam ut. Tortor posuere ac ut consequat semper viverra nam. Venenatis lectus magna fringilla urna. Interdum velit laoreet id donec ultrices tincidunt arcu. Eu scelerisque felis imperdiet proin fermentum leo vel. Et netus et malesuada fames. Turpis tincidunt id aliquet risus feugiat. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Diam in arcu cursus euismod quis viverra nibh cras pulvinar.',
  'Sit amet purus gravida quis blandit turpis cursus. Senectus et netus et malesuada fames. Ut pharetra sit amet aliquam id diam maecenas ultricies mi. Faucibus turpis in eu mi bibendum neque. Id cursus metus aliquam eleifend mi in nulla. Maecenas sed enim ut sem. Aliquam purus sit amet luctus venenatis lectus magna fringilla. Tellus id interdum velit laoreet id. Quis commodo odio aenean sed adipiscing. Nibh tortor id aliquet lectus proin nibh nisl. Sed faucibus turpis in eu mi bibendum neque egestas congue. Pulvinar elementum integer enim neque. Tincidunt lobortis feugiat vivamus at augue eget arcu. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Interdum consectetur libero id faucibus nisl tincidunt eget. Imperdiet massa tincidunt nunc pulvinar sapien et. Vivamus arcu felis bibendum ut tristique et egestas.',
  'Iaculis eu non diam phasellus vestibulum lorem sed risus ultricies. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Ut diam quam nulla porttitor massa id neque aliquam. Eu non diam phasellus vestibulum lorem sed risus ultricies tristique. Quisque id diam vel quam elementum pulvinar etiam non. Orci ac auctor augue mauris augue neque gravida. Ac orci phasellus egestas tellus rutrum tellus. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim. Rutrum quisque non tellus orci ac auctor. Fermentum dui faucibus in ornare quam viverra. Sit amet cursus sit amet dictum sit amet justo. Placerat duis ultricies lacus sed. Eu sem integer vitae justo eget magna fermentum iaculis eu. Lectus magna fringilla urna porttitor rhoncus dolor purus non enim. Dignissim diam quis enim lobortis scelerisque fermentum dui. Vel quam elementum pulvinar etiam non quam. Ac turpis egestas maecenas pharetra convallis posuere morbi. Ut eu sem integer vitae justo.',
  'Metus vulputate eu scelerisque felis. Pellentesque elit ullamcorper dignissim cras tincidunt. Commodo elit at imperdiet dui accumsan. Proin sed libero enim sed faucibus turpis in eu mi. Eget nunc lobortis mattis aliquam. Mauris sit amet massa vitae tortor. Orci phasellus egestas tellus rutrum tellus. Eu sem integer vitae justo eget magna fermentum iaculis eu. Nam aliquam sem et tortor consequat id porta nibh. Sit amet purus gravida quis blandit.',
  'Viverra mauris in aliquam sem fringilla. Sit amet porttitor eget dolor morbi non arcu. Adipiscing commodo elit at imperdiet dui accumsan. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Amet facilisis magna etiam tempor. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Lectus arcu bibendum at varius vel pharetra vel. Netus et malesuada fames ac turpis. Risus nullam eget felis eget nunc lobortis mattis. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Leo a diam sollicitudin tempor id eu nisl nunc mi. Tellus id interdum velit laoreet id. Duis convallis convallis tellus id. Augue neque gravida in fermentum et sollicitudin ac. Commodo ullamcorper a lacus vestibulum sed arcu non. Condimentum id venenatis a condimentum.',
];

// element selectors

const form = document.querySelector('#generator');
const numberInput = document.querySelector('#number');
const typeInput = document.querySelector('#type');
const submitButton = document.querySelector('#submit');
const copyButton = document.querySelector('#copy');
const result = document.querySelector('#result');

// helper functions

// clears out the result div
function clearResult() {
  while (result.firstChild) {
    result.removeChild(result.firstChild);
  }
}

// returns the full lorem ipsum text, joined as a single string.
// will be used to return strings of sentences, words, or characters
function getFullText() {
  return loremIpsum.join(' ');
}

// paragraphs

// takes a number,
// returns a paragraph of loremIpsum text based on num
function getParaText(num) {
  // i is the index of the data array to return
  // if num < loremIpsum.length, can simply use num
  // otherwise, use the remainder of num / result.length, to ensure that i is never >= the data array length
  let i = num < loremIpsum.length ? num : num % loremIpsum.length;
  return loremIpsum[i];
}

// takes a number, num
// writes num paragraphs of lorem ipsum text to the page
function writePara(num) {
  clearResult();
  if (num <= 0) return; // handling negative numbers and 0
  for (let i = 0; i < num; i++) {
    const para = document.createElement('p');
    para.textContent = getParaText(i);
    result.appendChild(para);
  }
}

// sentences

// takes a number, num
// returns an array (of length === num) of sentences of text
function getSentences(num) {
  let sentenceArray = [];
  // gets the raw text and splits it into an array of sentences.
  // if there are fewer sentences than requested in num, the code repeats
  // this covers edge cases where users specify an extremely large number of sentences.
  do {
    sentenceArray = sentenceArray.concat(getFullText().split('. '));
    sentenceArray.pop(); // removing leftover sentence with final period; to avoid formatting issues in the future
  } while (sentenceArray.length <= num);

  return sentenceArray.slice(0, num);
}

// takes a number, num
// writes a paragraph to the page, containing num sentences
function writeSentences(num) {
  clearResult();
  if (num <= 0) return; // handling negative numbers and 0
  let sentenceArray = getSentences(num);
  const para = document.createElement('p');

  for (let i = 0; i < num; i++) {
    let textContent = sentenceArray[i] + '. '; // constructing a new sentence
    const newTextNode = document.createTextNode(textContent);
    para.appendChild(newTextNode);
  }
  result.appendChild(para);
}

// words

// takes a number, num
// returns an array (of length === num) of words of text
function getWords(num) {
  let wordArray = [];

  // gets the raw text and splits it into an array of sentences.
  // if there are fewer sentences than requested in num, the code repeats
  // this covers edge cases where users specify an extremely large number of sentences.
  do {
    wordArray = wordArray.concat(getFullText().split(' '));
  } while (wordArray.length <= num);

  // remove punctuation and slice to the length of num
  return wordArray.slice(0, num).map((word) => word.replace(/\W/, ''));
}

// takes a number, num
// writes a paragraph to the page, containing num words
function writeWords(num) {
  clearResult();
  if (num <= 0) return; // handling negative numbers and 0
  let wordArray = getWords(num);
  const para = document.createElement('p');

  for (let i = 0; i < wordArray.length; i++) {
    let textContent = wordArray[i] + ' ';
    const newTextNode = document.createTextNode(textContent);
    para.appendChild(newTextNode);
  }
  result.appendChild(para);
}

// event listeners

function handleSubmit(e) {
  e.preventDefault();
  let inputType = typeInput.value;
  let inputNum = parseInt(numberInput.value);

  // handling negative input and NaN
  if (isNaN(inputNum) || inputNum < 0) {
    inputNum = 0;
  }

  if (inputType === 'paragraph') {
    writePara(inputNum);
  } else if (inputType === 'sentence') {
    writeSentences(inputNum);
  } else if (inputType === 'word') {
    writeWords(inputNum);
  }

  // setting the value of the text to copy to the clipboard
  copyValue = result.innerText;
}

form.addEventListener('submit', handleSubmit);
submitButton.addEventListener('click', handleSubmit);

// copy to clipboard

copyButton.addEventListener('click', () => {
  navigator.clipboard.writeText(copyValue).then(
    function () {
      console.log('Copied!');
    },
    function () {
      console.log('Failed!');
    }
  );
});

// initialize page
writePara(1);
let copyValue = result.innerText;
