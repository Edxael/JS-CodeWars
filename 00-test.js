// 11-Shuffled-Array.js
// From codewars.com by Edxael  (that’s me)
// https://www.codewars.com/kata/simple-fun-number-87-shuffled-array/javascript

// ------------------------------------------------------------------------------------------------------------------------
//    Description:
//
//
// ------------------------------------------------------------------------------------------------------------------------

function createArrayOfTiers(num) {
  var holder = [];
  var str = (num.toString()).split("");

  for(var x=0; x<str.length; x++){
    holder[x] = str.slice(0,(x + 1)).join("");
  }
  return holder;
}

var num = 2017;
console.log(createArrayOfTiers(num));

// ----------------------------------------------------
//       Run Output
//
//  [-5, -3, 2, 7]
// ----------------------------------------------------


// Note:  The following code is not written by me, it was created by another user of codewars.com
// it belongs to the user: myjinxin2015
