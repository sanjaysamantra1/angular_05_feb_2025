
// a. Function Declaration
//A function that is declared with the function keyword.

function add(a, b)
 {
    let res= a + b;
    console.log(res);
    return res;
}
add(10,15);

// Function Expression
// A function assigned to a variable.(there is no function name )
let sub = function (x,y){
    console.log("Function Expresssion result:"+" "+ (x - y));

}
sub(10,15);
// Arrow Function (ES6)

        // A shorter syntax using =>.:

        const multiply = (a, b) => a * b;
        console.log(multiply(4, 5)); // Output: 20

        // For single-parameter functions:

        const square = num => num * num;
        console.log(square(6)); // Output: 36


// Self Invoked
(function (q,w){
    console.log(q + w);

})(2,3)

/* Arrow Function
==============
Implicit Return / no return keyword
No Function Keyword */

// Shorter Syntax

let sj = (s,j) =>{
    console.log(s + j);
}
sj(5,10);

let rj = (r,d) => r * d;
    console.log(rj(2,7));

    let arr =[10,20,34,56,75];
    let increment5 = arr.map((e) => e+14);
    console.log(increment5);


    let arr1 = [10, 20, 30, 40, 50];

function incrementBy5(elem) {
    return elem + 5;
}
let res1 = arr.map(incrementBy5);
console.log(res1);

// How 'this' works in arrow function and regular function
// ========================================================
// Regular Function : this - how/where the function is called
// Arrow  : Arrow Function Doesn't have its own 'this'
//          arrow function always uses 'this' from the surrounding/lexical scope
//          where the function is written
// 'this' : is the context where a function is being executed


    // console.log(this); // window

    // let user = {
    //     fName: 'Virat',
    //     lName: 'Kohli',
    //     fullName1: function () { // this = how the function is invoked
    //         console.log(this); // this = user
    //         console.log(this.fName, this.lName)
    //     },
    //     fullName2: () => { // this = where its written
    //         console.log(this); // this = window
    //         console.log(this.fName, this.lName)
    //     }
    // }
    // user.fullName1();
    // user.fullName2();






