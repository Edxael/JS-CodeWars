// 20-Character-limits.js
// From codewars.com by Edxael  (that’s me)
// https://www.codewars.com/kata/character-limits-how-long-is-your-piece-of-string/train/javascriptt

// ------------------------------------------------------------------------------------------------------------------------
//    Description:
//
// Cara is applying for several different jobs. The online application forms ask her to respond within a specific character count. Cara needs to check that her answers fit into the character limit.
// .
// Annoyingly, some application forms count spaces as a character, and some don't.
// .
// Your challenge:
// .
// Write Cara a function charCheck() with the arguments:
// .
// "text": a string containing Cara's answer for the question
// "max": a number equal to the maximum number of characters allowed in the answer
// "spaces": a boolean which is True if spaces are included in the character count and False if they are not
// The function charCheck() should return an array: [True, "Answer"] , where "Answer" is equal to the original text, if Cara's answer is short enough.
// .
// If her answer "text" is too long, return an array: [False, "Answer"]. The second element should be the original "text" string truncated to the length of the limit.
// .
// For example:
// .
// charCheck("Cara Hertz", 10, True) should return [ True, "Cara Hertz" ]
// charCheck("Cara Hertz", 9, False) should return [ True, "CaraHertz" ]
// charCheck("Cara Hertz", 5, True) should return [ False, "Cara " ]
// charCheck("Cara Hertz", 5, False) should return [ False, "CaraH" ]
// When the "spaces" boolean is False, the spaces are removed from the answer "text".
// ------------------------------------------------------------------------------------------------------------------------
    // CODE
function charCheck(text, max, spaces){

    if(spaces === true){

        if(text.length > max){
            text = text.split("");
            text.splice(max);
            text = text.join("");
            return [false, text];
        }else{
            return [true, text];
        }

    }else{

        if( (text.split(" ").join("").length) > max){

            text = text.split(" ").join("").split("");
            text.splice(max);
            text = text.join("");;
            return [false, text];

        }else{
            text = text.split(" ").join("");
            return [true, text];
        }

    }
}


var text = "As relevant experience.";
var max  = 90;
var spaces = false;

console.log(charCheck(text, max, spaces));
// ----------------------------------------------------
//       Run Output
//
//  [true, "Asrelevantexperience."]
// ----------------------------------------------------


// Note:  The following code is not written by me, it was created by another user of codewars.com
// it belongs to the user: ColeBeckwith

function charCheck(text, max, spaces){
  text = spaces? text : text.replace(/ /g, '');
  return [text.length <= max, text.substring(0, max)]
};
