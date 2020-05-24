'use strict'

var tabs = null;
var steps = null; 
var backBtn = null;
var submitBtn = null;
var buttons = null;
var currentTab = null;

var stepPosition = function(tab) { //the step that corresponds to the current tab turns violet, gets the value from displayTab()
    steps[tab].style.backgroundColor = 'violet';
}

var displayTab = function(currentTab) { //displays the selected tab
    tabs[currentTab].setAttribute('style', 'display: flex !important'); //setAttribute overrides the css & changes display from none to flex to show the selected tab
    if(currentTab === 0) { //disables 'back' button in the 1st tab
        backBtn.disabled = true;
        backBtn.style.backgroundColor = '#7c375e';
    }else {
        backBtn.disabled = false;
        backBtn.style.backgroundColor = '#b14783';
    }

    if(currentTab === (tabs.length - 2)) { //changes 'next' to 'submit' before reaching the final message tab
        submitBtn.innerHTML = "Submit";
    } else {
        submitBtn.innerHTML = "Next";
    }

    if(currentTab === 5) {
        buttons.setAttribute('style', 'display: none !important');
    }

    stepPosition(currentTab);
}

var changeTab = function(buttonInput) { //displays the chosen tab
    tabs[currentTab].setAttribute('style', 'display: none !important'); //setAttribute overrides the css & hides the current tab
    currentTab += buttonInput; //increase/decrease current tab value depending on clicked button value
    console.log(buttonInput);
    displayTab(currentTab);
}

window.onload = function() {
    tabs = document.getElementsByClassName('tab');
    steps = document.getElementsByClassName('step');
    backBtn = document.getElementById('back');
    submitBtn = document.getElementById('next');
    buttons = document.getElementById('buttons');
    currentTab = 5;
    displayTab(currentTab);
}