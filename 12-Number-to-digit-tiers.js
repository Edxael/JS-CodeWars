// 12-Number-to-digit-tiers.js
// From codewars.com by Edxael  (that’s me)
// https://www.codewars.com/kata/number-to-digit-tiers/javascript

// ------------------------------------------------------------------------------------------------------------------------
//    Description:
//
// Create a function that takes a number and returns an array of strings containing the number cut off at each digit.
// .
// For example:
// .
// 420 should return ["4", "42", "420"]
// .
// 2017 should return ["2", "20", "201", "2017"]
// .
// 2010 should return ["2", "20", "201", "2010"]
// .
// 4020 should return ["4", "40", "402", "4020"]
// .
// 80200 should return ["8", "80", "802", "8020", "80200"]
// .
// PS: The input is guaranteed to be an integer in the range [0, 1000000].
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
//  ["2", "20", "201", "2017"]
// ----------------------------------------------------


// Note:  The following code is not written by me, it was created by another user of codewars.com
// it belongs to the user: St3f4n

createArrayOfTiers=n=>(n+'').split``.map((n,i,a)=>a.slice(0,-~i).join``)
