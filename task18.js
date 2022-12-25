const places=["Maldeves","Hawai","Switzerland","Canada","Austrailia"];
const tempA=places;
tempA.sort();

//asscending
console.log(" Accending order : " );
for(var i=0;i<tempA.length;i++)
{
    console.log(" "+tempA[i]+" " );
} 

//orignal array
console.log(" Orignal array : " );
for(var i=0;i<places.length;i++)
{
    console.log(" "+places[i]+" " );
} 

tempA.reverse();
//decending
console.log(" decending order : " );
for(var i=0;i<tempA.length;i++)
{
    console.log(" "+tempA[i]+" " );
} 

//orignal array
console.log(" Orignal array : " );
for(var i=0;i<places.length;i++)
{
    console.log(" "+places[i]+" " );
} 

//orignal array reversed
places.reverse();
console.log(" Reversed Orignal array : " );
for(var i=0;i<places.length;i++)
{
    console.log(" "+places[i]+" " );
} 

//orignal array again reversed
places.reverse();
console.log("Again Reversed Orignal array : " );
for(var i=0;i<places.length;i++)
{
    console.log(" "+places[i]+" " );
} 

//sorted orrignal array
places.sort();
console.log(" Sorted Orignal order : " );
for(var i=0;i<places.length;i++)
{
    console.log(" "+places[i]+" " );
} 

//reverse sorted orrignal array
places.reverse();
console.log(" Reverse Sorted Orignal order : " );
for(var i=0;i<places.length;i++)
{
    console.log(" "+places[i]+" " );
} 