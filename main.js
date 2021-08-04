// Return of the amount
const sum = (a) => (b) => a + b;

console.log(sum(5)(2));

// Coloring text <p>

const colorsForText = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

const elemTextFirst = document.getElementById('text_1');
const elemTextTwo = document.getElementById('text_2');
const elemTextThree = document.getElementById('text_3');

const changeColor = () => {
  let count = 0;
  return (event) => {
    event.target.style.color = colorsForText[count];
    count === colorsForText.length ? count = 0 : count++;
  };
};

elemTextFirst.addEventListener('click', changeColor());
elemTextTwo.addEventListener('click', changeColor());
elemTextThree.addEventListener('click', changeColor());


