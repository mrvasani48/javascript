//ES class  declaration
class person {
     constructor(){
         //instance member
             this.name="vasani kishan d";
             this.no="9265171523";
     }     
     //prototype member  or method    
     all= ()=>{
                return this.name+this.no;
     }
};
// create object
var kishan = new  person();
console.log(kishan.all());

// with parameter

class robot {
    constructor(name,no){
        //instance member
            this.name=name;
            this.no=no;
    }     
    //prototype member  or method    
    all= ()=>{
               return this.name +"  "+this.no;
    }
};

var kishan = new robot("robox",1);
console.log(kishan.name);
console.log(kishan.no);
console.log(kishan.all());
console.log(robot);
console.log(Object.getPrototypeOf(kishan));
console.log(Object.getPrototypeOf(robot.__proto__));
console.log(kishan);

