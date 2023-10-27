"use strict";
console.log(document);
console.dir(document);
const h = document.createElement("header");
console.log(h);
const m = document.createElement("main");
const f = document.createElement("footer");
h.innerHTML = "<h1>Super Site en JS <h1>";
f.innerHTML = /*html*/`<ul><li>Menu</li><li>Menu 2</li><li>Menu 3</li></ul>`;
console.log(h, f);
console.log(document.body);
if (document.body) {
   document.body.append(h, m, f);
}
for (let i = 0; i < 5; i++) {
   const p = document.createElement("p");
   p.textContent = "<strong> lorem, ipsum dolor</stong>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, necessitatibus quis aspernatur sit totam, earum deserunt dolor consequuntur praesentium sapiente, doloremque natus in incidunt minus corporis nisi ut porro nulla"
      ;
   m.appendChild(p)
}
const d = document.createElement("div");

d.innerHTML = "<h2>Santé</h2><p>Mangez.....la flemme</p>";

document.body.append(d);

const b1 = document.createElement("button");

b1.textContent = "tchin tchin";

const b2 = document.createElement("button");

b2.textContent = "Le gras c'est la vie";

d.append(b1, b2);





