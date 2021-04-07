class person{
    constructor(name,no){
        this.name=name; 
        this.no=no;
        this.details=()=>{
            return this.name + "  " + this.no;
        };
    }
    static clr1=()=>{
        return "this is the static methode";
    };
};
alert(person.clr1());
 