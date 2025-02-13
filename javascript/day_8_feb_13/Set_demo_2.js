let arr = [10, 20, 30, 40, 50, 10, 20, 30, 40, 50, 10, 10, 10, 50];

let uniqueSet = new Set(arr);
console.log(uniqueSet);

let uniqueArr = [...uniqueSet];
console.log(uniqueArr);