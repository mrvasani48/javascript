//privite properties and method
var mobile=function (model,ram,clr,btr){
    this.model=model;
    this.ram=ram;
   var color=clr; // privite not acess to other code this property scope is local 
    this.battery=btr;   
    this.all=()=>{
        return(this.model+this.ram+this.color+this.battery);
    };
}
var samsung= new mobile("m71",8,"black","4000mah");
document.write(samsung.all());
