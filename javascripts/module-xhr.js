'use strict';

const animals = require("./animals");

let carnivores = document.getElementById("carnivores");
let herbivores = document.getElementById("herbivores");

function showCarnivores(data) {
  // code that takes the carnovores array and displays it to the DOM
  console.log('carnivores',data);
  
data.forEach (element => {
  carnivores.innerHTML += `<div>${element.type}</div>`;});

}


function showHerbivores(data) {
  console.log('herbivores',data);
  
data.forEach(element => {
  
  herbivores.innerHTML += `<div>${element.type}</div>`;});
}
console.log(carnivores);

 animals.loadCarnivores(showCarnivores);
 animals.loadHerbivores(showHerbivores);