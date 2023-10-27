"use strict";
const copyright = document.querySelector('footer span');
const mainTime = document.querySelector('main time');
const mainBtn = document.querySelector('main button');
const progress = document.querySelector('.progress');
const date = new Date();
console.log(date);

copyright.textContent = date.getFullYear();
mainTime.textContent = date.toLocaleTimeString();
function timer() {
    const dateTimer = new Date();
    mainTime.textContent = dateTimer.toLocaleTimeString();
}

let idInterval = setInterval(timer, 1000);
console.log(idInterval);
mainBtn.addEventListener("click", () => clearInterval(idInterval));
let idTimeout = setTimeout(() => console.log("coucou en retard !"), 3000);
clearTimeout(idTimeout);
let w = 0;
function load() {
    console.log(w);
    if (w === 100) return;
    w++
    progress.style.width = w + "%";
    setTimeout(load, 100)
}
load()
//exo 
