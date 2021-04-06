// named class expression
var person = class perosn{
    constructor(name,no){
        this.name=name; 
        this.no=no;
        this.details=()=>{
            return this.name+"  " + this.no;
        };
    }
    clr=(clr)=>{
        return clr;
    };
};
var kishan= new person("kishan vasani",180200107118);
console.log(kishan.details());
console.log(kishan.clr("red"));

// unnamed class expression
var person = class {
    constructor(name,no){
        this.name=name; 
        this.no=no;
        this.details=()=>{
            return this.name+"  " + this.no;
        };
    }
    clr=(clr)=>{
        return clr;
    };
};
var kishan= new person("gopal vasani",160200106118);
console.log(kishan.details());
console.log(kishan.clr("gray"));