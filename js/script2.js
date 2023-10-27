"use strict";
let x = Math.floor(Math.random() * 20);
console.log(x);
if (x < 10) {
    console.log(x + " est plus petit que 10");
}
else if (x > 10) { console.log(x + "plus grand que 10"); }
else console.log("x vaut 10");

if (x < 10) console.log(x + " est plus petit que 10");


else if (x > 10) console.log(x + "plus grand que 10");

else console.log("x vaut 10");

let message = x < 10 ? x + "est plus petit que 10" : x + "est plus grand ou égale à 10"
console.log(message);
message =
    x < 10 ?
        x + "est plus petit que 10" :
        x > 10 ?
            x + "est plus grand que 10" :
            "x vaut 1";
console.log(message);
/*let ville = prompt("de quelle ville venez-vous?");
console.log(ville.toLowerCase());
if (ville == null) ville = "pas de reponse";
switch (ville.toLowerCase()) {
    case "tokyo":
    case "londre":
    case " paris":
        console.log("de la capital donc.");
        break;
    case "lille":
        console.log("etes vous un ch'ti");
        break;
        default:
            console.log("je ne suis pas cette ville.");
}*/
let nombre = parseFloat (prompt ("entrez un chiffre"));
console.log(nombre);



