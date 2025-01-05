function lasvegas(name , amount){
    return name + " your tour is confirm lasvegas with package " + amount
}

function singapore(name , amount){
    return name + " your tour is confirm singapore with package " + amount
}

function goa(name , amount){
    return name + " your tour is confirm goa with package " + amount
}


var budget = 3000;
var flag;

if(budget > 3500)
{
    flag = lasvegas("chhands",budget)
}
else if(budget > 2500)
{
    flag = singapore("aditya",budget)
}
else if(budget > 1500)
{
    flag = goa("chhands",budget);
}
else{
    console.log("you need more money...");
    
}

console.log(flag);
