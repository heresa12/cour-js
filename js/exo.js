"user strict ";
/*let liste = [];
for (let i = 0; i < 20; i++) {
    liste.push(Math.floor(Math.random() * 100));
}
console.log("liste non triée:", liste);
function triAbulles(arr) {
    let n = arr.length;
    let echange;
    do {
        echange = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                echange = true;
            }
        }
    } while (echange);
}
triAbulles(liste);
console.log("liste triée:", liste);*/


/*let liste = [];
for (let i = 0; i < 20; i++) {
    liste.push(Math.floor(Math.random() * 100) + 1);
}
console.log("liste non triée:");
console.log(liste);
function triSelection(liste) {
    const n = liste.length;

    for (let i = 0; i < liste.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (liste[j]  < liste[minIndex]) {
                minIndex = j;
            }
        }
    
            const temp = liste[i];
        liste[i] = liste[minIndex];
        liste[minIndex] = temp;
    }
}
triSelection(liste);
console.log("liste triée:", liste);*/
function genererNombreAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const nombreAleatoire = genererNombreAleatoire(0, 100);
let essais = 0;
const limiteEssais = 10;

function devinerLeNombre() {
    const guess = parseInt(prompt("Devinez le nombre entre 0 et 100 :"));

    if (isNaN(guess)) {
        alert("Veuillez entrer un nombre valide.");
    } else {
        essais++;

        if (guess < nombreAleatoire) {
            alert("Trop bas ! Essayez encore.");
        } else if (guess > nombreAleatoire) {
            alert("Trop élevé ! Essayez encore.");
        } else {
            alert("Bravo ! Vous avez deviné le nombre en ${essais} essais.");
            const rejouer = confirm("Voulez-vous rejouer ?");

            if (rejouer) {
                jouerAuJeu();
            } else {
                alert("Merci d'avoir joué !");
            }
        }
        if (guess < nombreAleatoire) {
            alert("Trop bas ! Essayez encore.");
        } else if (guess > nombreAleatoire) {
            alert("Trop élevé ! Essayez encore.");
        } else {
            alert("Bravo ! Vous avez deviné le nombre en ${essais} essais.");
            const rejouer = confirm("Voulez-vous rejouer ?");

            if (rejouer) {
                jouerAuJeu();
            } else {
                alert("Merci d'avoir joué !");
            }
        }
        if (guess < nombreAleatoire) {
            alert("Trop bas ! Essayez encore.");
        } else if (guess > nombreAleatoire) {
            alert("Trop élevé ! Essayez encore.");
        } else {
            alert("Bravo ! Vous avez deviné le nombre en ${essais} essais.");
            const rejouer = confirm("Voulez-vous rejouer ?");

            if (rejouer) {
                jouerAuJeu();
            } else {
                alert("Merci d'avoir joué !");
            }
        }
        if (guess < nombreAleatoire) {
            alert("Trop bas ! Essayez encore.");
        } else if (guess > nombreAleatoire) {
            alert("Trop élevé ! Essayez encore.");
        } else {
            alert("Bravo ! Vous avez deviné le nombre en ${essais} essais.");
            const rejouer = confirm("Voulez-vous rejouer ?");

            if (rejouer) {
                jouerAuJeu();
            } else {
                alert("Merci d'avoir joué !");
            }
        }

        if (essais >= limiteEssais) {
            alert("Limite d'essais atteinte. Le nombre était ${nombreAleatoire}.");
            const rejouer = confirm("Voulez-vous rejouer ?");

            if (rejouer) {
                jouerAuJeu();
            } else {
                alert("Merci d'avoir joué !");
            }
        }
    }
}

devinerLeNombre();
jouerAuJeu();