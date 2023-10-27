"user strist";
let x = prompt("saisir un chiffre: le nombrex");
let message = x < 0 ? x + "est plus petit que 0" : x + "est plus grand que 0";
console.log(message);

let nombre1 = prompt("saisissez un nombre");
let nombre2 = prompt("saisissez un autre nombre");
if ((nombre1 > 0 && nombre2 > 0) || (nombre1 < 0 && nombre2 < 0)) {
    console.log("produit positif");
}
else if ((nombre1 > 0 && nombre2 > 0) || (nombre1 < 0 && nombre2 < 0)) {
    console.log("produit negatif");
}
else {
    console.log("produit null");
}
let nom1 = prompt("nom 1");
let nom2 = prompt("nom 2");
let nom3 = prompt("nom 3");
if (nom1 < nom2 && nom2 < nom3) {
    console.log("rangé");
}
else {
    console.log("non rangé");
}
let age = prompt("votre age");
switch (age) {
    case "6":
    case "7":
        console.log("poussin");
        break;
    case "8":
    case "9":
        console.log("puppille");
        break;
    case "10":
    case "11":
        console.log("minime");
        break;
    default: if (age < 6) console.log("trop petit");
    else console.log("cadet");
}
let heure= prompt ("donnez l heure");
let minute = prompt ("donnez les minute");
minute++;
if (minute==60) {
    heure++;
    minute -=60
}
if (heure==24){
    console.log(minuit);
}
else{
    console.log("dans une minute il sera:${heure}:${minute}");
}
let nbphoto =prompt ( " nombre de photocopie");
if (nbphoto>0 &&nbphoto<10) {
    console.log(nbphoto*0.10+"€");
}
else if (nbphoto>10 && nbphoto<20)
{
    console.log(nbphoto*0.9+"€");
}
else if(nbphoto>20){
    console.log(nbphoto*0.8+"€");
}