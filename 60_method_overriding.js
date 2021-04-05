var person1 = function(){
    this.a=1;

};
person1.prototype.a1=11;
person1.prototype.name= (name)=>{                    //method one
    return name;
}
var person2 = function(){
    this.b=2;
};
person1.prototype.name= (name)=>{                   // methid two same name
    return(name);
}

person2.prototype=Object.create(person1.prototype);
person2.prototype.constructor=person2;

var kishan= new person1();
var raj = new person2();

document.write(raj.name("kishan vasani its me bro"));