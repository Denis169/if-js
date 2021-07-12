// 1-st task
let array = [2,3,5,8];
let composition = 1;
for (let i=0; i < array.length; i++){
  composition *= array[i];
}
console.log(`Composition of array ${array} = ${composition}`);

// 2-nd task
let value = [];
let massiv = [2,5,8,15,0,6,20,3];
console.log(`Element greater than 5 but less than 10 from ${massiv} is:`);
for (let i=0; i < massiv.length; i++){
  if (massiv[i] > 5){
    if (massiv[i] < 10){
      value.push(massiv[i]);
    }
  }
}
console.log(`   ${value}`);

// 3-rd task
let even = [];
console.log(`Even numbers of array ${massiv} is:`)
for (let i=0; i < massiv.length; i++){
  if (massiv[i]%2 == 0){
    even.push(massiv[i]);
  }
}
console.log(`   ${even}`);