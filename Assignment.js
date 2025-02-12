// 1. Print the occurence of each character in a string
//    input: 'entertainment'
//    output: { e:3 , n:2 , t: 3 ....}
// 2. Print the character which is repeated max no of times
//    input: 'hello world'
//    output : 'L'
// 3. Swap The case for Each Character in a string 
//    input: 'Hello World'
//    output: 'hELLO wORLD'
// 4. Print the Abbreviation for a string
//    input: 'Rabindra Nath Tagore'
//    output: 'R. N. tagore'
// 5. Shift the characters by the next character
//    input:  'abcxyz'
//    output: 'bcdyza'
// 6. Ask user to enter a sequence of parantheses and validate 
//    input: '([{ }])'
//    output : true
// 7. Ask user to enter a 3 letter word, print all the permutations using those 3 letters.
//     input: 'ABC'
//     output: ABC , ACB , BCA, BAC ...
// 8. Ask user to enter a number and convert that to Roman value
//    input:   9    12
//    output : IX   XII
// 9. Ask user to enter a roman string and convert that to integer value
//    input:   IX    XII
//    output : 9     12


//1-------------------------------------------------------------------------------------------------------
const input = "entertainment";
const charCount = {};

for (const char of input) {
    charCount[char] = input.split(char).length - 1;
}

console.log(charCount);
//The string "entertainment" is split at every "e".It results in 4 parts: ['', 'nt', 'rtainm', 'nt'].Since "e" appeared 3 times, the number of parts is 4.The count of "e" is split("e").length - 1 = 4 - 1 = 3, Loop through each character in "entertainment".


//2----------------------------------------------------------------------------------------------------------
const input2 = "hello world".toLowerCase().replace(/ /g, "");
let maxChar = "";
let maxCount = 0;

for (let char of input2) { // Loop through unique characters
    let count = input2.split(char).length - 1; // Count occurrences using split()
    if (count > maxCount) {
        maxCount = count;
        maxChar = char;
    }
}

console.log(maxChar.toUpperCase()); // Output: L


//3---------------------------------------------------------------------------------------------------------
const input3 = "Hello World";

const output = input3.split('').map(char => 
    char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase() ) .join('');

console.log(output); // Output: hELLO wORLD


//4---------------------------------------------------------------------------------------------------------
const input4 = 'Rabindra Nath Tagore';
const words = input4.split(' ');

const abbreviation = words.map((word, index) => 
    index < words.length - 1 ? word[0].toUpperCase() + '.' : word.toLowerCase()).join(' '); // ("Rabindra", "Nath", "Tagore"). (0 for "Rabindra", 1 for "Nath", and 2 for "Tagore").

console.log(abbreviation); // Output: R. N. tagore


//5---------------------------------------------------------------------------------------------------------
const input5 = 'abcxyz';
let output5 = '';

for (let char of input5) {
    // Check if the character is 'z', if so, wrap it around to 'a'
    if (char === 'z') {
        output5 += 'a';
    } else {
        output5 += String.fromCharCode(char.charCodeAt(0) + 1); //ASCII values of the char, we shift them to next char
    }
}

console.log(output5); // Output: bcdyza


//6-------------------------------------------------------------------------------------------------------------
function validateParentheses(str) {
    while (str.includes("()") || str.includes("{}") || str.includes("[]")) {   //let str = "ab(cd)()ef";  str = str.split("()").join("");  // Output: "ab(cd)ef"  (Removes "()")
    str = str.split("()").join("")
             .split("{}").join("")
             .split("[]").join("");
    }
    return str.length === 0;
}
console.log(validateParentheses("({[]})")); // Output: true


//7------------------------------------------------------------------------------------------------------------
