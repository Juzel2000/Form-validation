const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const submitBtn = document.querySelector("#submit");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");
const logged = document.querySelector("#logged");
const specialcharectors = ["@", "!", "#", "%", "$","^","&","*","+","-",".","?","/",">","<",",","`","~","{","}","[","]","=","_","|"];

function validateEmail(email){
  function ValidateEmail(mail){
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return 'valid email'
  }
    // alert("You have entered an invalid email address!")
    return "invalidd"
}

}



function validatePassword(password) {
  // Check if password empty
  if (!password.length) {
    return "Enter Password!";
  }

  // Check if password is between 8-16 characters long
  if (password.length <= 8 || password.length >= 16) {
    return "Password must be between 8 to 16 characters long";
  }

  // Check if password contains at least one uppercase letter, one lowercase letter, and one number
  let hasUpperCase = false;
  let hasLowerCase = false;
  let hasNumber = false;
  let hasSpecialChar = false;
  
  for (let i of password) {
    // const char = i;
    if (i >= "A" && i <= "Z") {
      hasUpperCase = true;
    } else if (i >= "a" && i <= "z") {
      hasLowerCase = true;
    } else if (i >= "0" && i <= "9") {
      hasNumber = true;
    }
  }
  // Check special charecter
  for (let j of specialcharectors) {
    
    if (password.includes(j)) {
      hasSpecialChar = true;
      break;
    }
    
    
  }
  console.log(hasSpecialChar);

  if (!hasUpperCase || !hasLowerCase || !hasNumber ) {
    return "Password must contain at least one uppercase letter, one lowercase letter, and one number";
  }
  else if(!hasSpecialChar){
    return "Password must contain at least one special charector"
  }

  return ""; // If there are no errors, return an empty string
}
passwordInput.onblur = function() {
  console.log()
}

passwordInput.onkeyup = function() {
  const email = emailInput.value; // Get the current value of the email input
  const password = passwordInput.value; // Get the current value of the password input
  const emailErrorText = validateEmail(email); // Validate the email and get the error message
  const passwordErrorText = validatePassword(password); // Validate the password and get the error message
  if (emailErrorText || passwordErrorText) {
    // If there is an error message, display it in the emailError and/or passwordError element
    emailError.innerHTML = emailErrorText;
    passwordError.innerHTML = passwordErrorText;
    logged.innerHTML = "";
  } else if (emailErrorText === "" && passwordErrorText === "") {
    // If there are no errors, clear the emailError and passwordError elements
    emailError.innerHTML = "You can submit";
    passwordError.innerHTML = "";
    logged.innerHTML = "You can submit";
  }

}
