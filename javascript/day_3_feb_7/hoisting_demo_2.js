console.log(`a value is ${a}`);  // undefined
var a = 10;
console.log(`a value is ${a}`); // 10

function test() {
    console.log(`a value is ${a}`);  // undefined 
    var a = 20;
    console.log(`a value is ${a}`); // 20
}
test();