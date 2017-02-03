// 09-Lucky-Bus-Ticket.js
// From codewars.com by Edxael  (that’s me)
// https://www.codewars.com/kata/lucky-bus-ticket

// ------------------------------------------------------------------------------------------------------------------------
//    Description:
//
// In Russia regular bus tickets usually consist of 6 digits. The ticket is called lucky when the sum of the first three digits equals to the sum of the last three digits. Write a function to find out whether the ticket is lucky or not. Return true if so, otherwise return false. Consider that input is always a string. Watch examples below.
// .
// isLucky('123321') => 1+2+3 = 3+2+1 => true // The ticket is lucky
// isLucky('12341234') => false // Only six-digit numbers allowed :(
// isLucky('12a21a') => false // Letters are not allowed :(
// isLucky('100200') => false // :(
// isLucky('22') => false // :(
// isLucky('abcdef') => false // :(
// ------------------------------------------------------------------------------------------------------------------------

function isLucky(ticket) {
    arr = ticket.split("");

    for(var x = 0; x < ticket.length; x++){
        arr[x] = parseInt(arr[x]);
    }

    var half1 = arr[0] + arr[1] + arr[2];
    var half2 = arr[3] + arr[4] + arr[5];

    return (half1 == half2)

}

var ticket = '100001';
console.log(isLucky(ticket));
// ----------------------------------------------------
//       Run Output
//
//  true
// ----------------------------------------------------


// Note:  The following code is not written by me, it was created by another user of codewars.com
// it belongs to the user: v1z

function isLucky(ticket) {
  return (/^\d{6}$/).test(ticket)
    ? ticket.slice(0, 3).split('').reduce((sum, e) => sum + +e, 0) === ticket.slice(3, 6).split('').reduce((sum, e) => sum + +e, 0)
    : false
}
