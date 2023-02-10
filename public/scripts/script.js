// selecteren van elementen/classes
let mouseContainer = document.querySelector('.custom-mouse-container');
let body = document.querySelector('body');

body.addEventListener('mousemove', function(coordinates){
    mouseContainer.style.top = coordinates.clientY + "px";
    mouseContainer.style.left = coordinates.clientX + "px";
})


