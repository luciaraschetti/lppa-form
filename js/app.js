'use strict'

var form = null;
var tabs = null;
var steps = null; 
var backBtn = null;
var submitBtn = null;
var buttons = null;
var currentTab = null;
var inputs = null;
var wentBack = null;
var isValid = null;

var stepPosition = function(tab) { //the step that corresponds to the current tab turns violet, gets the value from displayTab()
    if(wentBack){ //if wentBack is true, changes the current tab to violet & the next tab back to grey
        steps[tab].style.backgroundColor = 'violet';
        steps[(tab + 1)].style.backgroundColor = '#bbbbbb';
    } else {
        steps[tab].style.backgroundColor = 'violet';
    }
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
        submitBtn.innerHTML = 'Submit';
    } else {
        submitBtn.innerHTML = 'Next';
    }

    if(currentTab === 5) {
        buttons.setAttribute('style', 'display: none !important');
    }

    stepPosition(currentTab);
}

var validateForm = function() {
    //window.console.clear();
    var onlyLetters = /^[a-zA-Z]*$/; //regular expression that contains only letters
    var onlyNumbers = /^([1-9]?\d|100)$/; //regular expression that contains only numbers from 0-100
    var validEmail = /[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/; // regular expression that contains possible email formats
    var isValid = true;

    for(var i = 0; i < 4; i++) { //checks every input in the first tab
        var currentInput = inputs[i].id;

        if(inputs[i].value === "") { //validates empty fields
            console.log( `%c (${currentInput}): Empty field 😕`, 'color: #b14783; font-weight: bold; font-size: 1rem; background-color: #2c2c48da;');
            isValid = false;
        } else {
            if(inputs[i].id === 'first-name' || inputs[i].id === 'last-name') {
                if(inputs[i].value.length < 3) { //validates for input longer than 3 characters
                    console.log(`%c (${currentInput}): Please enter more than 3 caracters 😅`, 'color: #b14783; font-weight: bold; font-size: 1rem; background-color: #2c2c48da;'); 
                    isValid = false;
                } else if (!onlyLetters.test(inputs[i].value)) {
                    console.log(`%c (${currentInput}): Please use letters and spaces only 😅`, 'color: #b14783; font-weight: bold; font-size: 1rem; background-color: #2c2c48da;'); 
                    isValid = false;
                }
            }
            if(inputs[i].id === 'age') { //validates age input
                if(!onlyNumbers.test(inputs[i].value)) { 
                    console.log(`%c (${currentInput}): Please use whole numbers between 0-100 only 👵👴`, 'color: #b14783; font-weight: bold; font-size: 1rem; background-color: #2c2c48da;'); 
                    isValid = false;
                }
            }
            if(inputs[i].id === 'email') { //validates email input
                if(!validEmail.test(inputs[i].value)) {
                    console.log(`%c (${currentInput}): Invalid email format 📧`, 'color: #b14783; font-weight: bold; font-size: 1rem; background-color: #2c2c48da;'); 
                    isValid = false;
                }
            }
        }
        
    }
    return isValid;
}

var changeTab = function(buttonInput) { //displays the chosen tab
    if(!validateForm() && buttonInput === 1) { //when clicking 'next', exits the function if there are any input errors
        return false; 
    }

    tabs[currentTab].setAttribute('style', 'display: none !important'); //setAttribute overrides the css & hides the current tab
    
    if(buttonInput === -1) { //true if user clicked on 'back' button
        wentBack = true;
    } else {
        wentBack = false;
    }

    currentTab += buttonInput; //increase/decrease current tab value depending on clicked button value

    displayTab(currentTab);
}

window.onload = function() {
    form = document.getElementById('registration-form');
    tabs = document.getElementsByClassName('tab');
    steps = document.getElementsByClassName('step');
    backBtn = document.getElementById('back');
    submitBtn = document.getElementById('next');
    buttons = document.getElementById('buttons');
    inputs = document.getElementsByTagName('input');
    currentTab = 0;
    wentBack = false;
    isValid = true;
    displayTab(currentTab);
}