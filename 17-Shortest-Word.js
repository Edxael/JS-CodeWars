// 17-Shortest-Word.js
// From codewars.com by Edxael  (that’s me)
// https://www.codewars.com/kata/shortest-word/train/javascript

// ------------------------------------------------------------------------------------------------------------------------
//    Description:
//
// x Simple, given a string of words, return the length of the shortest word(s).
// .
// String will never be empty and you do not need to account for different data types.
// ------------------------------------------------------------------------------------------------------------------------
    // CODE

function findShort(s){
    var arr = s.split(" ").sort(function(a, b){return a.length - b.length;});
    return arr[0].length;
}

var s = "bitcoin take over the world maybe who knows perhaps";
console.log(findShort(s));

// ----------------------------------------------------
//       Run Output
//
//  3
// ----------------------------------------------------


// Note:  The following code is not written by me, it was created by another user of codewars.com
// it belongs to the user: robinab

function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}
