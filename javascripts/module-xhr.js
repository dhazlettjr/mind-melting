'use strict';

const animal = require("./animals");

let carnivoresBox = document.getElementById("carnivores");
let herbivoresBox = document.getElementById("herbivores");

function showCarnivores(animals) {
  // code that takes the carnovores array and displays it to the DOM
carnivoresBox.innerHTML = carnivores;
console.log(showCarnivores);
}


function showHerbivores(animals) {

}

animals.loadCarnivores(showCarnivores);
animals.loadHerbivores(showHerbivores);