"use strict"

const lis = document.getElementsByTagName("li");
console.log(lis,lis[0]);
lis[0].textContent = "Marbre";
const ps = document.getElementsByClassName("step");
const p1 = document.getElementsByClassName("marche1");
console.log(ps,p1);
const h1 = document.getElementById("mainTitle");
console.log(h1);
const p2 = document.querySelector(".marche2")
//const p2 = document.querySelector("main> p:nth-of-type(2)")
//const p2 = document.querySelector("body main>p.marche2.step")
console.log(p2);
const  lis2 = document.querySelectorAll("footer li");
console.log(lis2, lis2[0]);
const header = document.querySelector(`header`);
const h = header.querySelector("h1");
console.log(header.nextElementSibling);
console.log(header.nextSibling);
console.log(lis2[2].previousElementSibling);
console.log(header.children);
console.log(lis[2].parentElement);
console.log(lis[2].closest("footer"));
header.append(lis2[0])
lis2[2].remove();
console.log(lis2[2]);
//header.removeChild(h);
//exercice 1
const  div= document.getElementsByTagName("div");
const  he= document.getElementsByTagName("header");
header.append(div[0])
//exercice 2
const lli34 = document.querySelectorAll("footer li");
for(let i=0;i<lli34.length;i++){
    lli34.textContent="texte changé";
}
//exercice 3
const pair= document.querySelectorAll("main p");
for (let i=0;i<pair.length;i++){
    if(i%2){
        pair[i].textContent="ceci est un paragraphe pair";
    }
}