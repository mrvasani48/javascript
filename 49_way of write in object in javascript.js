//way of write in object in javascript

//1 literel method in property
var person ={ 
    name:"kishan d vasani ",
    no:9265171523,
    Email:"vasanikishan48@gmail.com"
}
alert(person["name"]);
document.write(person.name+person.no+person.Email);
//1 literel method in property and method
var person ={ 
    name:"kishan d vasani ",
    no:9265171523,
    Email:"vasanikishan48@gmail.com",
    all:function () {
        return (person.name + person.no + person.Email);
    }
}
document.write(person.all());
//object constructor 
var person3 = new Object();
person3.name="kishan d vasani";
person3.no=9265171523;
person3.Email="vasanikishan48@gmail.com";
person3.all=()=>{return(person3.name + person3.no + person3.Email)};
document.write(person3.all());

// factory function 
function person1(){
    return({
    name:"kishan d vasani ",
    no:9265171523,
    Email:"vasanikishan48@gmail.com",
    all:function () {
        return (this.name + this.no + this.Email);
    }}
    );
};
var dj =  person1();
document.write(dj.all());

//constructor function

var person2=function person1(){

    this.name="kishan d vasani ";
    this.no=9265171523;
    this.Email="vasanikishan48@gmail.com";
    this.all=function () {
        return (this.name + this.no + this.Email);
    };
}
var dj = new  person2();
document.write(dj.all()); 