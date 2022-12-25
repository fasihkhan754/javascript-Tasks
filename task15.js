const guest=["Family","Friends","Neighbor"];
guest[2]="Relatives";

for(var i=0;i<guest.length;i++)
{
    console.log("Hi "+guest[i]+", \n\tyou all are invited to a dinner that is arranged by me at 7pm on this upcoming sunday.\nTHANKYOU. " );
} 
console.log(guest[2]+"Can't come to the dinner ")