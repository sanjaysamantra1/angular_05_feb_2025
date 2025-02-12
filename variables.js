// /* var a = 10;
// let b = 25;
// const c = 30;

// console.log(a);
// console.log(b);
// console.log(c);
// document.write(a);
//  */
function test() {
    console.log(`a value is ${a}`);
    var a = 20;
    console.log(`a value is ${a}`); 
}
test();
/* ECMA (European Computer Manufacturers Association) is an organization that standardizes information and communication systems.
 ECMAScript (ES) is one of its most well-known standards, which defines the specification for JavaScript.

If you're asking about ECMAScript, it's the scripting language standard that JavaScript,
JScript, and ActionScript follow. The most widely used implementation of ECMAScript is JavaScript. */

/* var						let						 const
======================================================================
1.since begining		 1.ECMASCRIPT-6(2015)		1.ECMASCRIPT-6(2015)
2.value can be changed   2.value can be changed     2.cann't be changed
3.initialization is		 3.initialization is		3.mandatory
	not mandatory           not mandatory	
4.can be redeclared		 4.cann't be redeclared		4.cann't be redeclared
5.TDZ - No			 	 5.TDZ - Yes				5.TDZ - Yes
6.function/global		 6.block/function/global	6.block/function/global */


function testVar1() {
    console.log(a); // undefined (due to hoisting)
    var a = 10;
    console.log(a); // 10
  }
  testVar1();

  function testVar() {
    console.log("Inside testVar function:");
    if (true) {
      var a = 10; // var is function-scoped
    }
    console.log(a); // Accessible outside the block
  }
  testVar();
  
  function testLet() {
    console.log("Inside testLet function:");
    if (true) {
      let b = 20; // let is block-scoped
      console.log(b); // Accessible inside the block
    }
    // console.log(b); // Uncaught ReferenceError: b is not defined
  }
  testLet();
  
  function testConst() {
    console.log("Inside testConst function:");
    if (true) {
      const c = 30; // const is block-scoped
      console.log("testConst function:" +c); // Accessible inside the block
    }
    // console.log(c); // Uncaught ReferenceError: c is not defined
  }
  testConst();
  
  function varexample()
  {
    var x = 10;
    if (true) {
      console.log(x);
        var x = 20; // Re-declaring is allowed
        console.log(x); // 20
    }
    console.log("example function" + x); // 20 (same variable due to function scope)
  }
  varexample();

