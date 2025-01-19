var employee = {
    empId:101,
    name:"rahul",
    age:33,
    email:"rahul@gmail.com",
    gender:"male",
    isMarried:true,
    mobile:[827694987 , 3743877378 , 783468373],
    address:{
        street:"201 C.G road",
        city:"Ahmedabad",
        state:"Gujarat",
        country:"India",
        pincode:380015
    }
}

console.log(employee);
console.log(employee.name);
console.log(employee.age);
console.log(employee.email);
console.log(employee.gender);
console.log(employee.isMarried);
console.log(employee.address);
console.log(employee.address.city);
console.log(employee.address.state);

// console.log(employee.mobile);
// console.log(employee.mobile[0]);
// console.log(employee.mobile[1]);


for(let i=0;i<employee.mobile.length;i++)
{
    console.log(employee.mobile[i]);
    
}













