
console.log("This is a Holder file");
// ---------------------------------



var count = 0;
var locat = 0;
arrH = []
arrO = text.split("");

while(count <= max){

    if(arrO[locat] == " "){
        arrH.push(arrO[locat]);
        locat += 1;
    }else{
        arrH.push(arrO[locat]);
        locat += 1;
        count += 1;
    }

}
text = arrH.join("");
