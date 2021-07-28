// Возвращение суммы
const sum = (a) => (b) => a + b;

console.log(sum(5)(2));

// Покраска текста <p>

const colorsForText = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

const changeColor = () => {
  let count = 0;
  return (event) => {
    event.target.style.color = colorsForText[count];
    count === 5 ? count = 0 : count++;
  };
};

const elemTextFirst = document.getElementById('text_1');
const elemTextTwo = document.getElementById('text_2');
const elemTextThree = document.getElementById('text_3');

elemTextFirst.addEventListener('click', changeColor());
elemTextTwo.addEventListener('click', changeColor());
elemTextThree.addEventListener('click', changeColor());


