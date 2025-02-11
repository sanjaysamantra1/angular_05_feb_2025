let arr = [10, 20, 30, 40];
// splice(position/index, deleteCount, ...items);
arr.splice(1, 2);    // only delete 
console.log(arr);   // [10,40]

arr.splice(1, 0, 20, 30);  // only insert
console.log(arr);   // [10,20,30,40]

arr.splice(1, 2, 25, 35); // both insert and delete
console.log(arr);   // [10,25,35,40]

let cars = ['Tata', 'Honda', 'Maruti'];
let modifiedCars = cars.toSpliced(1, 1, 'Hundai');
console.log(cars, modifiedCars)
