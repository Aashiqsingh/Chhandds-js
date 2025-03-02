function science(name,per)
{
    return name + " ur admision confirm in science with per " + per 
    
}

function commerce(name,per){
    return name + " ur admision confirm in commerce with per " + per 
}

function arts(name,per){
    return name + " ur admision confirm in arts with per " + per 
}


// cb -- callback 
function admission(name,per,cb)
{
    var x = cb(name,per)
    console.log(x);
    
}

var percentage = 91;

if(percentage > 90)
{
    admission("Chhands",percentage,science)
}
else if(percentage > 70)
{
    admission("Chandni",percentage,commerce)
}
else if(percentage > 50)
{
    admission("rahul",percentage,arts)
}
else{
    console.log("ur admission is not confirmed");
}