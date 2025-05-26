const getOrder = ()=>{
    console.log("Order is going to be placed...");
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                orderId:1231,
                msg:"Order fetched successfully...",
                amount:499
            })
        },4000)
    })
}

const getPayment = (data)=>{
    console.log("Payment is going to be done...");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                paymentId:data.orderId,
                msg:"Payment done successfully...",
                amount:data.amount
            })
        },5000)
    })
}

getOrder().then((data)=>{
    console.log("food order details.....",data);
    getPayment(data).then((paymentData)=>{
        console.log("payment details.....",paymentData);
    }).catch((error)=>{
        console.log("Error in payment:", error);
    })
}).catch((err)=>{
    console.log("error in food order:",err);
})