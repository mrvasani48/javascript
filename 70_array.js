//empty erray
var array=[];
document.write(array[0]+"<br>");
document.write(typeof(array) +"<br> ");

//intilization and declarazation array

var array=[1,2,3,4,5,6,7,8,9,10];
document.write(array + " <br>");

//array literil methode

var array=[];
array[0]=11;
array[1]=12;
array[2]=13;
array[3]=14;
array[4]=15;

//acces array

document.write(array[2] +" <br>");
document.write(array[0] +" <br>");
document.write(array +" <br>");

//not empty array

var array=[,,,,,,,];
document.write(array +"<br> ");

//modify erray
var array=[1,2,3,4,5,6,7,8,9,10];
array[0]=11;
array[1]=12;
array[2]=13;

document.write(array +" <br>"+" <br>");

//delate array
var array=[1,2,3,4,5,6,7,8,9,10];
delete array[0]; // this delete array[0] but its called 
delete array[1];
delete array[2];

document.write(array +" <br>");

//array length 

var array = [1,2,3,4,5,6,7,8,9,10];

for (let i=0;i<array.length ;i++)
{
	document.write(array[i]+"<br>");
}
let i=0;
do 
{
	document.write(array[i]+"<br>");
	
	i++;
}while(i<array.length )

let z=0;
while(z<array.length )
{

	document.write(array[z]+"<br>");
	z++;
}