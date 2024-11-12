// Sélectionner l'élément avec l'id "myButton"
const myButton = document.getElementById('myButton');

// Ajouter un événement "click" à ce bouton
myButton.addEventListener('click', function() {
  alert('Vous avez cliqué sur le bouton !');
});

const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', function() {
  menu.classList.toggle('show');
});