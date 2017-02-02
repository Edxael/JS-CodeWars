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


function remove(s){

  var arr = s.split("").reverse();

  for(var x = 0; x <= arr.length; x++){

    if(arr[x] == "!"){arr[x] = null;}
    else if (arr[x] != "!") {break;}

  }

  return arr.reverse().join("");
}

    // Variable and calling function
var s = "Les!!!Hi!!!!";
console.log(remove(s));


// ----------------------------------------------------
//       Run Output
//
//  Les!!!Hi
// ----------------------------------------------------


// Note:  The following code is not written by me, it was created by another user of codewars.com it belongs to the user: Chrono79

const remove = s => s.replace(/!+$/, '');
