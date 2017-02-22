// 14-Reverse-Words.js
// From codewars.com by Edxael  (that’s me)
// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

// ------------------------------------------------------------------------------------------------------------------------
//    Description:
//
// Write a reverseWords function that accepts a string a parameter, and reverses each word in the string. Every space should stay, so you cannot use words from Prelude.
// .
// Example:
// .
// reverseWords("This is an example!"); // returns  "sihT si na !elpmaxe"
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
//  sihT si na !elpmaxe
// ----------------------------------------------------


// Note:  The following code is not written by me, it was created by another user of codewars.com
// it belongs to the user: mrkishi
