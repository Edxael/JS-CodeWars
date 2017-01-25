// Description:
//
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// From codewars.com by Edxael  (that’s me)

		// My Code

function even_or_odd(number) {
	if (number % 2 == 0){
		return "Even" ;
	} else{
		return "Odd" ;
	}
}

number = 11;
console.log(even_or_odd(number));



// Note:  The following code is not written by me, it was created by another user of codewars.com it belongs to the user: Balkoth

function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even"
}