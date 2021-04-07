class person{
    constructor(name,no){
        this.name=name; 
        this.no=no;
        this.details=()=>{
            return this.name + "  " + this.no;
        };
    }
    clr1=()=>{
        return "methode 1";
    };
};
var kishan= new person("kishan vasani",180200107118);

class person2 {
    constructor(name2,no2){

        this.name2=name2;  
        this.no2=no2;    
        this.details2=()=>{
            return this.name2+"  " + this.no2;
        };
    }
    clr1=()=>{
        return "methide 2 overriding methode 1";
    };
};
var gopal= new person2("gopal vasani",160200106118);

document.write(gopal.clr1());
