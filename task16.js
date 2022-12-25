const guest=["Family","Friends","Neighbor"];

for(var i=0;i<guest.length;i++)
{
    console.log("Hi "+guest[i]+", \n\tyou all are invited to a dinner that is arranged by me at 7pm on this upcoming sunday.\nTHANKYOU. " );
} 

var g4="Fasih";
var g5="Ali";

//start me dalnay k liye
guest.unshift(g4);
guest.push(g5);

//end pe dalne k liye
for(var i=0;i<guest.length;i++)
{
    console.log(" "+guest[i]+" " );
} 
