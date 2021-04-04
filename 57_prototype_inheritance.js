//inherit function 

function inherit (child,parents){
    child.prototype=Object.create(parents.prototype);
    child.prototype.constructor=child;
};

//supar class
var mobile1 = function(){
    this.ram=8;
    this.color="red";
    
};
mobile1.prototype.clr=12;
var samsung= new mobile1();

//sub class
var mobile2 = function(){
    this.btr=8000;
    //use call methis to inherit property
    mobile1.call(this);
};
//prototype inheritance
//mobile2.prototype=Object.create(mobile1.prototype);
//mobile2.prototype.constructor=mobile2;
inherit(mobile2,mobile1);  

var nokia= new mobile2();
console.log(nokia.btr);
console.log(nokia.ram); 
console.log(nokia.clr);
 

