// Palindrom
const palindrom = (word) => word === word.split('').reverse().join('');
  
console.log(palindrom('atata'));

// Функция min(a, b) и функция max(a,b)

const min = (a,b) => a < b ? a: b ;

console.log(min(6,3));

const max = (a,b) => a > b ? a: b;

console.log(max(12,6));

// Замена элементов массива

const numbers =  [2, 40, 502, 8, 0, 8, 8, 0, 78, 95];

const nul = numbers.toString().replace(/0/g, 'zero').split(',').map (toZero = (num) => !!(Number(num)) ? Number(num): num );

console.log(nul);
