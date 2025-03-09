const lasvegas = (option)=>{
    return option.name + " ur tour is confirm lasvegas with amount "+option.package
    
}
const singapore = (option)=>{
    return option.name + " ur tour is confirm singapore with amount "+option.package
}

const indonesia = (option)=>{
    return option.name + " ur tour is confirm indonesia with amount "+option.package
}


const travel = (name,package,cb)=>{
    var x = cb(
        {
            name:name,
            package:package
        }
    )

    return x;
    
}

var budget = 2001;
var temp;

if(budget > 4000)
{
    temp = travel("chhands",budget,lasvegas)
}
else if(budget > 3000)
{
    temp = travel("chhands",budget,singapore)
}
else if(budget > 2000)
{
    temp = travel("chhands",budget,indonesia)
}

console.log(temp);
