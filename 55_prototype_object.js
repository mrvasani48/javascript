

var s1= {};
document.write(typeof(s1));
console.log(Object.getPrototypeOf(s1));
console.log(Object.prototype)
console.log(Object.getPrototypeOf(Object.prototype));

var s2=new  String();
document.write(typeof(s2));
console.log(Object.getPrototypeOf(s2));
console.log(Object.getPrototypeOf(String.prototype));
console.log(Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));

var s3=new Array();
document.write(typeof(s3));
console.log(Object.getPrototypeOf(s3));
console.log(Object.getPrototypeOf(Array.prototype));
console.log(Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));

var s4=new Object();
document.write(typeof(s4));
console.log(Object.getPrototypeOf(s4));
console.log(Object.getPrototypeOf(Object.prototype));
console.log(Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));

var mobile= new String();
console.log(Object.getPrototypeOf(mobile));
console.log(Object.getPrototypeOf(String.prototype));
console.log(Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));

var mobile = function (model,ram){
    this.model=model;
    this.ram=ram;
};
var samsung=new mobile(12,23);
var nokia =new mobile(2112,45)

//object of protype
console.log(Object.prototype);

//protype of Object.prototype
console.log(Object.getPrototypeOf(Object.prototype));//null

//protype of samsung and nokia
console.log(Object.getPrototypeOf(samsung));
console.log(Object.getPrototypeOf(nokia));

//
var a=()=>{};
console.log(Object.getPrototypeOf(a));
var b =  {};
console.log(Object.getPrototypeOf(b));

var a1 = new Object();
console.log(Object.getPrototypeOf(a1));

//

var mob = function(name){this.name=name;};

console.log(Object.getPrototypeOf(mobile));
console.log(Object.getPrototypeOf(mobile.__proto__));//same mobile.__prototype
console.log(Object.prototype);//same mobile.__prototype
console.log(Object.getPrototypeOf(Object.prototype));//null
var samsung = new mob("m21");
console.log(samsung.name);
console.log(Object.getPrototypeOf(samsung));//same mobile.prototype 
console.log(mobile.prototype);
