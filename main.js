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
function palindrom(word) {
  const array = word.split('');
  array.reverse();
  const newWord = array.join('');
  return (word === newWord);
}

console.log(palindrom('atata'));


// Функция min(a, b) и функция max(a,b)

const min = (a,b) => a < b ? a: b ;

console.log(min(6,3));

const max = (a,b) => a > b ? a: b;

console.log(max(12,6));

// Замена элементов массива

const numbers =  [2, 4, 5, 8, 0, 8, 8, 0, 78, 95];
const nul = numbers.map(function (num) { 
  return num === 0 ? 'zero': num
});
console.log(nul);
