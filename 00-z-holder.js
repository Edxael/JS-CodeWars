
console.log("This is a Holder file");
// ---------------------------------

var str = "leonesa";
console.log(str);
console.log("");

var groups = str.match(/.{1,2}/g);
console.log(groups);
console.log((groups[groups.length-1]).length);

groups[groups.length-1] += "_";
console.log(groups[groups.length-1]);
console.log((groups[groups.length-1]).length);
