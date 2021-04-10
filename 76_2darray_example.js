
var rows1=prompt("enter the noumber for you create rows");
var cols1=prompt("enter the noumber for you create cols");

var array1=new Array(rows1);
for (let i=0;i<rows1;i++)
   {
      array1[i]=new Array(cols1);

   };

for(let i=0;i<rows1;i++)
    {
            for(let j=0;j<cols1;j++)
    {
               array1[i][j]=prompt("enter one by one value in array \n all value are int..");
    };
 };
document.write("first matrix = "+"<br>");
for(let i=0;i<rows1;i++)
    {
            for(let j=0;j<cols1;j++)
    {
              document.write(" " + array1[i][j]+" " );
    };
     document.write(" <br> " );
 };
 var rows2=prompt("for second matrix \nenter the noumber for you create rows");
 var cols2=prompt("for second matrix\n enter the noumber for you create cols");
 
 var array2=new Array(rows2);
 for (let i=0;i<rows2;i++)
    {
       array2[i]=new Array(cols2);
 
    };
 
 for(let i=0;i<rows2;i++)
     {
             for(let j=0;j<cols2;j++)
     {
                array2[i][j]=prompt("second matri \nenter one by one value in array  \n all value are int..");
     };
  };
 document.write("<br>"+"second matrix = "+"<br>");
 for(let i=0;i<rows2;i++)
     {
             for(let j=0;j<cols2;j++)
     {
               document.write(" " + array2[i][j]+" " );
     };
      document.write(" <br> " );
  };


var mul=[[],[],[]];

for(let i=0;i<rows2;i++)
    {
             for(let j=0;j<cols2;j++)
            
               {    
                  mul[i][j]=0       
                    
                          for(let k=0;k<cols2;k++)
                          {                  
                                mul[i][j]+=array1[i][k]*array2[k][i] ;
                           }
                 
               }; 
   };
   document.write("matrix multipication = "+"<br>");

 for(let i=0;i<rows2;i++)
   {
      for(let j=0;j<cols2;j++)
            {
              document.write(" "+mul[i][j] +"  ");
                  
            };
         document.write(" <br> " );
   };


   /*
var a=[[1,2,3],[4,5,6],[7,8,9]];
var mm=[[],[],[]];

for(let i=0;i<3;i++)
    {
             for(let j=0;j<3;j++)
            
               {    
                  mm[i][j]=0       
                    
                          for(let k=0;k<3;k++)
                          {                  
                                mm[i][j]+=a[i][k]*a[k][i] ;
                           }
                 
               }; 
   };
  document.wrire("matrix multipication = "+"<br>");

 for(let i=0;i<3;i++)
   {
      for(let j=0;j<3;j++)
            {
              document.write(" "+mm[i][j] +"  ");
                  
            };
         document.write(" <br> " );
   };
   */