'use strict'

var step = null; 

var stepPosition = function(tab) { //the step that corresponds to the current tab turns violet
    step[tab].style.backgroundColor = 'violet';
}

window.onload = function() {
    step = document.getElementsByClassName('step');
    stepPosition(0);
}