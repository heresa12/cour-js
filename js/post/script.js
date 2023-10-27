"use strict";
const url = "https://api.thedogapi.com/v1/images/upload";

const api_key = "469f2cf-9aad-8e7a-d72c11a91b18"

const formulaire = document.querySelector('form');
const result = document.querySelector(".result");

formulaire.addEventListener("sudmit", uploadDog);

function uploadDog(e) {
    e.preventDefault();
    const formData = new FormData(formulaire);
    console.log("chargement en cours");
    result.textContent = "Chargement en cours"
    fetch(url, {
        method: "POST",
        headers: { "x-api-key": api_key },
        body: formData
    }).then
}
function checkResponse(reponse) {
    console.log("chargement Terminé !");
    result.textContent = "Chargement Terminè !";
    if (reponse.ok) {
        reponse.json().then(data => {
            console.log(data);
            result.innerHTML+= `img src="${data.url}" alt="dog"`;
        })
    }
    else {
        console.log(reponse.statusText);
        result.textContent = reponse.statusText;
    }
}


