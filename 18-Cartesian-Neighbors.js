// 18-Cartesian-Neighbors.js
// From codewars.com by Edxael  (that’s me)
// https://www.codewars.com/kata/cartesian-neighbors/javascript

// ------------------------------------------------------------------------------------------------------------------------
//    Description:
//
// A Cartesian coordinate system is a coordinate system that specifies each point uniquely in a plane by a pair of numerical coordinates, which are the signed distances to the point from two fixed perpendicular directed lines, measured in the same unit of length.
// .
// The сoordinates of a point in the grid are written as (x,y). Each point in a coordinate system has eight neighboring points. Provided that the grid step = 1.
// .
// It is necessary to write a function that takes a coordinate on the x-axis and y-axis and returns a list of all the neighboring points. Points inside list don't have to been sorted (any order is valid).
// .
// For Example:
// .
// cartesianNeighbor(2,2) -> [[1,1],[1,2],[1,3],[2,1],[2,3],[3,1],[3,2],[3,3]]
// cartesianNeighbor(5,7) -> [[6,7],[6,6],[6,8],[4,7],[4,6],[4,8],[5,6],[5,8]]
// Also u can vote, rank and provide any feedback on the kata.
// ------------------------------------------------------------------------------------------------------------------------
    // CODE

console.log("Paricutin");

function cartesianNeighbor(x, y){
    console.log(x,y);
    var arr = [];
    for(var a = (x - 1); a <= (x + 1); a++){
        for(var b = (y - 1); b <= (y + 1); b++){

            if(a === x && b === y){
                console.log("saltillo: " + a + " - " +  b);
                continue;
            }else{
                console.log([a,b]);
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
//  [Array[2], Array[2], Array[2], Array[2], Array[2], Array[2], Array[2], Array[2]]
// ----------------------------------------------------


// Note:  The following code is not written by me, it was created by another user of codewars.com
// it belongs to the user: myjinxin2015

function cartesianNeighbor(x, y){
    return [[x-1, y-1], [x-1, y], [x-1, y+1], [x, y-1], [x, y+1], [x+1, y-1], [x+1,y], [x+1, y+1]];
}
