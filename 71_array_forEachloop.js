var array=[1,2,3,4,5,6,7,8,9,10];
document.write(array+"<br>");
 
//forEach loop
var array=["ak",2,"tin",4,"pas",6,"sat",8,"nav",10];

array.forEach(function(value){
      document.write(value +"<br>");
}
);
//value and index
array.forEach(function(value,index){
    document.write("index "+index+" = " +value +"<br>");
}
);


