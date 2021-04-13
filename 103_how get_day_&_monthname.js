var date =new Date();
month=date.getMonth();
day=date.getDay();
year=date.getFullYear();
date1=date.getDate();
function mnth(month)
{
    arr=["january","february","march","April","may","june","july","august","september","octomber","november","december"];
    return arr[month];
};
function da(day)
{
    arr=["sunday","monday","Tuesday","wednesday","thursday","friday","satureday"];
    return arr[day]
};
document.write(da(day)+" "+date1+"-"+mnth(month) +"-" + year) ;
