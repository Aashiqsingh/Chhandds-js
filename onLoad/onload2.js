var colors = ["red","green","blue","yellow","orange","purple","black","pink","brown","gray","cyan","magenta"];
const randomColors = ()=>{

    let randomIndex = Math.floor(Math.random() * colors.length);
    console.log(randomIndex);

    let body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = colors[randomIndex]
    
}

function start(){

    setInterval(()=>{
        randomColors()
    },1000);
}