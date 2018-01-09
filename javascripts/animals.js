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

