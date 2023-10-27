"use strict"
const url = "/hero.json";

/*const xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = handleRequest
xmlhttp.open("GET", url, true);
xmlhttp.send();
function handleRequest() {
    console.log(xmlhttp.readyState, xmlhttp.status);
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        let success, data;
        try {
            console.log(xmlhttp.responseText);
            data = JSON.parse(xmlhttp.responseText)
            console.log(data);
            success = true;
        }
        catch (e) {
            console.error(e.message + "dans->" + xmlhttp.responseText);
            success = false
        }
        finally {
            if (success) {
                document.body.innerHTML = `<h1>${data.squadName}</h1>`;
            }
        }
    }
}

fetch(url).then(handleFetch);
function handleFetch(response) {
    console.log(response);
    if (response.ok) {
        response.json()
            .then(data => {
                document.body.innerHTML += `<h2>${data.homeTown}</h2>`
            })
          //  .catch(error => console.error(error))
    }
    else {
        console.error(response.statusText);
    }
}*/

fetch('hero.json')
    .then(response => response.json())
    .then(data => {

        if (data.squadName && data.members) {
            const squadName = data.squadName;
            const members = data.members;
            let selectedMembersDiv;

            const squadNameElement = document.createElement('h1');
            squadNameElement.textContent = squadName;
            document.body.appendChild(squadNameElement);


            const memberSelector = document.createElement('select');
            memberSelector.multiple = true;
            members.forEach(member => {
                const option = document.createElement('option');
                option.value = member.name;
                option.textContent = member.name;
                memberSelector.appendChild(option);
            });
            document.body.appendChild(memberSelector);

            memberSelector.addEventListener('change', () => {

                if (selectedMembersDiv) {
                    selectedMembersDiv.remove();
                }

                const selectedMembers = Array.from(memberSelector.selectedOptions, option => option.value);
                selectedMembersDiv = document.createElement('div');
                selectedMembersDiv.innerHTML = '<h2>Membres sélectionnés :</h2>';
                selectedMembers.forEach(selectedMember => {
                    const member = members.find(member => member.name === selectedMember);
                    if (member) {
                        selectedMembersDiv.innerHTML += `<p>Name: ${member.name}, Age: ${member.age}, Secret Identity: ${member.secretIdentity}</p>`;
                    }
                });
                document.body.appendChild(selectedMembersDiv);
            });
        } else {
            console.error('La structure du fichier JSON ne correspond pas aux attentes.');
        }
    })
    .catch(error => console.error('Erreur lors du chargement du fichier JSON :', error));

