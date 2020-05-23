'use strict'

var tabs = null;
var steps = null; 
var backBtn = null;
var submitBtn = null;

var stepPosition = function(tab) { //the step that corresponds to the current tab turns violet, gets the value from displayTab()
    steps[tab].style.backgroundColor = 'violet';
}

var displayTab = function(currentTab) { //displays the selected tab
    tabs[currentTab].style.display = 'flex'; //changes display from none to flex to show the selected tab
    if(currentTab === 0 || currentTab === 5) { //disables 'back' button in the 1st & final tab
        backBtn.disabled = true;
        backBtn.style.backgroundColor = '#7c375e';
    }

    if(currentTab === (tabs.length - 2)) { //changes 'next' to 'submit' before reaching the final message tab
        submitBtn.innerHTML = "Submit";
    } else {
        submitBtn.innerHTML = "Next";
    }

    stepPosition(currentTab);
}

window.onload = function() {
    tabs = document.getElementsByClassName('tab');
    steps = document.getElementsByClassName('step');
    backBtn = document.getElementById('back');
    submitBtn = document.getElementById('next');
    displayTab(4);
}