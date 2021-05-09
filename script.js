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


// request desired parameters from user

function generatePassword () {
  // convert desired length to an integer
    let length = parseInt(
      prompt("Enter a password length between 8 and 128 chaaracters.")
    )
  // check that user has entered a valid number within the range
    
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
    let hasLowerCase = confirm("Would you like to include lower case letters?")
    let hasUpperCase = confirm("Would you like to include upper case letters?")
    let hasNumber = confirm("Would you like to include numbers?")
    let hasSymbol = confirm("Would you like to include symbols?")
  
  
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
    let passwordOptionsSelected = {
      length: length,
      hasLowerCase: hasLowerCase,
      hasUpperCase: hasUpperCase,
      hasNumber: hasNumber,
      hasSymbol: hasSymbol,
    };
  
    let passwordArr = []
  
      if (passwordOptionsSelected.hasLowerCase) {
        passwordArr.push('abcdefghijklmnopqrstuvwxyz');
      }
      if (passwordOptionsSelected.hasUpperCase) {
        passwordArr.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
      } 
      if (passwordOptionsSelected.hasNumber) {
        passwordArr.push('0123456789')
      }
      if (passwordOptionsSelected.hasSymbol) {
        passwordArr.push('!@#$%^&*_+`-=<>?')
      }
    
      // turn array into string
    let passwordString = passwordArr.join("")
  

  // I'll keep trying but needed to turn something that was almost working in.
  // started returning undefined at the beginning of the password and I can't figure out why. It worked in earlier versions and the code in the passwordArr above and the for loop below is the same???????
  
    let pword;
      for(var i = 0; i < length; i++) {
        pword = pword + passwordString.charAt(Math.floor(Math.random() * passwordString.length));
      }
  
      return pword;
  }
  