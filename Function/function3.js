function science(name,per){

    console.log(name + " your addmission confirm in science stream with per " + per);
    
}

function command(name,per){
    console.log(name + " your addmission confirm in command stream with per " + per);
}

function arts(name,per){
    console.log(name + " your addmission confirm in arts stream with per " + per);
}

var percentage = 81;

if(percentage > 90)
{
    science("chhands",percentage)
}
else if(percentage > 70)
{
    commerce("chhands",percentage)
}
else if(percentage > 50){
    arts("chhands",percentage)
}
else {
    console.log("Your addmission not confirm....");
    
}