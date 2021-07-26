// Возвращение суммы
const sum = (a) => (b) => a+b;

console.log(sum(5)(2));

// Покраска текста <p>

const colorsForText = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

function сounter() {
  let currentCount = 0;
  return () => currentCount === 5 ? currentCount = 0 : currentCount++;
}


let counterTextOne = сounter();
let counterTextTwo = сounter();
let counterTextThree = сounter();


const elemTextFirst = document.getElementById('text_1');
elemTextFirst.addEventListener('click', function(e) {e.target.style.color = colorsForText[counterTextOne()]});

const elemTextTwo = document.getElementById('text_2');
elemTextTwo.addEventListener('click', function(e) {e.target.style.color = colorsForText[counterTextTwo()]});

const elemTextThree = document.getElementById('text_3');
elemTextThree.addEventListener('click', function(e) {e.target.style.color = colorsForText[counterTextThree()]});

