function test(a, b, ...c) {
    console.log(a, b, c)
}
test(1, 2, 3, 4, 5);  // a=1 b=2 c=[3,4,5]
// A rest parameter must be last in a parameter list

// Write a function that should have ability to add N number of elements
function add(...arr) {
    let sum = 0;
    for (ele of arr) {
        sum += ele;
    }
    console.log(sum)
}
add(2, 3);
add(2, 3, 4);
add(2, 3, 4, 5);
add(2, 3, 4, 5, 6);
add(2, 3, 4, 5, 6, 7);