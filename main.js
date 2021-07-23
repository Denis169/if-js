// Возвращение суммы
const sum = (a) => (b) => a+b;

console.log(sum(5)(2));

// Покраска текста <p>

const colorsForText = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

function сounter() {
  let currentCount = 0;
  return () => currentCount === 5 ? currentCount = 0 : currentCount++;
}; 

let counterText = сounter();

const changeColor = (elemText) => {
    elemText.style.color = colorsForText[counterText()];
};

const elemTextFirst = document.getElementById('text_1');
elemTextFirst.addEventListener('click', () => changeColor(elemTextFirst));

const elemTextTwo = document.getElementById('text_2');
elemTextTwo.addEventListener('click', () => changeColor(elemTextTwo));

const elemTextThree = document.getElementById('text_3');
elemTextThree.addEventListener('click', () => changeColor(elemTextThree));

