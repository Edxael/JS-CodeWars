// From codewars.com by Edxael  (that’s me)

// ------------------------------------------------------------------------------------------------------------------------
// Description:
// .
// This is the first step to understanding FizzBuzz.
// .
// Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.
// .
// Your expected outputs: an array of positive integers from 1 to n
// .
// Your job is to write an algorithm that gets you from the input to the output.
// ------------------------------------------------------------------------------------------------------------------------

function basicOp(operation, value1, value2){
      if (operation === "+"){
            return value1 + value2;
      }
      else if (operation === "-"){
            return value1 - value2;
      }
      else if (operation === "*"){
            return value1 * value2;
      }
      else if (operation === "/"){
            return value1 / value2;
      }
}

operation = "/";
value1 = 49;
value2 = 7;
console.log(basicOp(operation, value1, value2));



// ----------------------------------------------------
//       Run Output
//
//  [1, 2, 3, 4, 5]
// ----------------------------------------------------


// Note:  The following code is not written by me, it was created by another user of codewars.com it belongs to the user: Rastalamm
