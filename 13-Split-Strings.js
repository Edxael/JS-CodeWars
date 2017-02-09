// 13-Split-Strings.js
// From codewars.com by Edxael  (that’s me)
// https://www.codewars.com/kata/split-strings/javascript

// ------------------------------------------------------------------------------------------------------------------------
//    Description:
//
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
// .
// Examples:
// .
// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']
// ------------------------------------------------------------------------------------------------------------------------

function solution(str){
   str = "evangelion";
   var groups = str.match(/.{1,2}/g);

   if (((groups[groups.length-1]).length) == 2){
       return groups;
   } else {
       groups[groups.length-1] += "_";
       return groups;
   }

}

str = "evangelions";
console.log(solution(str));
// ----------------------------------------------------
//       Run Output
//
//  ["ev", "an", "ge", "li", "on", "s_"]
// ----------------------------------------------------


// Note:  The following code is not written by me, it was created by another user of codewars.com
// it belongs to the user: JasonLough

function solution(str) {
  return (str.length % 2 ? str + '_' : str).match(/../g);
}
