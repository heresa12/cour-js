"use strict";
function test(e) {
    console.log(e);
}
const h1 = document.querySelector("header>h1");
h1.addEventListener("click", test);
let x = 0;
h1.addEventListener("click", function (e) {
    let r = Math.floor(Math.random() * 360);
    e.target.style.transform = `rotate(${r}deg)`;
    x++;
    if (x === 5) e.target.style.color = "red";
})
const menu1 = document.querySelector(`.menu1`);
menu1.onclick = test;
menu1.onclick = (e) => {
    if (e.target.style.fontSize === "")
        e.target.style.fontSize = "2em";
    else
        e.target.style.fontSize = "";
}
menu1.onclick = "";
h1.removeEventListener("click", test);
const div1 = document.querySelector('.div1');
const input1 = div1.querySelector('input');
const btn1 = div1.querySelector('button');
input1.addEventListener("input", e => {
    console.log(e);
    if (e.target.style.fontSize === "")
        e.target.style.fontSize = "2em";
    else
        e.target.style.fontSize = "";
})
input1.addEventListener("input", e => {
    console.log(e.target.value);
    if (e.target.value != "")
        btn1.textContent = e.target.value;
    else
        btn1.textContent = "cliquez moi!";
})
btn1.addEventListener("click", () => h1.textContent = input1.value, { once: true });
const div4 = document.querySelector('.div4');
const gp = document.querySelector('.grandParent');
const pa = document.querySelector('.parent');
const en = document.querySelector('.enfant');
div4.addEventListener("click", () => console.log("div4"), { capture: true });
gp.addEventListener("click", () => console.log("gp"));
pa.addEventListener("click", (e) => {
    e.stopPropagation()
    console.log("pa")
});
en.addEventListener("click", () => console.log("en"));
const menu5 = document.querySelector('.menu5 a');
menu5.addEventListener("click", e => e.preventDefault())

/* exo1*/
const div2 = document.querySelector(".div2");
const btn2 = document.querySelector("button");
const colorInput = div2.querySelector('input[type="color"]')
/*exo2  */
const bouton2 = document.querySelector('.div3 button')
const bouton3 = document.querySelector('.hidden button:nth-of-type(2)')
const modal1 = document.querySelector('.hidden')
/*bouton2.addEventListener("click", function ()
{
    modal1.style.display = "grid";
})
bouton3.addEventListener("click", function()){
    console.log("test");
    modal1.style.dispaly = "";
}*/
function modalToggle() {
    console.log(5);
    modal1.classList.toggle("hidden");
}
bouton2.addEventListener("click", modalToggle);
bouton3.addEventListener("click", modalToggle);

/*exo 3*/
const nav = document.querySelector('body nav');
const li = document.querySelector('nav ul li');
for (let e = 0; e < li.length; e++) {
    console.log(li[e]);
    li[e].onclick = (f) => {
        if (f.target.style.fontSize == "")
            f.target.style.fontSize = "2rem";
        else f.target.style.fontSize = ""
    }
}

/*exo4*/
const span = document.querySelector('span');
const footer = document.querySelector('footer');

footer.addEventListener("mouseenter", () => {
    span.style.position = "absolute";
})
document.addEventListener("mousemove", e => {
    span.style.left = `${e.clientX}px`;
    span.style.top = `${e.clientY}px`;
})
document.addEventListener("click", () => {
    span.style.position = "";
    console.log("coucou");
})
