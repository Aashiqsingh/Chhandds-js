var images = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg"]

const changeImg = ()=>{

    var randomIndex = Math.floor(Math.random() * images.length)
    console.log(randomIndex);

    const img = document.getElementById("img");

    img.src = "../image/" + images[randomIndex]
    
}