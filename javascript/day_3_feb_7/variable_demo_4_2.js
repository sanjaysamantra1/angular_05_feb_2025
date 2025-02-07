let a = 10;
console.log(`In Global Scope a value is ${a}`);

function test() {
    let a = 100;
    console.log(`In function Scope a value is ${a}`);
    if (true) {
        let a = 1000;
        console.log(`In Block Scope a value is ${a}`);
    }
}
test();
