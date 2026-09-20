let hrs = document.getElementById("hrs");
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");

setInterval(() => {

    let currentTime = new Date();

    hrs.innerHTML = currentTime.getHours()<10 ? "0" + currentTime.getHours() : currentTime.getHours();
    mins.innerHTML = currentTime.getMinutes()<10 ? "0" + currentTime.getMinutes() : currentTime.getMinutes();
    secs.innerHTML = currentTime.getSeconds()<10 ? "0" + currentTime.getSeconds() : currentTime.getSeconds();
}, 1000);