'use strict'

var tabs = null;
var steps = null; 


var stepPosition = function(tab) { //the step that corresponds to the current tab turns violet, gets the value from displayTab()
    steps[tab].style.backgroundColor = 'violet';
}

var displayTab = function(currentTab) { //displays the selected tab
    tabs[currentTab].style.display = 'flex'; //changes display from none to flex to show the selected tab
    stepPosition(currentTab);
}

window.onload = function() {
    tabs = document.getElementsByClassName('tab');
    steps = document.getElementsByClassName('step');
    displayTab(0);
}