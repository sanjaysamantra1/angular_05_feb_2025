let arr1 = [10, 20];

let arr2 = arr1;  // Reference Copy / Address Copy  
// a new array is not being created, rather 2 variables are pointing to the same array
arr1.push(30);
arr2.push(40);
console.log(arr1, arr2);
console.log('======================================')

let arr3 = [10, 20, [30, 31]];
let arr4 = [...arr3]; // ... spread , copy by value, shallow copy
// a new array is created and all the values from arr3 are copied to arr4
arr4.push(40);
arr4[2].push(32, 33);
console.log(arr3);  // [10, 20, [30, 31,32,33]]
console.log(arr4);  // [10, 20, [30, 31,32,33],40]
console.log('======================================')

let arr5 = [10, 20, [30, 31]];
let arr6 = structuredClone(arr5); // value copy , deep copy
// a new array is created and all the values from arr3 are copied to arr4
arr6.push(40);
arr6[2].push(32, 33);
console.log(arr5);  // [10, 20, [30, 31]]
console.log(arr6);  // [10, 20, [30, 31,32,33],40]