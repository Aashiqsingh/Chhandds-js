const science = (option)=>{
    return option.name + " your addmission confirm in science stream with per " + option.per
    
}

const commerce = (option)=>{
    return option.name + " your addmission confirm in commerce stream with per " + option.per
}

const arts = (option)=>{
    return option.name + " your addmission confirm in arts stream with per " + option.per
}


var percentage = 91;
var temp;

if(percentage > 90)
{
    temp = science(
        {
            name:"chhands",
            per:percentage
        }
    )
}
else if(percentage > 70)
{
    temp = commerce({name:"rahul",per:percentage})
}
else if(percentage > 50)
{
    temp = arts({name:"prakash",per:percentage})
}
else{
    console.log("Sorry! you didn't qualify for any stream.")
}

console.log(temp);
