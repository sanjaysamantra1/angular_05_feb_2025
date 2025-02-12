// 1. Print the occurence of each character in a string
//    input: 'entertainment'
//    output: { e:3 , n:2 , t: 3 ....}

let input = "entertainment";  // The input string
let charCount = {};  // Empty object to store character counts


for (let char of input) {
    // If character is already in the object, increase its count by 1
    if (charCount[char]) {
        charCount[char] += 1;
    } else {
        // If character is not in the object, set its count to 1
        charCount[char] = 1;
    }
}

console.log(charCount);


// 2. Print the character which is repeated max no of times
//    input: 'hello world'
//    output : 'L'
function mostFrequentChar(str) {
    let charCount = {};  // Store character counts
    str = str.toLowerCase(); // Convert to lowercase to ignore case sensitivity

    for (let char of str) {  // Step 2: Count each character
        if (char !== " ") {  // Ignore spaces
            charCount[char] = (charCount[char] || 0) + 1;
        }
    }

    let maxChar = '';
    let maxCount = 0;

    for (let char in charCount) {  // Step 3: Find the max occurring character
        if (charCount[char] > maxCount) {
            maxChar = char;
            maxCount = charCount[char];
        }
    }

    return maxChar.toUpperCase();  // Convert to uppercase for output
}

console.log(mostFrequentChar("hello world")); // Output: 'L'

// 3. Swap The case for Each Character in a string 
//    input: 'Hello World'
//    output: 'hELLO wORLD'
function swapCase(str) {
    let result = "";

    for (let char of str) {
        if (char === char.toUpperCase()) {
            result += char.toLowerCase(); // Convert uppercase to lowercase
        } else {
            result += char.toUpperCase(); // Convert lowercase to uppercase
        }
    }

    return result;
}

console.log(swapCase("Hello World")); // Output: "hELLO wORLD"

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
const input1 = 'ABC';

function getPermutations(str) {
    return str.split('').map((_, i) => str.slice(i) + str.slice(0, i)).join(', ');
}

console.log(getPermutations(input1)); // Output: ABC, BCA, CAB



// After splitting: ['A', 'B', 'C']

// During the .map() step, we get these permutations:

// For the first character 'A': str.slice(0) + str.slice(0, 0) → 'ABC'
// For the second character 'B': str.slice(1) + str.slice(0, 1) → 'BCA'
// For the third character 'C': str.slice(2) + str.slice(0, 2) → 'CAB'
// After .join(', '): 'ABC, BCA, CAB'

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
