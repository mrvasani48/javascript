class person{
    constructor(name,no){
        this.name=name; 
        this.no=no;
        this.details=()=>{
            return this.name+"  " + this.no;
        };
    }
    clr1=(clr1)=>{
        return clr1;
    };
};

class person2 extends person {
    constructor(name,no,name2,no2){
       super(name,no,);
      
        this.name2=name2;  
        this.no2=no2;    
        this.details2=()=>{
            return this.name2+"  " + this.no2;
        };
    }
    clr2=(clr2)=>{
        return clr2;
    };
};
var gopal= new person2("gopal vasani",160200106118,"kishan vasani",180200107118);
console.log(gopal.name);
console.log(gopal.no);
console.log(gopal.details());
console.log(gopal.clr1("parents class"));
console.log(gopal.name2);
console.log(gopal.no2);
console.log(gopal.details2());
console.log(gopal.clr2("child class"));