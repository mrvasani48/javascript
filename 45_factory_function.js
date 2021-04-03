//withaout parameter
function mobile (){
    return {
        model:"m21",
        prise:20000
    }
}
var samsung= mobile();
document.write(samsung.model+"<br>"+samsung.prise);
// with parameter
function mobile1(a,b){
    return {
        model:a,
        prise:b
    }
}
var samsung= mobile1("m21",20000);
console.log(samsung.model+" "+samsung.prise );
var lg= mobile1("lg1",19000);
console.log(lg.model+"  "+lg.prise );
console.log("     ");

//
function mobile1(a,b){
    return {
        model:a,
        prise:b,
        discount : function (){
            return ("  "+"if you use boi credit card , you will recieve 2k")
        }
    } 
}
var samsung= mobile1("m21",20000);
console.log(samsung.model+" "+samsung.prise +samsung.discount() );
var lg= mobile1("lg1",19000);
console.log(lg.model+"  "+lg.prise +lg.discount() );
// factory function 
function ned (){
    return({
        son1:"kishan",
        son2:"gopal "}
    )
};
var dj =ned();
document.write(dj.son1+"<bR>"+dj.son2);
