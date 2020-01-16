// Récuperer l'adresse ip du pc qui ouvre la page //
let url1 = "https://api.ipify.org?format=json"

let request1 = async () => {
    let response1 = await fetch(url1);
    let ip = await response1.json();
    console.log(ip);


// Récuperer la ville grâce à l'adresse IP 
const url2 = "http://freegeoip.io/json/"+ ip

let request2 = async () => {
    let response2 = await fetch(url2);
    let ville = await response2.json();
    console.log(ville);
}
request2();
}

request1();
// Récuperer les infos météo de la ville 
// const url3 = "https://api.meteomatics.com"

// let request3 = async () => {
//     let response3 = await fetch(url3);
//     let weather = await response3.json();
//     console.log(weather);
// }



// Afficher la météo 