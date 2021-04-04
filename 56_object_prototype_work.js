var mobile = function (model,ram){
    this.model=model;
    this.ram=ram;
   // this.color="red";
};
mobile.prototype.color="gray";
var samsung=new mobile(12,23);
var nokia =new mobile(2112,45);
console.log(Object.getPrototypeOf(mobile));
console.log(Object.getPrototypeOf(mobile.prototype));
console.log(Object.getPrototypeOf(samsung));
console.log(Object.getPrototypeOf(nokia));
console.log(samsung.__proto__);
console.log(nokia.__proto__);
console.log(Object.getPrototypeOf(samsung.__proto__));
console.log(Object.getPrototypeOf(nokia.__proto__));
console.log(Object.prototype);
document.write(nokia.color);
