const submitHandler = (event)=>{
    event.preventDefault()

    let name = document.getElementById("name")
    let age = document.getElementById("age")
    let gender = document.getElementsByName("gender")

    let output = document.getElementById("output")

    // console.log(gender);
    let gen = ""

    if(gender[0].checked == true)
    {
        gen = "Male"
    }
    else if(gender[1].checked === true){
        gen = "Female"
    }
    else if(gender[2].checked === true) {
        gen = "Other"
    }


    // console.log(name.value);
    // console.log(age.value);
    
    // console.log(gen);
    
    if(gen == "Male")
    {
        if(age.value > 18)
        {
            output.innerHTML = "You are elgible for vote.."
        }
        else{
            output.innerHTML = "You are not eligible for vote.."
        }
    }
    else if(gen == "Female")
    {
        if(age.value > 21)
        {
            output.innerHTML = "You are elgible for vote.."
        }
        else{
            output.innerHTML = "You are not elgible for vote.."
        }
    }
    else if(gen === "Other")
    {
        if(age.value > 25)
        {
            output.innerHTML = "You are elgible for vote.."
        }
        else{
            output.innerHTML = "You are not elgible for vote.."
        }
    }
    


}