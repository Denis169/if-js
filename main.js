// Palindrom
const palindrom = (word) => word === word.split('').reverse().join('');
  
console.log(palindrom('atata'));

// Функция min(a, b) и функция max(a,b)

const min = (a,b) => a < b ? a: b ;

console.log(min(6,3));

const max = (a,b) => a > b ? a: b;

console.log(max(12,6));

// Замена элементов массива

const nul = (numbers) => numbers.map (toZero = (num) => num.toString().includes(0) ? num.toString().replace(/0/g, 'zero'): num );

const numbers =  [2, 40, 502, 8, 0, 8, 8, 0, 78, 95];
console.log(nul(numbers));
