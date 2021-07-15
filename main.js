// // 1-st task
// const array = [2, 3, 5, 8];
// let composition = 1;
// for (let i = 0; i < array.length; i++){
//   composition *= array[i];
// }
// console.log(`Composition of array ${array} = ${composition}`);

// // 2-nd task
// const massiv = [2, 5, 8, 15, 0, 6, 20, 3];
// console.log(`Element greater than 5 but less than 10 from ${massiv} is:`);
// for (let i = 0; i < massiv.length; i++){
//   if (massiv[i] > 5 && massiv[i] < 10){
//     console.log(massiv[i]);
//   }
// }

// // 3-rd task
// console.log(`Even numbers of array ${massiv} is:`)
// for (let i = 0; i < massiv.length; i++){
//   if (massiv[i] % 2 === 0){
//     console.log(massiv[i]);
//   }
// }

// 3-rd LESSON
// Palindrom
function palindrom(word){
  const letter = word.split('');
  const conversely=[];
  for (let i = letter.length-1; i > -1; i--){
    conversely.push(letter[i]);
  }
  for (let j = 0; j < letter.length; j++){
    if (letter[j] !== conversely[j]){
      return(false);
    }
  }
  return(true);
}

console.log(palindrom('fgfgfg'));

// Функция min(a, b) и функция max(a,b)

function min(a,b){
  return(a < b ? a: b );
}

console.log(min(5,2));

function max(a,b){
  return(a > b ? a: b );
}

console.log(max(5,10));

// Замена элементов массива
function findZero(array){
  const numbersZero = [];
  for (let i = 0; i < array.length; i++){
    array[i] !== 0 ? numbersZero.push(array[i]): numbersZero.push('zero');
  }
  console.log(numbersZero);
}

const numbers =  [2, 4, 5, 8, 0, 8, 8, 0, 78, 95];
findZero(numbers);