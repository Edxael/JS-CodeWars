
console.log("This is a Holder file");
// ---------------------------------


function getMiddle(s){

    if(s.length % 2 === 0){
        // console.log(s);
        // console.log(s.length);
        // console.log(s.length / 2);
        console.log( s[((s.length / 2)-1)] + s[(s.length / 2)] );
    }else{
        // console.log("Pos Noo");
        // console.log(s);
        // console.log(s.length);
        // console.log(Math.floor(s.length / 2));
        console.log(s[Math.floor(s.length / 2)]);
    }


}
