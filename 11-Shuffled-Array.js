// 11-Shuffled-Array.js
// From codewars.com by Edxael  (that’s me)
// https://www.codewars.com/kata/simple-fun-number-87-shuffled-array/javascript

// ------------------------------------------------------------------------------------------------------------------------
//    Description:
//
// A noob programmer was given two simple tasks: sum and sort the elements of the given array arr = [a1, a2, ..., an].
// .
// He started with summing and did it easily, but decided to store the sum he found in some random position of the original array which was a bad idea. Now he needs to cope with the second task, sorting the original array arr, and it's giving him trouble since he modified it.
// .
// Given the array shuffled, consisting of elements a1, a2, ..., an, and their sumvalue in random order, return the sorted array of original elements a1, a2, ..., an.
// ------------------------------------------------------------------------------------------------------------------------

function shuffledArray(shuffled) {
  function asum(pv, cv, index, array) { return pv + cv; }
  var total = shuffled.reduce(asum);

  for(var x=0; x < shuffled.length; x++){
    if( (total - shuffled[x]) == shuffled[x] ){
      shuffled[x] = undefined;
      break;
    }
  }

  shuffled.sort(function(a, b) {return a - b;});
  shuffled.pop();
  return shuffled;
}

shuffled = [1, -3, -5, 7, 2];
console.log(shuffledArray(shuffled));

// ----------------------------------------------------
//       Run Output
//
//  [-5, -3, 2, 7]
// ----------------------------------------------------


// Note:  The following code is not written by me, it was created by another user of codewars.com
// it belongs to the user: myjinxin2015

function shuffledArray(shuffled) {
  var target=shuffled.reduce((a,b)=>a+b,0)/2,r=shuffled.slice(),
      idx=r.indexOf(target)
  r.splice(idx,1)
  return r.sort((a,b)=>a-b)
}
