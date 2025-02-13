//Print the occurence of each character in a string input: 'entertainment' output: { e:3 , n:2 , t: 3 ....}
function countChars(str) {
    let count = {};
    for (let char of str) {
        count[char] = count[char] + 1 || 1;
    }
    return count;
}

console.log(countChars('entertainment'));

// Print the character which is repeated max no of times input: 'hello world' output : 'L'
function maxRepeatedChar(str) {
    str1 = str.toUpperCase().replace(/ /g, ''); 
    let count = {};
    
    for (let char of str1) {
        count[char] = (count[char] || 0) + 1;
    }

    
    return Object.keys(count).reduce((a, b) => count[a] > count[b] ? a : b);
}

console.log(maxRepeatedChar('hello world'));

//Swap The case for Each Character in a string  input: 'Hello World' output: 'hELLO wORLD'

function swapCase(str) {
    return str
        .split('')  
        .map(letter => letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase())  
        .join(''); 
}

console.log(swapCase('Hello World')); 

//Print the Abbreviation for a string input: 'Rabindra Nath Tagore' output: 'R. N. tagore'
let str = 'Rabindra Nath Tagore';
let result = str.split(' ').map((word, index) => index < 2 ? word[0].toUpperCase() + '.' : word.toLowerCase()).join(' ');

console.log(result);  

//Shift the characters by the next character input:  'abcxyz' output: 'bcdyza'
let str1 = 'abcxyz';    
let outcome  = '';         
for (let i = 0; i < str.length; i++) {
    let char = str[i];   
    outcome += String.fromCharCode(char.charCodeAt(0) + 1);
}

console.log(result);


