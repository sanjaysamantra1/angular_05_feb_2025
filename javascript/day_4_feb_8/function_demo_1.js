// 1. Function Declaration / Named Function
function add(a, b) {
    console.log(a + b);
}
add(2, 3);


// 2. Function Expression / Anonymous Function
let sub = function (a, b) {
    console.log(a - b);
}
sub(10, 2);


// 3. Self Invoked / IIFE (Immediately Invoked Function Expression)
(function (a, b) {
    console.log(a * b);
})(4, 5);


// 4. Arrow Function
let div =  (a, b)=> {
    console.log(a - b);
}
div(10, 2);
