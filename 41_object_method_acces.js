var student = {
    name:"kishan d vasani",
    no:180200107118,
    mobileno:9265171523,
    clgname:"gecr"
    ,
    details:function(){
        return (student.name+"<br>"+student.no+"</br>"+student.mobileno+"<br>")
    }
};
document.write(student.details());