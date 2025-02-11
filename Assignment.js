// 1. WAP to reverse a string
// 	input:- 'sachin'
// 	output:- 'nihcas'

// 2. WAP to reverse words
// 	input:- 'This is javascript class'
// 	output:- 'class javascript is this'

// 3. WAP to print the first non-repeated character in a string
//    input:- 'entertainment'
//    output:- r
   
// 4. WAP to print a string in title case
// 	input:- 'this is javascript class'
//    output:- 'This Is Javascript Class'
	
// 5. WAP to find longest word in a sentence
// 	input:- 'this is javascript class'
//     output:- javascript
	
// 6. WAP to print Account number
//    input:- '12345678987'
//    output:- '12*******87'
   
// 7. WAP to print Credit-card number
//    input:- '1111222233334444'
//    output:- '1111-2222-3333-4444'
   
// 8. WAP to check if 2 strings are anagram or not
// 	'listen' - 'silent'    anagram(every char of str1 should be there in str2)
	
// 9. WAP to remove special character from a string
//    input:- 'hello@#hi&'
//    output:- 'hellohi'
   
// 10. WAP to move all the special characters to the end of the string
// 	input:- 'hello@#hi&'
//    output:- 'hellohi@#&'
	 



//1-----------------------------------------------------------------------------------------------------------------
let str = "sachin";
let reversedStr = str.split('').reverse().join('');
console.log(reversedStr);

//2-----------------------------------------------------------------------------------------------------------------
let str2 = 'This is javascript class';
// Split the string into an array of words, reverse the array, and join the words back into a string
let revStr = str2.split(' ').reverse().join(' ');
console.log(revStr);  // Output: 'class javascript is This'

//3-----------------------------------------------------------------------------------------------------------------
let str3 = 'entertainment'; // r
    
    for(char of str3)
    {
        if(str3.indexOf(char) == str3.lastIndexOf(char)){
            console.log(char); // prints the non repeated chars in string as their first index and last index of that char will be same as they are only once in that string
            break; //if we need only first non repeated char , we can use break and cut the loop
        }
    }

//4-----------------------------------------------------------------------------------------------------------------
let str4 = "this is javascript class";
let titleCaseStr = str4.replace(/\b\w/g, char => char.toUpperCase());
//\b: Word boundary, matches the first letter of each word. \w: Matches any word character (letters, numbers, etc.).  char => char.toUpperCase(): Converts the first character of each word to uppercase.
console.log(titleCaseStr); // Output: This Is Javascript Class

//5-----------------------------------------------------------------------------------------------------------------
let str5 = "this is javascript class";
let words = str5.split(" "); //where ever there is a space, it splits the words
let longestWord = "";

for (let word of words) {
    if (word.length > longestWord.length) {
        longestWord = word;
    }
}
console.log(longestWord); // Output: javascript

//6-----------------------------------------------------------------------------------------------------------------
let accountNumber = "12345678987";
let maskedNumber = accountNumber.substring(0, 2) + "*******" + accountNumber.substring(accountNumber.length - 2);

console.log(maskedNumber); // Output: 12*******87

//7-----------------------------------------------------------------------------------------------------------------
let num = "1111222233334444";
let formatted = num.match(/.{1,4}/g).join('-');
console.log(formatted); // Output: 1111-2222-3333-4444

//8-----------------------------------------------------------------------------------------------------------------
let str7 = 'listen';
let str8 = 'silent';
function areAnagrams(str7, str8) {
    // Sort both strings and compare
    return str7.split('').sort().join('') === str8.split('').sort().join('');
}
console.log(areAnagrams(str7, str8));

//9-----------------------------------------------------------------------------------------------------------------
let str9 = 'hello@#hi&';
let result = removeSpecialCharacters(str9);
function removeSpecialCharacters(str9) {
    // Replace all non-alphanumeric characters with an empty string
    return str9.replace(/[^a-zA-Z0-9]/g, '');
}
console.log(result);

//10-----------------------------------------------------------------------------------------------------------------
let str10 = 'hello@#hi&';
let reslt = moveSpecialCharsToEnd(str10);
function moveSpecialCharsToEnd(str10) {
    // Filter alphanumeric characters and special characters
    let letters = str10.replace(/[^a-zA-Z0-9]/g, '');
    let specialChars = str10.replace(/[a-zA-Z0-9]/g, '');
    
    // Combine letters and special characters
    return letters + specialChars;
}
console.log(reslt);
