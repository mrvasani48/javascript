var mobile=function (model,prise){
    this.model=model;
    this.prise=prise;
    this.all=function(){return(this.model+this.prise);};
};
var samsung =new mobile("m21",30000);
document.write(samsung.all());
samsung.colr="red";
console.log(samsung.colr);
var lg =new mobile("lg",30000);
document.write(lg.all());   
console.log(lg.colr);//undefind
mobile.prototype.color="gray";
console.log(lg.color);//gray
console.log(samsung.color);//gray
console.log(mobile.prototype);//gray
