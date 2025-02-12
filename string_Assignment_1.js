
// 1. WAP to reverse a string
// 	input:- 'sachin'
// 	output:- 'nihcas'
function reverseString(str){
    return str.split('').reverse().join('') 
}
console.log(reverseString('sachin'));

// 2. WAP to reverse words
// 	input:- 'This is javascript class'
// 	output:- 'class javascript is this'

function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
}
console.log(reverseWords('This is javascript class')); 

// 3. WAP to print the first non-repeated character in a string
//    input:- 'entertainment'
//    output:- r

function firstNonRepeatedChar(str) {
    for (let char of str) {
        if (str.indexOf(char) === str.lastIndexOf(char))
         {
            return char;
        }
    }
    return null;
}
console.log(firstNonRepeatedChar('entertainment')); // Output: 'r'

   
// 4. WAP to print a string in title case
// 	input:- 'this is javascript class'
//    output:- 'This Is Javascript Class'

function inTitleCase(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(inTitleCase('this is javascript class'));


// 5. WAP to find longest word in a sentence
// 	input:- 'this is javascript class'
//     output:- javascript
let str = "this is javascript class";
let words = str.split(" "); //where ever there is a space, it splits the words
let longestWord = "";

for (let word of words) {
    if (word.length > longestWord.length) {
        longestWord = word;
    }
}
console.log(longestWord); // Output: javascript


	
// 6. WAP to print Account number
//    input:- '12345678987'
//    output:- '12*******87'
function maskAccountNumber(accountNumber) {
    return accountNumber.slice(0, 2) + '*'.repeat(accountNumber.length - 4) + accountNumber.slice(-2);
}
console.log(maskAccountNumber('12345678987'));
   
// 7. WAP to print Credit-card number
//    input:- '1111222233334444'
//    output:- '1111-2222-3333-4444'
function creditCardNumber(cardNumber) {
    return cardNumber.match(/.{1,4}/g).join('-');
}
console.log(creditCardNumber('1111222233334444'));
   
// 8. WAP to check if 2 strings are anagram or not
// 	'listen' - 'silent'    anagram(every char of str1 should be there in str2)
function areAnagrams(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}
console.log(areAnagrams('listen', 'silent'));
	
// 9. WAP to remove special character from a string
//    input:- 'hello@#hi&'
//    output:- 'hellohi'
function removeSpecialCharacters(str) {
    return str.replace(/[^a-zA-Z0-9]/g, '');
}
console.log(removeSpecialCharacters('hello@#hi&'));
   
// 10. WAP to move all the special characters to the end of the string
// 	input:- 'hello@#hi&'
//    output:- 'hellohi@#&'
function moveSpecialCharactersToEnd(str) {
    let lettersAndNumbers = str.replace(/[^a-zA-Z0-9]/g, '');
    let specialChars = str.replace(/[a-zA-Z0-9]/g, '');
    return lettersAndNumbers + specialChars;
}
console.log(moveSpecialCharactersToEnd('hello@#hi&')); // Output: 'hellohi@#&' -->






