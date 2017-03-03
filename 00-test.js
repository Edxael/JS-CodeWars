// 20-Character-limits.js
// From codewars.com by Edxael  (that’s me)
// https://www.codewars.com/kata/character-limits-how-long-is-your-piece-of-string/train/javascriptt

// ------------------------------------------------------------------------------------------------------------------------
//    Description:
//
// Cara is ahe character limit
// ------------------------------------------------------------------------------------------------------------------------
    // CODE
console.log("Hello");

function group(arr) {
    var sets =[["E"]];
    var y = 0;

    arr = arr.sort(function(a, b){return a - b});

    for(var x = 0; x < arr.length; x++){
        if(arr[x] === sets[y][0]){
            sets[y].push(arr[x]);
        }else{
            sets.push([arr[x]]);
            y += 1;
        }
    }

    sets.shift();
    return sets;
}

var arr = [3, 2, 6, 2, 1, 3];
console.log(group(arr));
// ----------------------------------------------------
//       Run Output
//
//  [true, "Asrelevantexperience."]
// ----------------------------------------------------


// Note:  The following code is not written by me, it was created by another user of codewars.com
// it belongs to the user: ColeBeckwith
