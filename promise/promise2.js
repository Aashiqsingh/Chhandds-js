// const getData = ()=>{

//     var promise = new Promise((success,failure)=>{
//         setTimeout(()=>{
//             success({
//                 status:200,
//                 message:"Data fetched successfully...",
//             })
//         },4000)
//     })

//     console.log(promise);
//     promise.then((data)=>{
//         console.log(data);
//         console.log("Ending.....");
//     })
//     promise.catch((err)=>{
//         console.log(err);
//     })
    
// }


// getData()



// const getData = ()=>{

//     var promise = new Promise((success,failure)=>{
//         setTimeout(()=>{
//             success({
//                 status:200,
//                 message:"Data fetched successfully...",
//             })
//         },4000)
//     })

//    return promise
    
// }


// var x = getData()
// // console.log(x);
// x.then((res)=>{
//     console.log(res);
//     console.log("Ending.....");
// }).catch((err)=>{
//     console.log(err);
// })



const getData = ()=>{

    return new Promise((success,failure)=>{
        setTimeout(()=>{
            success({
                status:200,
                message:"Data fetched successfully...",
            })
        },4000)
    })

   
    
}


getData().then((res)=>{
    console.log(res);
    
}).catch((err)=>{
    console.log(err);
})





// var x = getData()
// // console.log(x);
// x.then((res)=>{
//     console.log(res);
//     console.log("Ending.....");
// }).catch((err)=>{
//     console.log(err);
// })
