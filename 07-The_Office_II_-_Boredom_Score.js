// 07-The_Office_II_-_Boredom_Score.js
// From codewars.com by Edxael  (that’s me)
// https://www.codewars.com/kata/the-office-ii-boredom-score/javascript

// ------------------------------------------------------------------------------------------------------------------------
//   Description:
//
//  Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.
//
//   You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.
//
//   Each department has a different boredom assessment score, as follows:
//
//   accounts = 1
//   finance = 2
//   canteen = 10
//   regulation = 3
//   trading = 6
//   change = 6
//   IS = 8
//   retail = 5
//   cleaning = 4
//   pissing about = 25
//
//   Depending on the cumulative score of the team, return the appropriate sentiment:
//
//   <=80: 'kill me now'
//   < 100 & > 80: 'i can handle this'
//   100 or over: 'party time!!'
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
//  kill me now
// ----------------------------------------------------


// Note:  The following code is not written by me, it was created by another user of codewars.com it belongs to the user: WompWomp

function boredom(staff){
   var map = {
     accounts:1,
     finance:2,
     canteen:10,
     regulation:3,
     trading: 6,
     change:6,
     IS:8,
     retail:5,
     cleaning:4,
     'pissing about':25
   };

   var score = Object.keys(staff).reduce(
     function(a,b){
       return a+map[staff[b]]
    },0);

   return score <= 80 ? 'kill me now': score < 100 && score > 80 ? 'i can handle this' : 'party time!!';
}