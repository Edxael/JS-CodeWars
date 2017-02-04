// 08-Remove-end-Exclamations.js
// From codewars.com by Edxael  (that’s me)
// https://www.codewars.com/kata/exclamation-marks-series-number-2-remove-all-exclamation-marks-from-the-end-of-sentence/javascript

// ------------------------------------------------------------------------------------------------------------------------
//    Description:
//
// Remove all exclamation marks from the end of sentence.
// Examples
//
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"
// ------------------------------------------------------------------------------------------------------------------------

function replace(s){
console.log("Hello");
  return s = s.replace(/[aeiou]/g, "!");

}

var s = "aeiou";
console.log(replace(s));



// ----------------------------------------------------
//       Run Output
//
//  Les!!!Hi
// ----------------------------------------------------


// Note:  The following code is not written by me, it was created by another user of codewars.com it belongs to the user: Chrono79
