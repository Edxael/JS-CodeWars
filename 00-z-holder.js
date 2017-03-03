
console.log("This is a Holder file");
// ---------------------------------

console.log("Hello");

function group(arr) {
    console.log(arr);
    var sets =[["E"]];
    var y = 0;

    arr = arr.sort(function(a, b){return a - b});
    console.log(arr);

    for(var x = 0; x < arr.length; x++){
        if(arr[x] === sets[y][0]){
            sets[y].push(arr[x]);
        }else{
            sets.push([arr[x]]);
            y += 1;
        }
    }
    console.log(" ");
    console.log("sets");
    console.log(sets);

}
