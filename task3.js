var name="FasIh Zaman KHan";
var lower=name.toLowerCase();
var upper=name.toUpperCase();
var title =name.toLowerCase();
    title = title.split(' ');
    for (var i = 0; i < title.length; i++) 
    {
        title[i] = title[i].charAt(0).toUpperCase() + title[i].slice(1); 
        
    }
    title=title.join(' ');
console.log("Lower case : "+lower+" ");
console.log("Upper case : "+upper+" ");
console.log("Title case : "+title+" ");