"use strict";

const Person = {
    name: {
        prenom: "Maurice",
        nom: "DUPONT"
    },
    age: 54,

    set setAge(a) {
        this.age = parseInt(a)
        if (isNaN(this.age))
            this.age = 0;


    },
    set setNom(n) {

        this.name.nom = n.toUpperCase();
    },
    set setPrenom(p) {
        this.name.prenom =
            p[0].toUpperCase() + p.slice(1).toLowerCase();
    },
 
    get getFullName() {
        return this.name.prenom + " " + this.name.nom;
    },

    salutation() {
        console.log(`Bonjour, je suis ${this.getFullName} et j'ai ${this.age} ans.`);
    },
    anniversaire() {
        this.age++;
        this.salutation();
    }
};
export default Person;


export const Person2 = {
    name: {
        prenom: "Charli",
        nom: "FONTAINE"
    },
    age: 78,
    set setAge(a) {
        let age = parseInt(a)
        this.age = isNaN(age) ? 0 : age;
    },
    set setNom(n) {
        this.name.nom = n.toUpperCase();
    },
    set setPrenom(p) {
        this.name.prenom =
            p[0].toUpperCase() + p.slice(1).toLowerCase();
    },
    get getFullName() {
        return this.name.prenom + " " + this.name.nom;
    },
    salutation() {
        console.log(`Bonjour, je suis ${this.getFullName} et j'ai ${this.age} ans.`);
    },
    anniversaire() {
        this.age++;
        this.salutation();
    }
};