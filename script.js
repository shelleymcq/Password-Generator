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




const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

//some characters made JS unhappy, so I left them out
const characters = ["!", "#", "$", "%", "^", "&", "*", "-", "+", "/", "<", "=", ">", "@", "?"]

//Math.floor rounds number down to whole number
const randomUpper = uppercase[Math.floor(Math.random()*uppercase.length)]

console.log(randomUpper)

const randomLower = lowercase[Math.floor(Math.random()*lowercase.length)]

console.log(randomLower)

const randomNumber = numbers[Math.floor(Math.random()*numbers.length)]

console.log(randomNumber)

const randomChar = characters[Math.floor(Math.random()*characters.length)]

console.log(randomChar)




