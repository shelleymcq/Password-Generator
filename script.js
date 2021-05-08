var LowerCase = ["A", "B"]
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



// starting over.....

function gettingPassword () {
  var length = parseInt(
    prompt("Enter a password length between 8 and 128 chaaracters.")
    // check that user has entered a valid number within the range
  )
  if(Number.isNaN(length)){
    alert("that is not a number");
    return;
  }
  if (length < 8 ) {
    alert("you must have a minimum length of 8");
    return;
  }
  if (length > 128 ){
    alert("you can have a maximum length of 128");
    return;
  }

  //user selects which type of characters to include
 var hasLowerCase = confirm("Would you like to include lower case letters?")
 var hasUpperCase = confirm("Would you like to include upper case letters?")
 var hasNumber = confirm("Would you like to include numbers?")
 var hasSymbol = confirm("Would you like to include symbols?")


//check to see the users options are false or empty - if empty alert fix it and return
 if (
   hasLowerCase === false &&
   hasUpperCase === false &&
   hasNumber === false &&
   hasSymbol === false
 ) {
    alert("you must choose at least one type of character to include in");
    return;
 }

 //store options in an object
 var passwordOptionsSelected = {
   length: length,
   hasLowerCase: hasLowerCase,
   hasUpperCase: hasUpperCase,
   hasNumber: hasNumber,
   hasSymbol: hasSymbol,
 };

    return passwordOptionsSelected;
}
console.log(gettingPassword())