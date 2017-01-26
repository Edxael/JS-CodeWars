// Description:
//
// "Keep up the hoop"
// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him
//
// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
//
// -If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// -If he doesn't get 10 hoops, return the string "Keep at it until you get it".
//
// From codewars.com by Edxael  (that’s me)

function hoopCount (n) {
      return  (n < 10) ?  "Keep at it until you get it" :  "Great, now move on to tricks" ;
}


var n = 18;
console.log(hoopCount (n));

// ----------------------------------------------------
//       Run Output
//
// Great, now move on to tricks
// ----------------------------------------------------


// Note:  The following code is not written by me, it was created by another user of codewars.com it belongs to the user: Balkoth

function hoopCount (n) {
  return (n < 10) ? 'Keep at it until you get it' : 'Great, now move on to tricks';
}
