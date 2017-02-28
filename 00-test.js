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

console.log("Paricutin");

function cartesianNeighbor(x, y){
    console.log(x,y);
    var arr = [];
    for(var a = (x - 1); a <= (x + 1); a++){
        for(var b = (y - 1); b <= (y + 1); b++){

            if(a === x && b === y){
                // console.log("saltillo: " + a + " - " +  b);
                continue;
            }else{
                // console.log([a,b]);
                arr.push([a,b]);
            }

        }
    }
    return arr;
}

var x = 2;
var y = 2;
console.log(cartesianNeighbor(x, y));

// ----------------------------------------------------
//       Run Output
//
//  3
// ----------------------------------------------------


// Note:  The following code is not written by me, it was created by another user of codewars.com
// it belongs to the user: msharp9
