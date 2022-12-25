//Think of something you could store in a array. For 
//example, you could make a list of mountains, rivers, 
//countries, cities, languages, or anything else you’d like.
//Write a program that creates a list containing these items.

var a=["sindh","punjab", "balochistan","kpk"];
var b=["ravi","sutlej","chenab","Jehlum","Sindh"];

console.log("Provinces:");
for(var i=0;i<a.length;i++)
{
    console.log(i+1+". "+ a[i]+" ");
}

console.log("Rivers:");
for(var i=0;i<b.length;i++)
{
    console.log(i+1+". "+ b[i]+" ");
}