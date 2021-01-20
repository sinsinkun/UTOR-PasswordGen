// Assignment Code
const generateBtn = document.querySelector("#generate");
const submitBtn = document.querySelector("#submitBtn");
const exitBtn = document.querySelector("#exitBtn");

//polyfill CDN for firefox & safari(?) support
dialogPolyfill.registerDialog(document.querySelector('#popup'));

// show popup modal
function showPopUp() {
  document.querySelector('#popup').showModal();
}

// exit popup modal
function exitPopup() {
  document.querySelector('#popup').close();
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  const passwordText = document.querySelector("#password");

  if (password !== null) {
    passwordText.value = password;
    exitPopup();
  }
}

function generatePassword() {
  //read in values from form
  let pwLength = parseInt(document.querySelector('#pwLength').value.replace(/[^0-9.]/g,''));
  let lwrCase = document.querySelector('#lwrCase').checked;
  let uprCase = document.querySelector('#uprCase').checked;
  let numeric = document.querySelector('#numeric').checked;
  let splChar = document.querySelector('#splChar').checked;

  // validate entries
  if( isNaN(pwLength) ) {
    alert('Password length must be a numerical value.');
    return null;
  }
  if( pwLength < 8 || pwLength > 128 ) {
    alert('Password length is incorrect. Must be between 8-128.');
    return null;
  }
  if (!lwrCase && !uprCase && !numeric && !splChar) {
    alert('At least one checkbox must be ticked.');
    return null;
  }
  
  // build set of characters to choose from
  const charsLower = "abcdefghijklmnopqrstuvwxyz"
  const charsUpper = charsLower.toUpperCase()
  const charsNumbers = "012345679"
  const charsSpecial = "!@#$%^&*()_+"
  let charSet = (lwrCase ? charsLower : '' ) + (uprCase ? charsUpper : '') + 
  (numeric ? charsNumbers : '') + (splChar ? charsSpecial : '');
  
  // generate password
  let pw = '';
  for (let i=0; i<pwLength; i++) {
    let randChar = Math.floor(Math.random()*charSet.length);
    pw += charSet[randChar];
  }

  return pw;
}

// Add event listener to generate button
generateBtn.addEventListener("click", showPopUp);
submitBtn.addEventListener("click", writePassword);
exitBtn.addEventListener("click", exitPopup);

function something() {

  'use strict';
  var dialog = document.querySelector('#modal-example');
  var closeButton = dialog.querySelector('button');
  var showButton = document.querySelector('#show-modal-example');

  if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
  }
  var closeClickHandler = function(event) {
      dialog.close();
  };
  var showClickHandler = function(event) {
      dialog.showModal();
  };
  showButton.addEventListener('click', showClickHandler);
  closeButton.addEventListener('click', closeClickHandler);
};