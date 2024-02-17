// Assignment code here
function generatePassword() {
  // Prompt the user for password criteria
  // Ask for the password length
  var passwordLength = prompt("How many characters would you like your password to be? (8-128 characters)");
  passwordLength = parseInt(passwordLength); // Convert the input from a string to an integer
  
  // Validate the length is between 8 and 128 characters
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) { //isNaN() method returns true if a value is Not-a-Number
    alert("Password length must be between 8 and 128 characters.");
    return ""; // Stop function execution and return an empty string if validation fails
  }
  
  // Confirm whether to include lowercase, uppercase, numeric, and/or special characters
  var includeLowercase = confirm("Click OK to include lowercase characters.");
  var includeUppercase = confirm("Click OK to include uppercase characters.");
  var includeNumeric = confirm("Click OK to include numeric characters.");
  var includeSpecial = confirm("Click OK to include special characters.");
  
  // Validate that at least one character type has been selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("At least one character type must be selected.");
    return ""; // Stop function execution and return an empty string if no character types are selected
  }
  
  // Generate the password based on criteria
  var generatedPassword = ""; // Placeholder for the generated password
  
  // Define the character sets based on the selections
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+-=[]{}|;':\",./<>?";
  
  // Create a variable to hold all possible characters based on user choices
  var possibleChars = "";
  if (includeLowercase) possibleChars += lowercaseChars; // Add lowercase characters if selected
  if (includeUppercase) possibleChars += uppercaseChars; // Add uppercase characters if selected
  if (includeNumeric) possibleChars += numericChars; // Add numeric characters if selected
  if (includeSpecial) possibleChars += specialChars; // Add special characters if selected
  
  // Randomly select characters from the possibleChars string until reaching the desired length
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * possibleChars.length); // Generate a random index
    generatedPassword += possibleChars[randomIndex]; // Add the character at the random index to the generatedPassword
  }
  
  // Return the generated password
  return generatedPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // Generate the password
  var passwordText = document.querySelector("#password"); // Get the password input field

  passwordText.value = password; // Set the value of the password input to the generated password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // Listen for click events on the generate button and call writePassword function when clicked
