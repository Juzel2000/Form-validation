const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const submitBtn = document.querySelector("#submit");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");
const logged = document.querySelector("#logged");
//without Regex
const specialcharectors = ["@", "!", "#", "%", "$","^","&","*","+","-",".","?","/",">","<",",","`","~","{","}","[","]","=","_","|"];

function validateEmail(email) {
  // Check if empty
  if (!email) {
    return "Please enter an email address";
  }
 

  // Split the email into two parts, the username and domain
  const parts = email.split("@");

  // Make sure there are two parts
  if (parts.length !== 2) {
    return "Please enter a valid email address";
  }

  // Make sure the username and domain are not empty
  const [username, domain] = parts;
  if (!username || !domain) {
    return "Please enter a valid email address";
  }

  // Check if the domain has a valid format
  const domainParts = domain.split(".");
  if (domainParts.length < 2) {
    return "Please enter a valid email address";
  }

  // Make sure the last part of the domain is at least 2 characters long
  const lastDomainPart = domainParts[domainParts.length - 1];
  if (lastDomainPart.length < 2) {
    return "Please enter a valid email address";
  }

  return ""; // If there are no errors, return an empty string
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

submitBtn.addEventListener("click", (e) => {
  e.preventDefault(); // To prevent reload !!
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
    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    logged.innerHTML = "Succcessfully registered";
  }
});
