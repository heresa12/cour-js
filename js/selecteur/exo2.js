"user strict"

let paragraphes = document.querySelectorAll("p");
let taille = ["12px", "5px", "9px", "7px", "6px"]
for (let i = 0; i < paragraphes.length && i < taille.length; i++) {
    paragraphes[i].style.fontSize = taille[i]
}
let div = document.querySelector("div");
div.style.position = "absolute";
div.style.left = "0";
div.style.top = "-400px";
div.style.transition = "left 2s ease";
setTimeout(() => { div.style.left = "180vw" }, 200
)
//const div = document.querySelector("div");
let ramdomC = Math.floor(Math.random() * 16777215);
toString(16);
div.style.backgroundColor = "#"+ramdomC;

