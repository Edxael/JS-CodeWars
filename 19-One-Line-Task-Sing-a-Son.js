// 19-One-Line-Task-Sing-a-Song.js
// From codewars.com by Edxael  (that’s me)
// https://www.codewars.com/kata/one-line-task-sing-a-song/javascript

// ------------------------------------------------------------------------------------------------------------------------
//    Description:
//
// Task: Returns the correct song ^_^
// ------------------------------------------------------------------------------------------------------------------------
    // CODE

function singSong(a,b){

  if(b === undefined){
      var jn = (/[aeiouAEIOU]/.test(a.charAt(0))) ? "an " : "a ";
      return ("I have " + jn + a + ".");
  }else if (a === b) {
      return ("I have two " + a + "s.");
  } else{
      a = a.charAt(0).toUpperCase() + a.slice(1);
      return ("Uhh! " + a + "-" + b + "!");
  }

}

var a = "apple";
var b = "apple";
console.log(singSong(a, b));


// ----------------------------------------------------
//       Run Output
//
//  I have two apples.
// ----------------------------------------------------


// Note:  The following code is not written by me, it was created by another user of codewars.com
// it belongs to the user: ZozoFouchtra

function singSong(a,b){
  return b ? ( a==b ? `I have two ${a}s.` : `Uhh! ${a[0].toUpperCase()+a.slice(1)}-${b}!` ) : `I have a${/[aeiou]/i.test(a[0]) ? "n":""} ${a}.`
}
