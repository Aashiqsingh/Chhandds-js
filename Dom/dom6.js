function writeTxt(){

    const txt = document.getElementById("txt")

    console.log(txt.value);

    const nameOutput = document.getElementById("nameOutput");


    if(txt.value.length < 4)
    {
        // alert("Name is too short..")
        // console.log("Name is too short...");
        nameOutput.innerHTML = "Name is too short..";
        nameOutput.style.color = "red"
        txt.style.outline = "2px solid red"
        
    }
    else{
        nameOutput.innerHTML = ""
        txt.style.outline = "2px solid green"
        nameOutput.innerHTML = txt.value 
    }
    
}