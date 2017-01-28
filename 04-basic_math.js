// From codewars.com by Edxael  (that’s me)

// ------------------------------------------------------------------------------------------------------------------------
//   Description:
//
//   Your task is to create a function - basic_op().
//
//   The function should take three arguments - operation(string/char), value1(number), value2(number). The function should return result of numbers after applying the chosen operation.
//
//   Examples:
//
//   basicOp('+', 4, 7)         // Output: 11
//   basicOp('-', 15, 18)       // Output: -3
//   basicOp('*', 5, 5)         // Output: 25
//   basicOp('/', 49, 7)        // Output: 7
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
//  7
// ----------------------------------------------------


// Note:  The following code is not written by me, it was created by another user of codewars.com it belongs to the user: rollietikes

function basicOp(o, a, b) {
  return eval(a+o+b);
}