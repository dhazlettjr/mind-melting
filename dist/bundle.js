(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

let carnivores = [];
let herbivores = [];

let loadCarnivores = function(callbackToInvoke) {
  const loader = new XMLHttpRequest();

  loader.addEventListener("load", function() {
    // Set the value of the private array
    carnivores = JSON.parse(this.responseText);
    callbackToInvoke(carnivores.carnivores);

    // Now exeute the callback function (`callbackToInvoke`) so that the caller knows that the process is complete. Make sure to pass the carnivore array as an argument.
  });

  loader.open("GET", "carnivores.json");
  loader.send();
};

  let loadHerbivores = function(callbackToInvoke) {
      const loader = new XMLHttpRequest();

  loader.addEventListener("load", function () {
      herbivores = JSON.parse(this.responseText);
      callbackToInvoke(herbivores.herbivores);
  });

  loader.open("GET", "herbivores.json");
  loader.send();
  };


module.exports = { loadCarnivores, loadHerbivores };


},{}],2:[function(require,module,exports){
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
},{"./animals":1}]},{},[2]);
