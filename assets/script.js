// Assignment Code
var generateBtn = document.querySelector("#generate");

//Store password options
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">"];

//Generate password

var generatePassword = function () {
  // Ask user to select the length of password
  var passwordLength = window.prompt("How many characters would you like your password to be? (Must be between 8 and 125 characters");

  //If password is outside of the parameters, ask them to chose again
  if (passwordLength <= 7 || passwordLength >= 126) {
    window.alert("Password must be between 8 and 125 characters. Please try again");
    var passwordLength = window.prompt("How many characters would you like your password to be? (Must be between 8 and 125 characters");
  }

  //Ask user if they want to include lowercase, uppercase, numbers and/or special characters in their password
  var lowerInclude = window.confirm("Do you want to include lower case letters in your password?");
  var upperInclude = window.confirm("Do you want to include upper case letters in your password?");
  var numberInclude = window.confirm("Do you want to include numbers in your password?");
  var specialInclude = window.confirm("Do you want to include special characters in your password? (ex. !@#$%)");

  //If user doesn't select any of the options, alert them that they must and recirculate them through the options
  if (!lowerInclude && !upperInclude && !numberInclude && !specialInclude) {
    window.alert("Must include at lease one of the options")
    var lowerInclude = window.confirm("Do you want to include lower case letters in your password?");
    var upperInclude = window.confirm("Do you want to include upper case letters in your password?");
    var numberInclude = window.confirm("Do you want to include numbers in your password?");
    var specialInclude = window.confirm("Do you want to include special characters in your password? (ex. !@#$%)");
  }
  
  console.log (lowerInclude, upperInclude, numberInclude, specialInclude);
  
  //Create a new array based on users choices
  var passwordCharacters = [];

  if (lowerInclude) {
    passwordCharacters = passwordCharacters.concat(lowerCase);
  }
  if (upperInclude) {
    passwordCharacters = passwordCharacters.concat(upperCase);
  }
  if (numberInclude) {
    passwordCharacters = passwordCharacters.concat(number);
  }
  if (specialInclude) {
    passwordCharacters = passwordCharacters.concat(specialChar);
  }
 
  console.log(passwordCharacters)

  //Generate a new password based on user choices
  var randomPassword = ""

  for (var i = 0; i < passwordLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];

    console.log(randomPassword);
  }
  return randomPassword; 

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
