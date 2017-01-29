
// 05-Reversing_Words_in_a_String.js
// From codewars.com by Edxael  (that’s me)

// ------------------------------------------------------------------------------------------------------------------------
//   Description:
//
//  You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:
//
//  reverse('Hello World') === 'World Hello'
//  reverse('Hi There.') === 'There. Hi'
//  Happy coding!
// ------------------------------------------------------------------------------------------------------------------------

function reverse(string){
      return str2 = string.split(" ").reverse().join(" ");
}

string = 'Hi There.';
console.log(reverse(string));

// ----------------------------------------------------
//       Run Output
//
//  "There. Hi"
// ----------------------------------------------------


// Note:  The following code is not written by me, it was created by another user of codewars.com it belongs to the user: stripedpajamas

function reverse(string){
  return string.replace(/\s+/g, ' ').split(' ').reverse().join(' ');
}