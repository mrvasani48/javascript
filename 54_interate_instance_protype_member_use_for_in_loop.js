var mobile = function(a,p){
    this.model=a;
    this.prise=p;
};
var samsung=new mobile("s21",20000);
var nokia =new mobile("nokia2",12000);
document.write(samsung.model);
mobile.prototype.ram="4gb";
console.log(samsung);
//object key 
document.write(Object.keys(samsung));

//prototype key 
for(var x in samsung)
{
    console.log(x);
}
//output
/*
mobile {model: "s21", prise: 20000}model: "s21"prise: 20000__proto__: ram: "4gb"constructor: ƒ (a,p)__proto__: Object
54_interate_instance_protype_member_use_for_in_loop.js:12 model
54_interate_instance_protype_member_use_for_in_loop.js:12 prise
54_interate_instance_protype_member_use_for_in_loop.js:12 ram
*/