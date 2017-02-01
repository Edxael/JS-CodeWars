// 06-Calculate-Average
// From codewars.com by Edxael  (that’s me)
// https://www.codewars.com/kata/calculate-average/javascript

// ------------------------------------------------------------------------------------------------------------------------
//   Description:
//
//  Write function avg which calaculates average of numbers in given list.
// ------------------------------------------------------------------------------------------------------------------------

function boredom(staff){

      var char = {accounts: 1, finance: 2, canteen: 10, regulation: 3, trading: 6, change: 6, IS: 8, retail: 5, cleaning: 4, pissing_about: 25  }
      var arr1 = [];      // (Object.values(staff));
      var arr2 = [];
      var names = ["tim", "jim", "randy", "sandy", "andy", "katie", "laura", "saajid", "alex", "john", "mr"];

      for(var  x = 0; x < names.length; x++){
            arr1.push(staff[names[x]]);
      }

      for(var x = 0; x < arr1.length; x++){
            var holder = arr1[x].replace(" ", "_");
            arr2.push(char[holder]);
      }

      var total = arr2.reduce(function(pv, cv){return pv + cv});

      if(total < 81){return "kill me now" } else if(total > 99) {return "party time!!"} else {return "i can handle this"}

}


var staff = {tim: 'change', jim: 'accounts',
  randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
  laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
  mr: 'finance' } ;

 console.log( boredom(staff) );

// ----------------------------------------------------
//       Run Output
//
//  5
// ----------------------------------------------------


// Note:  The following code is not written by me, it was created by another user of codewars.com it belongs to the user: danielsnewman

// function find_average(array) {
//   var sum = array.reduce((a, b) => a + b, 0);
//   return sum/array.length;
// }
// find_average(array)




// {tim: 'change', jim: 'accounts',
//   randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
//   laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
//   mr: 'finance' }

//   {tim: 'IS', jim: 'finance',
//   randy: 'pissing about', sandy: 'cleaning', andy: 'cleaning',
//   katie: 'cleaning', laura: 'pissing about', saajid: 'regulation',
//   alex: 'regulation', john: 'accounts', mr: 'canteen' }

//   { tim: 'accounts', jim: 'accounts',
//   randy: 'pissing about', sandy: 'finance', andy: 'change',
//   katie: 'IS', laura: 'IS', saajid: 'canteen', alex: 'pissing about',
//   john: 'retail', mr: 'pissing about' }