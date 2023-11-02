"use strict";
import P from "./Paint2.js";
import G from "./JustePrix.js";
import S from "./Slider2.js";
const paint = P.create();
const justePrix = G.create();
const sliderCaptions = ['La Grande  Muraille de Chine sous la neige', 'Coree Du Sud Ville de Deagu', 
'Japon Chateau Himeji Region Setouchi','Laos Bord Du Fleuve Le Mekong '];
const sliderImages = S.create(["./chine.jpg","./coree.jpg","./japon.jpg", "./laos.jpg"],sliderCaptions);

// const slider = S.create(sliderImages, sliderCaptions);

const select = document.querySelector('select#appli');
const appli = document.querySelector('div.appli');
select.addEventListener("input", selectAppli)
selectAppli.bind(select)();


function selectAppli()
{
    appli.firstChild?.remove();
    switch(this.value)
    {
        case "slider":
            appli.append(sliderImages);
        
            break;
        case "justePrix":
            appli.append(justePrix);
            break;
        case "paint":
            appli.append(paint);
            P.resize();
            break;
    }
}
