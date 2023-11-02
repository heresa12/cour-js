"use strict";
const Game = {
    input: document.createElement("input"),
    btn: document.createElement("button"),
    p: document.createElement("p"),
    create(){
        this.input.setAttribute("type","number");
        this.btn.textContent = "Tenter";
        this.p.textContent = "Choisi un nombre entre 0 et 100";
        
        const div = document.createElement("div");
        div.style.display = "flex";
        div.style.flexDirection = "column";
        div.style.alignItems = "center";
        div.append(this.p, this.input, this.btn);

        this.btn.addEventListener("click", this.check.bind(this));
        this.start();
        return div;
    },
    start(){
        this.target = Math.floor(Math.random()*100);
        this.input.focus();
    },
    check(){
        if(this.input.value <this.target){
            this.p.textContent = "C'est plus grand !";
        }else if(this.input.value > this.target){
            this.p.textContent = "C'est plus petit !";
        }else{
            this.p.textContent= "Félicitation tu as gagné !";
            this.btn.disabled = true;
        }
        this.input.value = "";
        this.input.focus();
    }
}
export default Game;