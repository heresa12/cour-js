"use srtict";
const dark = document.querySelector("#darkTheme");
dark.addEventListener("input", changeTheme);
function changeTheme() {
    //document.body.classList.toggle("dark", dark.checked);
    if (dark.checked) {
        document.documentElement.style.setProperty("--font", "#333");
        document.documentElement.style.setProperty("--text", "antiquewhite");
        localStorage.setItem("theme", "dark");
    }
    else {
        document.documentElement.style.setProperty("--font", "antiquewhite");
        document.documentElement.style.setProperty("--text", "#333");
        localStorage.removeItem("theme");
    }
}
dark.checked = localStorage.getItem("theme") === "dark";
changeTheme();
sessionStorage.setItem("salutation", "bonjour via session storage !");
localStorage.setItem("salutation", "bonjour via local storage !");
console.log(localStorage.key(0));
//localStorage.clear();

document.addEventListener("DOMContentLoaded", function () {
    const themeSelector = document.getElementById("themeSelector");
    const content= document.getElementById("languageSelector")
    const mainTitle= document.getElementById("mainTitle")
        const randomThemeButton = document.getElementById("randomThemeButton");

    function applyTheme(selectedTheme) {
        console.log(selectedTheme);
        document.body.className = "";
        switch (selectedTheme) {
            case "theme1":
                document.body.classList.add("theme1");

                break;
            case "theme2":
                document.body.classList.add("theme2");

                break;
            case "theme3":
                document.body.classList.add("theme3");

                break;
            default:
                document.body.className = "";
        }
    }

function applyLanguage(selectedLanguage) {
    switch (selectedLanguage) {
        case "defaut":
            mainTitle.textContent="Jouons avec les thèmes:";
            break;
        case "es":
            mainTitle.textContent="Juguemos con temas:";
            break;
        case "ko":
            mainTitle.textContent="테마를 가지고 놀자 :";
            break;
    
            

    }
    
}
    themeSelector.addEventListener("change", function () {
        const selectedTheme = themeSelector.value;
        applyTheme(selectedTheme);
        localStorage.setItem("selectedTheme", selectedTheme);
    });
    languageSelector.addEventListener("change", function () {
        const selectedLanguage = languageSelector.value;
        applyTheme(selectedLanguage);
        localStorage.setItem("selectedLanguage", selectedLanguage);
    });


    const savedTheme = localStorage.getItem("selectedTheme");
    const savedLanguage = localStorage.getItem("selectedLanguage")
    if (savedTheme) {
        themeSelector.value = savedTheme;
        applyTheme(savedTheme);
    }
    if (savedLanguage) {
        languageSelector.value = savedLanguage;
        applyLanguage(savedLanguage);
    }
    randomThemeButton.addEventListener("click", function () {
        const themes = ["theme1", "theme2", "theme3"];
        const randomTheme = themes[Math.floor(Math.random() * themes.length)];
        themeSelector.value = randomTheme;
        applyTheme(randomTheme);
        localStorage.setItem("selectedTheme", randomTheme);
    });
});
