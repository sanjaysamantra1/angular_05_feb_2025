function varTest() {
    if (true) { // Ideally it should be visible only inside if block
        var a = 10;
        console.log(`a value inside block `, a)
    }
    console.log(`a value inside function `, a);
    // a variables is not restricted to that block, its visible outside the block
}
varTest()

function letTest() {
    if (true) {
        let b = 20;
        console.log(`b value inside block `, b); // 20
    }
    console.log(`b value inside function `, b); // ReferenceError: b is not defined
}
letTest()