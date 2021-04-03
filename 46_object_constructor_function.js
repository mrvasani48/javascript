// object constrctor function
var dj = function (){
    this.son1="s d vasani";
    this.son2="a d vasani";
    this.son3="g d vasani";
    this.son4="k d vasani ";
    this.sons=function(){
        document.write("<br>"+this.son1+"<br>"+this.son2+"<br>"+this.son3+"<br>"+this.son4+"<br>")
    }
};
var kishan =new dj();
kishan.sons();
console.log(kishan);    

//  example constructor object
var kishan =new Object();
kishan.name="vasa";
console.log(kishan.name);


