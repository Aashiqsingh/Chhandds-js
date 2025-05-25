function red(){
    let body = document.getElementsByTagName("body")[0]
    body.style.backgroundColor = "red";


    setTimeout(()=>{
        green()
    },4000)
}

function green(){
    let body = document.getElementsByTagName("body")[0]
    body.style.backgroundColor = "green";

    setTimeout(()=>{
        blue()
    },4000)
}

function blue(){
    let body = document.getElementsByTagName("body")[0]
    body.style.backgroundColor = "blue";

    setTimeout(()=>{
        yellow()
    },4000)
}

function yellow(){
    let body = document.getElementsByTagName("body")[0]
    body.style.backgroundColor = "yellow";

    setTimeout(()=>{
        black()
    },4000)
}



function black(){
    let body = document.getElementsByTagName("body")[0]
    body.style.backgroundColor = "black";

    setTimeout(()=>{
        red()
    },4000)
}
