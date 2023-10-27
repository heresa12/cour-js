"use strict";
/*for (let index = 0; index < 1_000_000_000.; index++) {
    if (index === 999_999_999) {
        console.log("1.Synchrone: fin de la boucle");
    }
}
console.log("2.Bonjour apres la boucle Synchrone");
fetch("test.json").then(r => {
    for (let index = 0; index < 1_000_000_000.; index++) {
        if (index === 999_999_999) {
            console.log("3.Asynchrone: fin de la boucle");
        }
    }
})
console.log("4.Bonjour apres la fetch Asynchrone");
let request = fetch("test.json");
console.log(request);
request.then(res => console.log("then", res));
request.catch(res => console.log("catch", res));
request.finally(res => console.log("finally", res));
let r1 = fetch("test.json");
let r2 = fetch("test2.json");
Promise.all([r1, r2]).then(res => {
    console.log(res);
    res.forEach(r => {
        if (r.ok) {
            r.json().then(data => console.log(data.prop));
        }
    })
})
let random = new Promise(function (resolve, project) {
    let r = Math.floor(Math.random() * 10);
    if (r < 5) {
        resolve("Bravo,r est plus petit que 5 !");
    }
    else {
        Reject("Désoler, r est plus grand que 5 !")
    }
})
console.log(random);
random.then(res => console.log("then", res))
    .catch(err => console.log("catch", err))
    .finally(() => console.log("finally", "Mon random est terminè"));
function burger1() {
    pain1();
    sauce1();
    viande1();
    salade1();
    console.log("Le burger est servi !");
}
function pain1() {
    setTimeout(() => console.log("Le pain est grillé et placé"), 1000);
}
function sauce1() { console.log("La sauce est versé"); }
function viande1() { setTimeout(() => console.log("La viande est cuite et placée")) };
function pain2() {
    return new Promise(resolve => setTimeout(() => resolve("Le pain est grillé est placé"), 1000))
}
function viande2() {
    return new Promise(resolve => setTimeout(() => resolve("La viande est grillée et placée"), 3000));
}
function sauce2() {
    return new Promise(resolve => resolve("La sauce est versée"));
}
function salade2() {
    return new Promise(resolve => resolve("La salade et placée"));
}
function burger2() {
    pain2().then(pain => {
        console.log(pain);
        sauce2().then(sauce => { console.log(sauce) });
        viande2().then(viande => { console.log(viande) });
        salade2().then(salade => { console.log(salade) });
        console.log("Le burger est servi !");
    })
}*/

//exo
function trierTableau(tableau) {
    return new Promise((resolve, reject) => {
      const typeReference = typeof tableau[0];
      const isHomogeneous = tableau.every((element) => typeof element === typeReference);
  
      if (!isHomogeneous) {        reject("Les éléments du tableau sont de types différents.");
      } else {
        tableau.sort();
  
      
        resolve(tableau);
      }
    });
  }
  
  const monTableau = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
  trierTableau(monTableau)
    .then((tableauTrie) => {
      console.log("Tableau trié : ", tableauTrie);
    })
    .catch((erreur) => {
      console.error("Erreur : ", erreur);
    });
  
// exo2 

    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }
  
      function changerCouleur(couleur) {
        const feu = document.querySelector(".feu");
        feu.querySelector(".v").classList.remove("vert");
        feu.querySelector(".j").classList.remove("jaune");
        feu.querySelector(".r").classList.remove("rouge");
        // console.log("test");
        // console.log(couleur,feu.querySelector("."+couleur));
        feu.querySelector("."+couleur[0]).classList.add(couleur);
      }
  
      function cycle() {
        return sleep(3000)
          .then(() => {
            changerCouleur('vert');
          return sleep(1000);
          })
          .then(() => {
            changerCouleur('jaune');
           return sleep(2000);
          })
          .then(() => {
            changerCouleur('rouge');
          });
      }
  
      function run() {
        cycle()
          .then(run)
          .catch((erreur) => {
        
          });
      }
  
      run();