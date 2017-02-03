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

function isLucky(ticket) {
    arr = ticket.split("");

    for(var x = 0; x < ticket.length; x++){
        arr[x] = parseInt(arr[x]);
    }

    var half1 = arr[0] + arr[1] + arr[2];
    var half2 = arr[3] + arr[4] + arr[5];

    return (half1 == half2)

}

var ticket = '100001';
console.log(isLucky(ticket));
// ----------------------------------------------------
//       Run Output
//
//  Les!!!Hi
// ----------------------------------------------------


// Note:  The following code is not written by me, it was created by another user of codewars.com it belongs to the user: Chrono79
