var a = 10;
let b = 20;
const c = 30;
console.log(`a value is ${a}`);
console.log(`b value is ${b}`);
console.log(`c value is ${c}`);
console.log('---------------------------------------')
a = 15;
b = 25;
// c = 35;  // TypeError: Assignment to constant variable
console.log(`a value is ${a}`);
console.log(`b value is ${b}`);

const arr = [10, 20];
arr[0] = 15;   // yes
arr.push(30);  // yes
delete arr[1]; // yes
console.log(arr); // [15,EMPTY.30]
console.log('---------------------------------------')

arr = [100, 200]; //  No - a new array cann't be assigned to the const 
