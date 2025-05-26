function getData(){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Data fetched successfully...");
        },4000)
    })
}


const get = async()=>{
   let x = await getData()
   console.log(x);
}
get()




// async function get(){

//     console.log("Starting.....");

//     let x = await getData()
//    console.log(x);





//    console.log("Edning.....");
   
// }

// get()