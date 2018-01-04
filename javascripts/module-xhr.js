'use strict';

const animals = require("./animals");

let carnivores = document.getElementById("carnivores");
let herbivores = document.getElementById("herbivores");

function showCarnivores(data) {
  // code that takes the carnovores array and displays it to the DOM
data.forEach (element => {carnivores.innerHTML += `<div>${element}</div>`;});

}


function showHerbivores(data) {
data.forEach(element => {herbivores.innherHTML += `<div>${element}</div>`;});
}
console.log(carnivores);

animals.loadCarnivores(showCarnivores);
animals.loadHerbivores(showHerbivores);