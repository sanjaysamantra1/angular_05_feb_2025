// WAP to print the first non-repeated character in a string
// input:- 'entertainment'
// output:- r
str = 'entertainment';

function firstNonRepeatedChar(str) {
    let charCount = {}; 
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let char of str) {
        if (charCount[char] === 1) {
            return char; 
        }
    }

    return null;
}
console.log("First non-repeated character:", firstNonRepeatedChar(str));

console.log('==============================================================');

//  WAP to print a string in title case
input= 'this is javascript class';
//    output:- 'This Is Javascript Class'
function toTitleCase(input) {
    return input
        .split(" ") 
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
        .join(" "); 
}console.log("print a string in title case:", toTitleCase(input));

console.log('==============================================================');

// WAP to find longest word in a sentence
//input1:- 'this is javascript class'
//     output:- javascript
sentence='this is javascript class';
function findLongestWordSort(sentence) {
    let words = sentence.split(" ");
    words.sort((a, b) => b.length - a.length); //desc
    return words[0]; 
}console.log("longest word in a sentence:", toTitleCase(sentence));

console.log('==============================================================');

// WAP to print Account number
//    input:- '12345678987'
//    output:- '12*******87'
accountNumber= '12345678987';
function HideAccountNumber(accountNumber) {
    if (accountNumber.length < 4) {
        return "Invalid account number";
    }

    let firstdig = accountNumber.slice(0, 2);
    let lastdig = accountNumber.slice(-2);  
    let hihded = "*".repeat(accountNumber.length - 4); // Asterisks for the middle part

    return firstdig + hihded + lastdig;
}console.log("HideAccountNumber:", HideAccountNumber(accountNumber));

console.log('==============================================================');

// WAP to print Credit-card number
//    input:- '1111222233334444'
//    output:- '1111-2222-3333-4444'

cardNumber='1111222233334444';
function CreditCardNumber(cardNumber) {
    let pattren = "";
    for (let i = 0; i < cardNumber.length; i++) {
        pattren += cardNumber[i];
        if ((i + 1) % 4 === 0 && i !== cardNumber.length - 1) {
            pattren += "-";
        }
    }
    return pattren;
}console.log("Formatted Credit Card Number:", CreditCardNumber(cardNumber));

console.log('==============================================================');


// 8. WAP to check if 2 strings are anagram or not
// 	'listen' - 'silent'    anagram(every char of str1 should be there in str2)

str1='listen';
str2='silent';
function Anagrams(str1, str2) {
    if (str1.length !== str2.length) return false;
    let charCount = {};
    for (let char of str1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let char of str2) {
        if (!charCount[char]) 
            return false;
        charCount[char]--;
    }

    return true;
}


console.log("Anagrams:"+Anagrams(str1, str2));

console.log('==============================================================');

// WAP to remove special character from a string
//    input:- 'hello@#hi&'
//    output:- 'hellohi'
str='hello@#hi&';
function removeSpecialChar(str) {
    return str.replace(/[^a-zA-Z0-9]/g, ""); 
}
console.log("Output:", removeSpecialChar(str));

console.log('==============================================================');

// 10. WAP to move all the special characters to the end of the string
// 	input:- 'hello@#hi&'
//    output:- 'hellohi@#&'
str='hello@#hi&';
function moveSpecialCharToLast(str) {
    let CharAndNum = str.split("").filter(char => /[a-zA-Z0-9]/.test(char)); 
    let specialChar = str.split("").filter(char => /[^a-zA-Z0-9]/.test(char));

    return CharAndNum.join("") + specialChar.join(""); 
}console.log("moveSpecialCharToLast:"+moveSpecialCharToLast(str));

console.log('==============================================================');