//how to check property exits or not
var person = {name:"kishan d vasani",no:9265171523};
console.log(person);
document.write(typeof( person.name ));

if(typeof person.no == "undefined")
{
alert(" property not defind");
}
else
{
    alert("proprty  defind ");

}