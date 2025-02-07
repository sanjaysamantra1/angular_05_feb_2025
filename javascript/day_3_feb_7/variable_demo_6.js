var a = 10;
console.log('a value from global scope is ', a);

function test() {
    var b = 20;  //  b is function scoped
    console.log('b value from function scope is ', b);
}
test();

// console.log('b value from function scope is ', b); // ReferenceError: b is not defined
