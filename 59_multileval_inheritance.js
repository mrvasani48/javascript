//supar class
var mobile1 = function () {
    this.a1 = "this is poperty of mobile1"
};
mobile1.prototype.a = (a1) => {
    return a1;
};

//sub class 1
var mobile2 = function () {
    this.a2 = "this is poperty of mobile2"
    mobile1.call(this);
};
mobile1.prototype.b = (a2) => {
    return a2;
};


//sub class 2
var mobile3 = function () {
    this.a3 = "this is poperty of mobile3"
    mobile2.call(this);
};
mobile1.prototype.c = function (a3) {
    return a3;
};

//inheritance prototype 

//mobil2 inherit mobile1

mobile2.prototype = Object.create(mobile1.prototype);
mobile2.prototype.constructor = mobile2

//mobil3 inherit mobile2
mobile3.prototype = Object.create(mobile2.prototype);
mobile3.prototype.constructor = mobile3

//create object in all constructor/class

var samsung = new mobile1();

var oneplus = new mobile2();

var apple = new mobile3();

//lts call  all  the method/class/constructor

// first call apple
document.write("apple inherit mobile1 and mobile2" + "<br>");
document.write("appple use c = " + apple.c("c call") + "<br>");
document.write("appple use b = " + apple.b("b call") + "<br>");
document.write("appple use a = " + apple.a(" a call") + "<br>");
document.write("appple use a3 = " + apple.a3 + "<br>");
document.write("appple use a2 = " + apple.a2 + "<br>");
document.write("appple use a1 = " + apple.a1 + "<br>" + "<br>" + "<br>");


// first call oneplus
document.write("oneplus inherit mobile1 " + "<br>");
document.write("oneplus use c = " + oneplus.c("c call") + "<br>");
document.write("oneplus use b = " + oneplus.b("b call") + "<br>");
document.write("oneplus use a = " + oneplus.a("a call") + "<br>");
document.write("oneplus use a3 = " + oneplus.a3 + "<br>");
document.write("oneplus use a2 = " + oneplus.a2 + "<br>");
document.write("oneplus use a1 = " + oneplus.a1 + "<br>" + "<br>" + "<br>");


// first call samsung
document.write("samsung " + "<br>");
document.write("samsung use c = " + samsung.c("c call") + "<br>");
document.write("samsung use b = " + samsung.b("b call") + "<br>");
document.write("samsung use a = " + samsung.a("a call") + "<br>");
document.write("samsung use a3 = " + samsung.a3 + "<br>");
document.write("samsung use a2 = " + samsung.a2 + "<br>");
document.write("samsung use a1 = " + samsung.a1 + "<br>");

