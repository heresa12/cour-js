"user strict";

const h1 = document.querySelector("#mainTitle");
console.log(h1);
h1.style.backgroundColor = "rgb(123,45,98";
h1.style.fontStyle = "italic";
h1.style.textShadow = "5px 5px rgba(0,0,0,0.3";
h1.style.fontSize = "5rem";
h1.style.couleur = "red";
h1.style.color = "rgbaa(255,255,255,0.8)";
//?-------classes---------------
console.log(h1.className);
h1.className = "banane";
h1.className = "";//supprime precedent 
h1.className += "banane";
console.log(h1.classList);
h1.classList.remove("banane");
h1.classList.add("banane");
h1.classList.toggle("banane");
console.log(h1.classList.contains("banane"));
//----------autre attrbuts-----------
console.log(h1.id, h1.getAttribute("id"));
//h1.setAttribute("id",h1.getAttribute("id")+"2")
h1.id +="2";
const a = document.querySelector("footer ul li a ");
console.log(a);
a.setAttribute("target","_blank");
console.log(a.getAttribute("href"));
console.log(a.dataset.color);
a.dataset.color = "Je ne suis pas une couleur";
a.dataset.bidule = " je ne sert a rien";
