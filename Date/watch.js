function getDate(){

    var date = new Date();

    let hours = document.getElementById("hours")
    let minutes = document.getElementById("minutes")
    let seconds = document.getElementById("seconds")

    hours.innerHTML = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    minutes.innerHTML = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    seconds.innerHTML = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();



}
setInterval(()=>{
    getDate()
},1000);