"use strict"
function salut() {
    console.log(" Salut: salut tous le monde");
}
salut();
const salut2 = function () {
    console.log("Salut2: bonjour les gens!");
}
salut2();
const salut3 = {
    maFonction: () => {
        console.log("salut3: coucou le peuple!");
    }
}
salut3.maFonction();

const salut4 = () => console.log("salut4: hello world !");
salut4();

function bonsoir(nom) {
    if (nom === undefined)
        console.error("donne moi un fichu argument")
    else
        console.log("bonsoir" + nom);
}
bonsoir();
bonsoir(" aude ");
bonsoir(" maurice ", " pierre ");
function bonnenuit(nom1, nom2) {
    console.log(`%cbonnenuit${nom1}et${nom2}`, "background:blue;color:yellow;");
}
bonnenuit(" patrick ", " raphael ");
function goodbye(nom1, nom2 = " les autres") {
    console.log(" good bye" + nom1 + " et " + nom2);
}
goodbye(" kevin");
goodbye(" marie", "alan");
function goodmorning(...noms) {
    console.log(" good morning" + noms.toString());
}
goodmorning(" pierre ");
goodmorning(" pierre ", " ondine ", " giovanni")
function insulte(nom) {
    if (nom === undefined) {
        console.error("donne moi un nom !")
        return;
        console.log("test");
    }
    return nom + " le poltron !";
}
insulte();
insulte(" charle ");
let newname = insulte(" bob ");
console.log(newname);
console.log(insulte(" bill "), insulte());
const add = (a, b) => a + b;
console.log(add(4, 8), add(`4`, 8));
const square = a => a * a;
console.log(square(5));
const pr = [" alice ", " ariel ", " mulan", " belle"];
pr.forEach(bonsoir);
pr.forEach(function (p) {
    console.log(" bienvenue " + p);
});
pr.forEach(p => console.log(" bonjour bonjour" + p));
function compliment(salutation, nom) {
    salutation(nom + " le magnifique");
}
compliment(bonsoir, " greg");
compliment(n => console.log("guten tag " + n), " hanz ");
function countdown(x) {
    console.log(x--);
    if (x < 0) return;
    countdown(x);
}
countdown(5);
/**
 * 
 * @param {string} nom 
 * @param {number} age 
 * @returns {string}
 */
function presentation(nom, age) {
    return `je suis ${nom} et j'ai ${age} ans`;
}
let p = presentation(" claude ", 54);
console.log(p);
