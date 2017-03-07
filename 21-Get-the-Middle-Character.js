// 21-Get-the-Middle-Character.js
// From codewars.com by Edxael  (that’s me)
// https://www.codewars.com/kata/get-the-middle-character/train/javascript

// ------------------------------------------------------------------------------------------------------------------------
//    Description:
//
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
// .
// Examples:
// .
// Kata.getMiddle("test") should return "es"
// .
// Kata.getMiddle("testing") should return "t"
// .
// Kata.getMiddle("middle") should return "dd"
// .
// Kata.getMiddle("A") should return "A"
// Input
// .
// A word (string) of length 0 < str < 1000
// .
// Output
// .
// The middle character(s) of the word represented as a string.
// ------------------------------------------------------------------------------------------------------------------------
    // CODE

function getMiddle(s){
    return (s.length % 2 === 0) ? s[((s.length / 2)-1)] + s[(s.length / 2)] : s[Math.floor(s.length / 2)];
}

let s = "Middle";
console.log(getMiddle(s));
// ----------------------------------------------------
//       Run Output
//
//  dd
// ----------------------------------------------------


// Note:  The following code is not written by me, it was created by another user of codewars.com
// it belongs to the user: Oksana

function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}
