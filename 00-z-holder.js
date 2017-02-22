
console.log("This is a Holder file");
// ---------------------------------

console.log("Tetona");
console.log("");

function makeParts(arr, chunkSize) {
    console.log(arr);
    console.log(chunkSize);
    console.log(" ");

    var times = Math.ceil(arr.length / chunkSize);
    console.log("will run: " + times);
    var holder = [];
    console.log("resultados:");

    for(var x=0; x<times; x++){
        console.log("Inside round: " + (x+1));
        holder.push(  arr.splice(0,2)  );
    }
    console.log(holder);
    return holder;
}
