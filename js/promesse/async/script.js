"use strict";

fetch("tab.json").then(res => {
    if (res.ok) {
        res.json().then(data => {
            tri(data).then(message => {
                console.log(message, data);
            })
                .catch(err => console.log(err))
        })
            .catch(err => console.log(err))
    }
})

async function exemple() {
    let data;
    let resp = await fetch("tab.json");
    console.log(resp);
    if (resp.ok) {

        try {
            data = await resp.json();
            let message = await tri(data);
            console.log(message);
        }
        catch (err) {
            console.log(err);
        }

        finally {
            console.log(data);
        }
    }
}

async function burger() {
    console.log(await pain2());
    console.log(await sauce2());
    console.log(await viande2());
    console.log(await salade2());
    console.log("Mon burger est terminé");
}

function pain2() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Le pain est grillé")
        }, 1000)
    })
}
function sauce2() {
    return new Promise(resolve => {
        resolve("La sauce est versé")
    })
}
function viande2() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("La viande est cuite et placé")
        }, 3000)
    })
}
function salade2() {
    return new Promise(resolve => {
        resolve("La salade est placé")
    })
}
function tri(tab) {
    return new Promise((resolve, reject) => {
        tab.sort((a, b) => {
            if (typeof (a) !== typeof (b)) {
                reject("Tous les éléments du tableau ne sont pas de même type.");
            }
            return a - b;
        })
        resolve("Le tableau a été correctement trié");
    });
}

// exo
"use strict";
const lights = document.querySelectorAll('#trafficLight > div');
function changeColor(index, resolve) {
    let colors = ["red", "orange", "green"];
    lights.forEach((l, i) => {
        l.style.backgroundColor = i != index ? "" : colors[i]
    })
    resolve();
}
function switchPromise(time, i) {
    return new Promise(resolve => {
        setTimeout(changeColor, time, i, resolve);
    })
}

function step() {
    switchPromise(2000, 2)
        .then(() => switchPromise(3000, 1))
        .then(() => switchPromise(1000, 0))
        .then(() => step());
}
step()
async function step() {
    await switchPromise(2000, 2);
    await switchPromise(3000, 1);
    await switchPromise(1000, 0);
    step();
}
step()

