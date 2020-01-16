


// API METEO MONTPELLIER EN TEMPS REEL 
let url2 = "https://www.prevision-meteo.ch/services/json/montpellier";

let request2 = async () => {
    let resultat = await fetch(url2);
    let ville = await resultat.json();
    console.log(ville);
    
    let lameteo = document.getElementsByClassName("localite");
    console.log(lameteo);
    lameteo[0].innerHTML = ville.city_info.name;
    console.log(ville.city_info.name);

    let latemp = document.getElementsByClassName("temperature");
    latemp[0].innerHTML = ville.current_condition.tmp;
    console.log(ville.current_condition.tmp);

    let licone = document.getElementsByClassName("licone");
    console.log(licone);
    licone[0].innerHTML = "<img src="  +ville.current_condition.icon_big + ">";
    console.log(ville.current_condition.icon_big);
    
}
request2();
// }

// request1();
// Récuperer les infos météo de la ville 
// const url3 = "https://api.meteomatics.com"

// let request3 = async () => {
//     let response3 = await fetch(url3);
//     let weather = await response3.json();
//     console.log(weather);
// }



// Afficher la météo 