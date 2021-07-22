// Возвращение суммы
const sum = (a) => (b) => a+b;

console.log(sum(5)(2));

// Покраска текста <p>

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
let clicksOne = 0;
let clicksTwo = 0;
let clicksThree = 0;
 

const elemText = document.body.childNodes[1];
const changeColor = () => {
  elemText.style.color = colors[clicksOne];
  clicksOne === 4 ? clicksOne = 0 : ++clicksOne;
};
elemText.addEventListener('click', () => changeColor(elemText));


const elemTextTwo = document.body.childNodes[3];
const changeColorTwo = () => {
  elemTextTwo.style.color = colors[clicksTwo];
  clicksTwo === 4 ? clicksTwo = 0 : ++clicksTwo;  
};
elemTextTwo.addEventListener('click', () => changeColorTwo(elemTextTwo));


const elemTextThree = document.body.childNodes[5];
const changeColorThree = () => {
  elemTextThree.style.color = colors[clicksThree];
  clicksThree === 4 ? clicksThree = 0 : ++clicksThree;  
};
elemTextThree.addEventListener('click', () => changeColorThree(elemTextThree));

