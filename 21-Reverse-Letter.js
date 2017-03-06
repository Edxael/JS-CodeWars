// 21-Reverse-Letter.js
// From codewars.com by Edxael  (that’s me)
// https://www.codewars.com/kata/simple-fun-number-176-reverse-letter/train/javascript

// ------------------------------------------------------------------------------------------------------------------------
//    Description:
//
// Given a string str, reverse it omitting all non-alphabetic characters.
// Example
// .
// For str = "krishan", the output should be "nahsirk".
// .
// For str = "ultr53o?n", the output should be "nortlu".
// Input/Output
// .
// [input] string str
// .
// A string consists of lowercase latin letters, digits and symbols.
// [output] a string
// ------------------------------------------------------------------------------------------------------------------------
    // CODE

function reverseLetter(str) {

    var arr = str.split("");

    for(var x = 0; x < arr.length; x++){
        if( arr[x].match( /[a-zA-Z]/ ) ){
        }else{
            delete arr[x];
        }
    }

    arr = arr.filter(function(n){return n != undefined}).reverse();
    return str = arr.join("");
}


let str = "krish21an";
console.log(reverseLetter(str));
// ----------------------------------------------------
//       Run Output
//
//  nahsirk
// ----------------------------------------------------


// Note:  The following code is not written by me, it was created by another user of codewars.com
// it belongs to the user: Roman93

reverseLetter=(s)=>s.replace(/[^a-z]/gi,'').split('').reverse().join('');
