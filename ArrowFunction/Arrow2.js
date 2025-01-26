const science = (option)=>{
    console.log(option.name + " your addmission confirm in science stream with per " + option.per);
    
}

const commerce = (option)=>{
    console.log(option.name + " your addmission confirm in commerce stream with per " + option.per);
}

const arts = (option)=>{
    console.log(option.name + " your addmission confirm in arts stream with per " + option.per);
}


var percentage = 45;

if(percentage > 90)
{
    science(
        {
            name:"chhands",
            per:percentage
        }
    )
}
else if(percentage > 70)
{
    commerce({name:"rahul",per:percentage})
}
else if(percentage > 50)
{
    arts({name:"prakash",per:percentage})
}
else{
    console.log("Sorry! you didn't qualify for any stream.")
}