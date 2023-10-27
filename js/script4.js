" user strict";
let b = 0;
while (true) {
    b++;
    if (b < 10) continue;
    if (b === 20) break;
    console.log("b vaut", b);
}
let a = true;
while (a) {
    console.log("coucou");
    a = Math.random() < 0.5;
}

do {
    console.log("do while : b vaut", b);
} while (b < 5)
for (let index = 0; index < 10; index++) {
    console.log("index vaut ${index}");
}
let arr = ["pizza", "cannelé", "gratin dauphinois"];
let person = { nom: "pierre", age: 55, yeux: "vert" };

for (let food in arr) {
    console.log(`food vaut${food}->${arr[food]}`);
}
for(let carac in person){
    console.log(`carac vaut${carac}->${person[carac]}`);
}
for(let f of arr)
{
    console.log(`f vaut${f}`);
}
arr.forEach((f)=>console.log(`forEach: f vaut${f}`));
arr.forEach((f,index)=>console.log(`forEach: f vaut${f}et i vaut${index}`));
let newArr=arr.map((f)=>f.toUpperCase());
console.log(arr,newArr);


