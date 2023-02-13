// selecteren van elementen/classes
let mouseContainer = document.querySelector('.custom-mouse-container');
let body = document.querySelector('body');

// selecteren van alle tekst elementen/classes voor text animatie
let heading1Name = document.querySelector('h1');
let paragraphAboutMe = document.querySelector('p');

// eventlistener voor coordinaten van muis bij mousemove
body.addEventListener('mousemove', function (coordinates) {
    mouseContainer.style.top = coordinates.clientY + "px";
    mouseContainer.style.left = coordinates.clientX + "px";
})

// page reload is gelijk aan het laden van je text in met JS
window.onload = function () {
    heading1Name.classList.toggle('showText');
    paragraphAboutMe.classList.toggle('showText');
}