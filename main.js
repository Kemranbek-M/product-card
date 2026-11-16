const productCards = document.querySelectorAll ('.product-card');
const changeColorAllCardButton = document.querySelector ('#change-color-all-card');
const mintColorHash = '#bdf7d1'
const lavenderColorHash = '#dec5f9'

changeColorAllCardButton.addEventListener ('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = mintColorHash);
})


const firstProductCard = document.querySelector ('.product-card');
const changeColorFirstCardButton = document.querySelector ('#change-color-first-card');

changeColorFirstCardButton.addEventListener ('click',  () => {
  firstProductCard.style.backgroundColor = lavenderColorHash;
})


const openGoogleButton = document.querySelector ('#open-google');


openGoogleButton.addEventListener ('click', openGoogle)

function openGoogle () {
  const answer = confirm ('Вы действительно хотите открыть Google?');

  if (answer === true) {
    window.open ('https://google.com')
  } else {
    return;
  }
}

const outputLogButton = document.querySelector ('#output-console-log');

outputLogButton.addEventListener ('click', () => outputConsoleLog ('ДЗ № 4'))

function outputConsoleLog (message) {
  alert (message)
  console.log (message)
}

const heroTitle = document.querySelector ('.hero__title')
heroTitle.addEventListener('mouseenter', () => {
  console.log(heroTitle.textContent);
});


const colorBtn = document.querySelector ('.color-btn');
console.log('Кнопка:', colorBtn);

colorBtn.addEventListener ('click', () => {
  colorBtn.classList.toggle('color-btn--active');
});




// console.log('Product Card', productCard)
// console,log('Button', changeColorCardButton)

// changeColorCardButton.addEventListener ('click', () => {
//   productCards.forEach((card) => card.style.backgroundColor = yellowColorHash)
  // productCard.style.backgroundColor = yellowColorHash;
// })

// console.log(productCards)

// openGoogleButton.addEventListener ('click', () => {
//   window.open ('https://google.com');
// })

// outputConsoleLog ('ДЗ № 4')