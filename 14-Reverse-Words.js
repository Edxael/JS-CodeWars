// 14-Reverse-Words.js
// From codewars.com by Edxael  (that’s me)
// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

// ------------------------------------------------------------------------------------------------------------------------
//    Description:
//
// Write a reverseWords function that accepts a string a parameter, and reverses each word in the string. Every space should stay, so you cannot use words from Prelude.
// .
// Example:
// .
// reverseWords("This is an example!"); // returns  "sihT si na !elpmaxe"
// ------------------------------------------------------------------------------------------------------------------------

function reverseWords(str) {
    var arr = str.split(" ");

    for(var x = 0; x < arr.length; x++){
        arr[x] = arr[x].split("").reverse().join("") ;
    }
    return arr.join(" ");
}

str = "This is an example!";
console.log(reverseWords(str));

// ----------------------------------------------------
//       Run Output
//
//  sihT si na !elpmaxe
// ----------------------------------------------------


// Note:  The following code is not written by me, it was created by another user of codewars.com
// it belongs to the user: mrkishi

function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}
