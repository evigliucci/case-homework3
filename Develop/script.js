// Assignment Code
var generateBtn = document.querySelector("#generate");
var passLength = "";
var minLength = 8;
var maxLength = 128;
 
//define character code sets
var lowercase_charCodes = arrayFromLowToHigh(65,90);
var uppercase_charCodes = arrayFromLowToHigh(97,122);
var number_charCodes = arrayFromLowToHigh(48,57);
var special_charCodes = arrayFromLowToHigh(33,47).concat(
    arrayFromLowToHigh(58,64)
).concat(
    arrayFromLowToHigh(91,96)
).concat(
    arrayFromLowToHigh(123,126)
)
 
//create character arrays from char codes
function arrayFromLowToHigh(low,high){
    var characterArray = []
    for (var i = low; i <= high; i++){
        characterArray.push(i);
    }
    return characterArray
};
 
// Write password to the #password input
function writePassword(passwordCharacters) {
    console.log(passwordCharacters);
    var passwordText = document.querySelector("#password");
    passwordText.value = passwordCharacters;
};
 
function getLength() {
    //Ask For Length of Password
    passLength = prompt("Please Select the Length of your password");
    //Check if it meets min and Max criteria
    if (parseInt(passLength) >= minLength && parseInt(passLength) <= maxLength) {
        //call next prompt
        chooseTypes(passLength);
    } else {
        //alert user to choose a password between 8 and 128 characters;
        alert("please select a value between 8 and 128 characters");
        //rerun prompt until true
        getLength();
    }
}
 
//ask user what characters to include
function chooseTypes(passLength) {
    var isLower = prompt("Do you want to include lower case characters? y/n");
    var isUpper = prompt("Do you want to include upper case characters? y/n");
    var isNumeric = prompt("Do you want to include numbers? y/n");
    var isSpecial = prompt("Do you want to include special characters? y/n");
 
    //set password to retun value of generate pw
    var password = generatePassword(passLength, isLower, isUpper, isNumeric, isSpecial);
    //write pw to page
    writePassword(password);
};
 

//check user choices and concatanate new array
function generatePassword(passLength, isLower, isUpper, isNumeric, isSpecial) {
    var charCodes = [];
    if(isLower == "y"){
        charCodes = charCodes.concat(lowercase_charCodes);
    } if(isUpper == "y"){
        charCodes = charCodes.concat(uppercase_charCodes);
    } if(isNumeric == "y"){
        charCodes = charCodes.concat(number_charCodes);
    } if(isSpecial == "y"){
        charCodes = charCodes.concat(special_charCodes);
    }
   
    
    var passwordCharacters = []
    for(var i = 0; i < charCodes.length; i++){
        var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode));
    }
 
    //trim array to length
    passwordCharacters = passwordCharacters.slice(0, parseInt(passLength));
    return passwordCharacters.join('');
};
 
// Add event listener to generate button
generateBtn.addEventListener("click", getLength);