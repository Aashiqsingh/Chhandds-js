
var a = 0;
var colors = ["red","green","blue","orange","pink","purple","black","gray","teal","aqua"]
function changeClr(){
    var mydiv = document.getElementById("mydiv")

    const randomIndex = Math.floor(Math.random() * colors.length)
    console.log(randomIndex);
    

    mydiv.style.backgroundColor = colors[randomIndex]

    // console.log("helooo");
    // console.log(a++);
    
    
}