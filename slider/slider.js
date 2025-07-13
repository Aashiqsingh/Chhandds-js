var images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
var currentIndex = 0;
let prev = document.getElementById("prev");
let img = document.getElementById("img");
prev.addEventListener("click",()=>{
                        // 3 - 1 + 5 % 5
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    console.log(currentIndex);

    img.src = `../image/${images[currentIndex]}`
    
})

let next = document.getElementById("next");
next.addEventListener("click",()=>{
    currentIndex = (currentIndex + 1) % images.length;

    img.src = `../image/${images[currentIndex]}`
})