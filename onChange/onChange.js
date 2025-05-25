var box = document.getElementById("box")


function changeColor(){
    let colors = document.getElementById("colors")
    console.log(colors.value);

    box.style.height = "200px";
    box.style.width = "200px";
    box.style.backgroundColor = colors.value;
    box.style.margin = "100px 400px"
}


function changeRadius(){
    let radius = document.getElementById("radius")

    box.style.borderRadius = radius.value
}