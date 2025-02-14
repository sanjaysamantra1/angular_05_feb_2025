// Print the occurence of each character in a string
// input: 'entertainment'
// output: { e:3 , n:2 , t: 3 ....}

 str='entertainment';

function countCharOccure(str) {
    let charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1; 
    }
    return charCount;
}console.log("countCharOccure:"+countCharOccure(str));

console.log("===============================");

// Print the character which is repeated max no of times
//    input: 'hello world'
//    output : 'L'
str='hello world';
function maxRepeatedChar(str) {
    let charCount = {};
    for (let char of str.toLowerCase()) {
        if (char !== " ") {
            charCount[char] = (charCount[char] || 0) + 1;
        }
    }

    let maxChar = '';
    let maxCount = 0;
    for (let char in charCount) {
        if (charCount[char] > maxCount) {
            maxChar = char;
            maxCount = charCount[char];
        }
    }

    return maxChar.toUpperCase();
}
console.log(maxRepeatedChar(str));

console.log("===============================");


// 3. Swap The case for Each Character in a string 
//    input: 'Hello World'
//    output: 'hELLO wORLD'

function swapCase(str) {
    return str.split("").map(char => 
        char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    ).join("");
}

console.log(swapCase("Hello World"));
console.log("===============================");

// 4.Print the Abbreviation for a string
//    input: 'Rabindra Nath Tagore'
//    output: 'R. N. tagore'
Name='Rabindra Nath Tagore';
function Abbreviation(Name){
    words=Name.split(" ");
    return words
    .map((word,index) => index < (words.length-1)?word.charAt(0)+".":word)
    .join(" ");

}console.log(Abbreviation(Name));
console.log("===============================");
// Shift the characters by the next character
//    input:  'abcxyz'
//    output: 'bcdyza'
const input = "abcxyz";
function shiftCharacters(input) {
    return input
        .split("") 
        .map(char => char === 'z' ? 'a' : char === 'Z' ? 'A' : String.fromCharCode(char.charCodeAt(0) + 1)) // Shift characters
        .join("");  
}
console.log("shiftCharacters:"+shiftCharacters(input));
console.log("===============================");

// Ask user to enter a sequence of parantheses and validate 
// input: '([{ }])'
// output : true

symbol='([{ }])';
function symbolFun(symbol){
    let arr = symbol.split(""); 

    const pairs = { ')': '(', '}': '{', ']': '[' }; 

    while (arr.length > 0) {
        let first = arr.shift();
        let last = arr.pop(); 

        if (pairs[last] != first) { 
            return false; 
        }
    }

    return true;
}
console.log("validate:"+symbolFun(symbol));
console.log("===============================");
// 7. Ask user to enter a 3 letter word, print all the permutations using those 3 letters.
//     input: 'ABC'
//     output: ABC , ACB , BCA ,  BAC , CAB , CBA
let str='ABC'
function permutations(str, prefix = '') {
    if (str.length === 0) console.log(prefix);
    for (let i = 0; i < str.length; i++) {
        permutations(str.slice(0, i) + str.slice(i + 1), prefix + str[i]);
    }
}
permutations(str);
console.log("===============================");
// 8. Ask user to enter a number and convert that to Roman value
//    input:   9    12
//    output : IX   XII

function intToRoman(n) {
    let value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let numeral = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let res = '';
    for (let i = 0; i < value.length; i++) {
        while (n >= value[i]) {
            res += numeral[i];
            n -= value[i];
        }
    }
    return res;
}

console.log(intToRoman(9));
console.log(inttToRoman(12));
console.log("===============================");

// 9. Ask user to enter a roman string and convert that to integer value
//    input:   IX    XII
//    output : 9     12

function RomanstrToInt(st) {
    let val = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
    let tot = 0;
    for (let i = 0; i < st.length; i++) {
        let cur = val[st[i]];
        let next = val[st[i + 1]];
        tot += next && cur < next ? -cur : cur;
    }
    return tot;
}

console.log(RomanstrToInt('IX'));
console.log(RomanstrToInt('XII'));


