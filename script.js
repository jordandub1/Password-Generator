// Assignment Code
var generateBtn = document.querySelector("#generate");

//from youtube
var randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    special: getRandomSpecial
}

// Write password to the #password input
function writePassword(lower, upper, number, special, length) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  let generatePassword = '';

  var typesCount = lower + upper + number + special;

  var typesArray = [{ lower }, { upper }, { number }, { special }].filter
  (item => Object.values(item)[0]);

  if(typesCount === 0) {
      return '';
  }
  
  for(let i = 0; i < length; i += typesCount) {
      typesArray.forEach(type => {
          var funcName = Object.keys(type)

          generatePassword += randomFunc[funcName]();
      });
  }

  var 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

writePassword(hasLower, hasUpper, hasNumber, hasSpecial, length);



//Generator Functions

//Random Lowercase Letter
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

//Random Uppercase Letter
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

//Random Number
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

//Random Symbol
function getRandomSpecial() {
    var symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

result = window.prompt('How many characters does the password need to be?', '8-128');

result = window.prompt('Does the password need to include lowercase letters?', 'Y or N');

result = window.prompt('Does the password need to include uppercase letters?', 'Y or N');

result = window.prompt('Does the password need to include numbers?', 'Y or N');

result = window.prompt('Does the password need to include special characters?', 'Y or N');

//DOM Elements

let characters = window.prompt('How many characters does the password need to be?', '8-128');

