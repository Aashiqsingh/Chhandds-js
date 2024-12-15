function science(name,per){

    return name + " your addmission confirm in science stream with per " + per
    
}

function commerce(name,per){
    return name + " your addmission confirm in commerce stream with per " + per
}

function arts(name,per){
    return name + " your addmission confirm in arts stream with per " + per
}

var percentage = 91;
var flag;


if(percentage > 90)
{
    flag = science("chhands",percentage)
}
else if(percentage > 70)
{
    flag = commerce("chhands",percentage)
}
else if(percentage > 50){
    flag = arts("chhands",percentage)
}
else {
    console.log("Your addmission not confirm....");
    
}
console.log(flag);
