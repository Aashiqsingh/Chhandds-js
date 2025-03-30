var language = ["hindi","english","french","tamil","german","gujarati","marathi","telgu"];

// console.log(language);
// console.log(language[0]);
// console.log(language[1]);
// console.log(language[2]);

// for(let i=0;i<language.length;i++)
// {
//     console.log(language[i].toUpperCase());
// }


// language.forEach((lang)=>{
//     console.log(lang.toUpperCase());
    
// })

language.forEach((lang)=>{
    if(lang.length > 5)
    {
        console.log(lang.toUpperCase());
        
    }
})


var newArr = []

language.forEach((lang)=>{
    if(lang.length > 5)
    {
        newArr.push(lang.toUpperCase())
    }
})

console.log(newArr);
