// 1. Print the occurence of each character in a string
//    input: 'entertainment'
//    output: { e:3 , n:2 , t: 3 ....}
console.log(charCount('entertainment'));
const input = "entertainment";
const charCount = {};

for (const char of input) {
    charCount[char] = input.split(char).length - 1;
}

console.log(charCount);
//The string "entertainment" is split at every "e".It results in 4 parts: ['', 'nt', 'rtainm', 'nt'].Since "e" appeared 3 times, the number of parts is 4.The count of "e" is split("e").length - 1 = 4 - 1 = 3, Loop through each character in "entertainment".


// 2. Print the character which is repeated max no of times
//    input: 'hello world'
//    output : 'L'
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

// 3. Swap The case for Each Character in a string 
//    input: 'Hello World'
//    output: 'hELLO wORLD'
function swapCase(str) {
    return str.split('').map(char => 
        char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('');
}

console.log(swapCase('Hello World'));

// 4. Print the Abbreviation for a string
//    input: 'Rabindra Nath Tagore'
//    output: 'R. N. tagore'
const input4 = 'Rabindra Nath Tagore';
const words = input4.split(' ');

const abbreviation = words.map((word, index) => 
    index < words.length - 1 ? word[0].toUpperCase() + '.' : word.toLowerCase()).join(' '); // ("Rabindra", "Nath", "Tagore"). (0 for "Rabindra", 1 for "Nath", and 2 for "Tagore").

console.log(abbreviation); // Output: R. N. tagore

// 5. Shift the characters by the next character
//    input:  'abcxyz'
//    output: 'bcdyza'

function shiftCharacters(str) {
    return str.split('').map(char => 
        String.fromCharCode(((char.charCodeAt(0) - 97 + 1) % 26) + 97)).join('');
}

console.log(shiftCharacters('abcxyz'));

// 6. Ask user to enter a sequence of parantheses and validate 
//    input: '([{ }])'
//    output : true

function validateParentheses(str) {
    while (str.includes("()") || str.includes("{}") || str.includes("[]")) {            //let str = "ab(cd)()ef";  str = str.split("()").join("");  // Output: "ab(cd)ef"  (Removes "()")
    str = str.split("()").join("")
             .split("{}").join("")
             .split("[]").join("");
    }
    return str.length === 0;
}
console.log(validateParentheses("({[]})")); // Output: true

// 7. Ask user to enter a 3 letter word, print all the permutations using those 3 letters.
//     input: 'ABC'
//     output: ABC , ACB , BCA, BAC ...

function permutations(str, prefix = '') {
    if (str.length === 0) console.log(prefix);
    for (let i = 0; i < str.length; i++) {
        permutations(str.slice(0, i) + str.slice(i + 1), prefix + str[i]);
    }
}

permutations('ABC');

// 8. Ask user to enter a number and convert that to Roman value
//    input:   9    12
//    output : IX   XII

function toRoman(num) {
    let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let numerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let result = '';
    for (let i = 0; i < values.length; i++) {
        while (num >= values[i]) {
            result += numerals[i];
            num -= values[i];
        }
    }
    return result;
}

console.log(toRoman(9));
console.log(toRoman(12));

// 9. Ask user to enter a roman string and convert that to integer value
//    input:   IX    XII
//    output : 9     12
function fromRoman(str) {
    let values = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
    let total = 0;
    for (let i = 0; i < str.length; i++) {
        let current = values[str[i]];
        let next = values[str[i + 1]];
        total += next && current < next ? -current : current;
    }
    return total;
}

console.log(fromRoman('IX'));
console.log(fromRoman('XII'));

