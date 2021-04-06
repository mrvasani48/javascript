
 class person{
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

