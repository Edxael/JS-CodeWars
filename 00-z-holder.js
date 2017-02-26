
console.log("This is a Holder file");
// ---------------------------------


function getLosAngelesPoints(results) {
    var arr = [];
    var total = 0;




        for(var x = 0; x < results.length; x++){
            console.log(results[x][0]);
            var str = results[x][0].split("");
            function hasNumbers(str){return /\d/.test(str);};
            str = hasNumbers(str);

            console.log(str);
            console.log(" ");

          if( (results[x][0].startsWith("Los Angeles "))  && ( !str ) ){
              arr = results[x][1].split(":");
                    console.log(results[x][0]);
                    console.log(parseInt(arr[0]));
              total += parseInt(arr[0]);
              console.log(total);
              console.log("");
          }

        }
    console.log(" ");
    return total;
}












// ----------------------------------
function getLosAngelesPoints(results) {
    var arr = [];
    var total = 0;

        for(var x = 0; x < results.length; x++){

          if(results[x][0].startsWith("Los Angeles ")){
              arr = results[x][1].split(":");
              total += parseInt(arr[0]);
          }

        }

    return total;
}
