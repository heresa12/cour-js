const r1 = /ou/;
const r2 = /[ou]/;
console.log(r1, r1.test("Bonjour"), r1.test("Salut"));
console.log(r2, r2.test("Bonjour"), r2.test("Salut"));
const r3 = /^ou/;
console.log(r3, r3.test("Bonjour"), r3.test("outre"));
const r4 = /ou$/;
console.log(r4, r4.test("Bonjour"), r4.test("mou"));
const r5 = /ou|oi/;
console.log(r5, r5.test("Bonjour"), r5.test("Bonsoir"));
const r6 = /[a-z]/;
console.log(r6, r6.test("Bonjour"), r6.test("0987654321"));
const r7 = /[^a-z]/;
console.log(r7, r7.test("bonjour"), r7.test("0987654321"));
const r8 = /(ou)?/;/*present 1 fois*/
console.log(r8, r8.test("bonjour"), r8.test("pizza"));
const r9 = /(ou)+/;
console.log(r9, r9.test("bonjour"), r9.test("pizza"));
const r10 = /(ou)*/;/*present + fois */
console.log(r10, r10.test("bonjour"), r10.test("pizza"));
const r11 = /(cou){2}/;/*presence de cou 2 fois */
console.log(r11, r11.test("coup"), r11.test("coucou"));
const r12 = /^(cou){2,4}$/;/* appareit 2 fois et +*/
console.log(r12, r12.test("coucoucou"), r12.test("coucoucoucoucou"));
const r13 = /^(cou){2,}$/;
console.log(r13, r13.test("coucoucou"), r13.test("coucoucoucoucou"));
const r14 = /\^/;
console.log(r14, r14.test("^^"), r14.test("Bonjour"));
const r15 = /\s/;
console.log(r15, r15.test("Hello World"), r15.test("Bonjour"));
const r16 = /\d/;
console.log(r16, r16.test("Bonjour 8 fois"), r16.test("Bonjour à tous"));
const r17 = /(ou|oi).*\1/;/*recherche ou ou oi suivi de n importe quel caractere suivi resulta 1 ()*/
console.log(r17, r17.test("Bonjour à tous"), r17.test("bonsoir à tous "));


const phrase = "j'aime la pizza,les cannelés et les okonomiyaki";
console.log(phrase.match(/pizza/));
console.log(phrase.match(/les/));
console.log(phrase.match(/les/g));
const phrase2 = "Vive les regex et vive javascript !";
console.log(phrase2.match(/vive/g));
console.log(phrase2.match(/vive/gi));
const phrase3 = `1er:Maurice
2e=ème: Paul
3ème: Charlie`;
console.log(phrase3.match(/^\d/g));
console.log(phrase3.match(/^\d/gm));
console.log(phrase3.match(/(\w+)$/));
console.log(phrase3.match(/1.+3/gm));
console.log(phrase3.match(/1.+3/gms));


console.log(/^[a-z]+$/.test("paul"),/^[a-z]+$/.test("élodie"));
console.log(/^[a-zàéèûùâêï]+$/.test("élodie"));
console.log(phrase.replace("pizza","salade"));
console.log(phrase.replace(/pizza/,"salade"));
console.log(phrase.replace(/pizza|okonomiyaki|cannelé/gi,"salade"));
console.log(phrase2.replace(/regex|javascript/gi,"*****"));
console.log(phrase2.replace(/javascript/gi,"css et $& et php"));
console.log(/[A-z]/.test("_"));









from = document.getElementById('monFormulaire'),addEventListener('submit', function (e) {
  e.preventDefault(); 
 
  const nom = document.getElementById('nom').value;
  const email = document.getElementById('email').value;

  
  const nomRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/;


  if (!nomRegex.test(nom)) {
    alert('Nom invalide');
    return;
  }

  if (!emailRegex.test(email)) {
    alert('Email invalide');
    return;
  }

  
  alert('Formulaire soumis avec succès !');
})




