//WAP to reverse a string input:- 'sachin' output:- 'nihcas'

let  s = "sachin";
let rev = s.split("").reverse("").join("");
console.log(rev);
console.log("======================================");

// let str = "sachin";
// let rev1 = str.toReversed();
// console.log(rev1);
// console.log("======================================");


// WAP to reverse words input:- 'This is javascript class'  output:- 'class javascript is this'

let c = "This is javacript class";
let rw = c.split("").reverse("").join("").toLowerCase("T");
console.log(rw);
console.log("======================================");

//WAP to print the first non-repeated character in a string  input:- 'entertainment',output:- r
let  i = "entertainment";
for(char of  i)
{
if(i.indexOf(char) == i.lastIndexOf(char)){
    console.log(char);
break;
}
}
console.log("======================================");

//WAP to print a string in title caseinput:- 'this is javascript class' output:- 'This Is Javascript Class'
function titlecase(str1){
    return str1.replace(/\b\w/g,char => char.toLowerCase());
    //\b: Word boundary, matches the first letter of each word. \w: Matches any word character (letters, numbers, etc.).  char => char.toUpperCase(): Converts the first character of each word to uppercase.
}
console.log(titlecase('this is javascript class'));
console.log("======================================");

//WAP to find longest word in a sentence input:- 'this is javascript class output:- javascript
let str2 = "this is javascript class";
let w = str2.split(" "); //where ever there is a space, it splits the words
let longest = "";

for (let word of w) {
    if (word.length > longest.length) {
        longest = word;
    }
}
console.log(longest);
console.log("======================================");

//WAP to print Account number input:- '12345678987' output:- '12*******87'
let accNum = "12345678987";
let todigit = accNum.substring(0, 2) + "*******" + accNum.substring(accNum.length - 2);

console.log(todigit);
console.log("======================================");


//WAP to print Credit-card number input:- '1111222233334444' output:- '1111-2222-3333-4444'
let num = "1111222233334444";
let formatted = num.match(/.{1,4}/g).join('-'); //.matches any character, {1,4} pattern should match 1 to 4,g:the pattern will match multiple instance throughout the entire string.
console.log(formatted); 
console.log("======================================");


//WAP to check if 2 strings are anagram or not 'listen' - 'silent'    anagram(every char of str1 should be there in str2)
let str3 = 'listen';
let str4 = 'silent';
function areAnagrams(str3, str4) {
    // Sort both strings and compare
    return str4.split('').sort().join('') === str3.split('').sort().join('');
}
console.log(areAnagrams(str3, str4));
console.log("======================================");


//WAP to remove special character from a string input:- 'hello@#hi&' output:- 'hellohi'
let str9 = 'hello@#hi&';
let result = removeSpecialCharacters(str9);

function removeSpecialCharacters(str9) {
    // Use a regular expression to replace non-alphanumeric characters with an empty string
    return str9.replace(/\W/g, '');
}

console.log(result);
console.log("======================================");

//WAP to move all the special characters to the end of the string input:- 'hello@#hi&' output:- 'hellohi@#&'

let str10 = 'hello@#hi&';
let reslt = moveSpecialCharsToEnd(str10);

function moveSpecialCharsToEnd(str10) {
    let letters = str10.replace(/[^a-zA-Z0-9]/g, '');
    let specialChars = str10.replace(/[a-zA-Z0-9]/g, '');
    return letters + specialChars;
}
console.log(reslt);










	









