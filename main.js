// Возвращение суммы
const sum = (a) => (b) => a + b;

console.log(sum(2)(3));

// Покраска текста <p>

const colorsForText = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

const changeColor = () => {
  let count = 0;
  return (e) => {
    e.target.style.color = colorsForText[count];
    count === 5 ? count = 0 : count++;
  };
};

const elemTextFirst = document.getElementById('text_1');
elemTextFirst.addEventListener('click', changeColor());

const elemTextTwo = document.getElementById('text_2');
elemTextTwo.addEventListener('click', changeColor());

const elemTextThree = document.getElementById('text_3');
elemTextThree.addEventListener('click', changeColor());


