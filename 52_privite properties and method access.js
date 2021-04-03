//privite properties and method access in global but  value not change them........
var mobile=function (model,ram,clr,btr){
    this.model=model;
    this.ram=ram;
   var color=clr; // privite not acess to other code this scope is local
   this.colur=function(){return(color)}; 
    this.battery=btr;   
    this.all=()=>{
        return(this.model+this.ram+this.color+this.battery);
    };
}
var samsung= new mobile("m71",8,"black","4000mah");
document.write(samsung.colur());
