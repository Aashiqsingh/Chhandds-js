const sendEmail = ()=>{
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let message = document.getElementById("message")

    const params = {
        name:name.value,
        email:email.value,
        message:message.value 
    }

    const serviceId = "service_fsouq7p";
    const templateId = "template_asuumpi";

    emailjs.send(serviceId,templateId,params).then((res)=>{
        console.log(res);
        
    }).catch((err)=>{
        console.log(err);
        
    })


}