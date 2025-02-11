let arr1 = [40, 10, 50, 30, 20];
arr1.sort();
console.log('arr1 ', arr1);

let arr2 = [10, 9, 7, 91, 8, 95, 101, 102, 93];
arr2.sort();
console.log(arr2); 

// How to perform numeric sort
arr2.sort((a,b)=>a-b); // ascending sort
console.log(arr2)