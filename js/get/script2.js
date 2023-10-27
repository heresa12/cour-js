document.addEventListener("DOMContentLoaded", function () {
    const languageSelector = document.getElementById("languageSelector");
    const mainTitle = document.getElementById("mainTitle");
    const paragraphElement = document.getElementById("paragraph"); 
    let settings; 


    fetch('language.json')
        .then(response => response.json())
        .then(data => {
            settings = data;
            applyLanguage(settings.selectedLanguage);
            displayParagraph(settings.paragraphText); 
            la();
        })
        .catch(error => console.error('Erreur lors du chargement du fichier JSON :', error));

    function applyLanguage(selectedLanguage) {
        console.log(settings);
        const titleText = settings.titleText[selectedLanguage];
        mainTitle.textContent = titleText;
    }

    function displayParagraph(paragraphText) {
        paragraphElement.textContent = paragraphText;
        console.log(paragraphText);
    }

    languageSelector.addEventListener("change", function () {
        const selectedLanguage = languageSelector.value;
        applyLanguage(selectedLanguage);
        settings.selectedLanguage = selectedLanguage;
        localStorage.setItem("selectedLanguage", selectedLanguage);

        
        fetch('language.json', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(settings),
        });
    });
    function la() {
        const savedLanguage = localStorage.getItem("selectedLanguage");

        if (savedLanguage) {
            languageSelector.value = savedLanguage;
            applyLanguage(savedLanguage);
        }
    }
    
});


