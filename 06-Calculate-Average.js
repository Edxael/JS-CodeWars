// 06-Calculate-Average
// From codewars.com by Edxael  (that’s me)
// https://www.codewars.com/kata/calculate-average/javascript

// ------------------------------------------------------------------------------------------------------------------------
//   Description:
//
//  Write function avg which calaculates average of numbers in given list.
// ------------------------------------------------------------------------------------------------------------------------

function find_average(array) {

      function asum(pv, cv, index, arr) {
            return pv + cv;
      }

      return (array.reduce(asum) / array.length);
}

array = [2, 10, 2, 2, 10, 4];
console.log(  find_average(array)  );

// ----------------------------------------------------
//       Run Output
//
//  5
// ----------------------------------------------------


// Note:  The following code is not written by me, it was created by another user of codewars.com it belongs to the user: danielsnewman

// function find_average(array) {
//   var sum = array.reduce((a, b) => a + b, 0);
//   return sum/array.length;
// }
// find_average(array)