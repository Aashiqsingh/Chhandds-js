function signup(event){
    event.preventDefault()

    let name = document.getElementById("name")
    let age = document.getElementById("age")
    let email = document.getElementById("email")
    let password = document.getElementById("password")


    console.log("Name ---> ",name.value);
    console.log("Age ---> ",age.value);
    console.log("Email ---> ",email.value);
    console.log("Password ---> ",password.value);

    location.href = "login.html"
    localStorage.setItem("email",email.value)
    localStorage.setItem("password",password.value)
    
}


function login(){
    let email2 = localStorage.getItem("email")
    let password2 = localStorage.getItem("password")

    let email = document.getElementById("email")
    let pass = document.getElementById("pass")

    if(email.value == email2 && pass.value == password2){
        alert("Login Successful")
    }
    else{
        alert("Login Failed")
    }
}
