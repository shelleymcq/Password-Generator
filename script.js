// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lower = 'abcdefghijklmnopqrstuvwxyz';
var number = '0123456789'
var symbol = '!@#$%^&*_+`-=<>?';

//How do we set range of numbers?
var num = ''

//charAt selects character at a certain position in string
//Math.floor rounds number down to whole number
//Math.random produces random number

function generatePassword(num) {
  var pswd = '';
  var num = '12lkdsfglkjdfg';
  for (var i = 0; i < num.length; i++) {
      pswd += upper.charAt(Math.floor(Math.random() * upper.length));
      console.log(pswd);
    }
  }

generatePassword()








