// 10-Replace-all-vowels.js
// From codewars.com by Edxael  (that’s me)
// https://www.codewars.com/kata/exclamation-marks-series-number-11-replace-all-vowel-to-exclamation-mark-in-the-sentence/javascript

// ------------------------------------------------------------------------------------------------------------------------
//    Description:
//
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
// Examples
// .
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"
// ------------------------------------------------------------------------------------------------------------------------

function replace(s){
  return s = s.replace(/[aeiouAEIOU]/g, "!");
}

var s = "aeiou";
console.log(replace(s));


// ----------------------------------------------------
//       Run Output
//
//  !!!!!
// ----------------------------------------------------


// Note:  The following code is not written by me, it was created by another user
// of codewars.com it belongs to the user: Iv.D

function replace(s){
  return s.replace(/[aeoiu]/ig, '!');
}
