// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//from Jim Wednesday

function generatePassword() {


  return 
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






// request desired password length
// parseInt changes a string to a number (w3schools)

function length() {
  const passwordLength = prompt("Enter a password length between 8 and 128");
  return parseInt(passwordLength);
}
console.log(length())

// request user to select character types and respond with their selection
// I feel like I should be able to do this with one less variable, but couldn't get it to work

let resultUpper = confirm("Would you like to include upper case letters?");
let messageUpper = resultUpper
  if (resultUpper) {
     messageUpper = 'You clicked OK for upper case';
  } else {
     messageUpper = 'You clicked Cancel';
}
alert(messageUpper);

let resultLower = confirm("Would you like to include lower case letters?");
let messageLower = resultLower
  if (resultLower) {
     messageLower = 'You clicked OK for lower case';
  } else {
     messageLower = 'You clicked Cancel';
}
alert(messageLower);

let resultNumber = confirm("Would you like to include numbers?");
let messageNumber = resultNumber
  if (resultNumber) {
     messageNumber = 'You clicked OK for numbers';
  } else {
     messageNumber = 'You clicked Cancel';
}
alert(messageNumber);

let resultSymbol = confirm("Would you like to include symbols?");
let messageSymbol = resultSymbol
  if (resultSymbol) {
     messageSymbol = 'You clicked OK for symbols';
  } else {
     messageSymbol = 'You clicked Cancel';
}
alert(messageSymbol);


// create array of possible characters from user preferences

let passwordArr = []

if (resultUpper) {
  passwordArr.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
} 

if (resultLower) {
  passwordArr.push('abcdefghijklmnopqrstuvwxyz');
}

if (resultNumber) {
  passwordArr.push('0123456789')
}

if (resultSymbol) {
  passwordArr.push('!@#$%^&*_+`-=<>?')
}

console.log(passwordArr)