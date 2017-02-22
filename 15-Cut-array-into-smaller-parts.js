// 15-Cut-array-into-smaller-parts.js
// From codewars.com by Edxael  (that’s me)
// https://www.codewars.com/kata/cut-array-into-smaller-parts/train/javascript

// ------------------------------------------------------------------------------------------------------------------------
//    Description:
//
// Write function makeParts that will take an array as argument and the size of the chunk.
// .
// Example: if an array of size 123 is given and chunk size is 10 there will be 13 parts, 12 of size 10 and 1 of size 3.
// ------------------------------------------------------------------------------------------------------------------------
    // String Reverse

function makeParts(arr, chunkSize) {
    var times = Math.ceil(arr.length / chunkSize);
    var holder = [];

    for(var x=0; x<times; x++){
        holder.push(  arr.splice(0,chunkSize)  );
    }

    return holder;
}

var arr = [1,2,3];
var chunkSize = 1;
console.log(makeParts(arr, chunkSize));
// ----------------------------------------------------
//       Run Output
//
//  [Array[1], Array[1], Array[1]]
// ----------------------------------------------------


// Note:  The following code is not written by me, it was created by another user of codewars.com
// it belongs to the user: !Nemo

function makeParts(arr, chunkSize) {
  var chunky = [],
      chunks = arr.length / chunkSize,
      i = 0;
  while(i < chunks) {
    chunky[i] = arr.splice(0, chunkSize);
    i++;
  }
  return chunky;
}
