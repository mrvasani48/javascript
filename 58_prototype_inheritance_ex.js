var mobile1 = function (model){
    this.model=model;
};

mobile1.prototype.getmodel=function(){return this.model};

var mobile2 = function (model,prise){
    this.model=model;
    this.prise=prise;
};
var mobile3 = function (model){
     mobile1.call(this,model)          
};


mobile2.prototype=Object.create(mobile1.prototype);
mobile2.prototype.constructor.constructor=mobile2;

mobile3.prototype=Object.create(mobile1.prototype);
mobile3.prototype.constructor.constructor=mobile3;

var s = new mobile1("m21");
var l= new mobile3("lg");

document.write(l.getmodel());
