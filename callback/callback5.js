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

    console.log(x);
    
}

var budget = 3001;
if(budget > 4000)
{
    travel("chhands",budget,lasvegas)
}
else if(budget > 3000)
{
    travel("chhands",budget,singapore)
}
else if(budget > 2000)
{
    travel("chhands",budget,indonesia)
}