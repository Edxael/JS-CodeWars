
console.log("This is a Holder file");
// ---------------------------------

function reverseLetter(str) {
    console.log(str);

    var arr = str.split("");
    console.log(arr);

    for(var x = 0; x < arr.length; x++){
        if( arr[x].match( /[a-zA-Z]/ ) ){
            console.log("Yes: " + arr[x]);

        }else{
            console.log("Noooooooo: " + arr[x]);
            delete arr[x];
        }
    }

    console.log(" ");
    arr = arr.filter(function(n){return n != undefined}).reverse();
    console.log(arr);

    return str = arr.join("");

}
