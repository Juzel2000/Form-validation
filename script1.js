const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const submitBtn = document.querySelector("#submit");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");
const logged = document.querySelector("#logged");
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function validateEmail(email) {
  // Check if empty
  if (!email) {
    return "Please enter an email address";
  }
  if(!emailInput.value.match(mailformat)){
    return "Please enter valid email address";
  }
  return ""; // If there are no errors, return an empty string  
}


function validatePassword(password) {
  switch (true) {
    case (!password.length):
      return "Enter Password!";
    case (password.length <= 8 || password.length >= 16):
      return "Password must be between 8 to 16 characters long";
    case (!password.match(/[A-Z]/g)):
      return "Atleast one capital letter!";
    case (!password.match(/[0-9]/g)):
      return "Atleast one Number!";
    case (!password.match(/[a-z]/g)):
      return "Atleast one lowercaseletter!";
    case (!password.match(/[-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/)):
      return "Atleast one specialchar!";
    default:
      return "";
  }
}
emailInput.onkeyup=function(){
  const email = emailInput.value; // Get the current value of the email input
  const emailErrorText = validateEmail(email); // Validate the email and get the error message
  if (emailErrorText) {
    // If there is an error message, display it in the emailError and/or passwordError element
    emailError.innerHTML = emailErrorText;
    logged.innerHTML = "";
  } else if (emailErrorText === "") {
    // If there are no errors, clear the emailError and passwordError elements
    emailError.innerHTML = "";
    passwordError.innerHTML = "";
  }
}
passwordInput.onkeyup=function(){
  const email = emailInput.value; // Get the current value of the email input
  const password = passwordInput.value; // Get the current value of the password input
  const emailErrorText = validateEmail(email); // Validate the email and get the error message
  const passwordErrorText = validatePassword(password); // Validate the password and get the error message
  if (passwordErrorText) {
    // If there is an error message, display it in the emailError and/or passwordError element
    
    passwordError.innerHTML = passwordErrorText;
    logged.innerHTML = "";
  } else if (passwordErrorText === "") {
    // If there are no errors, clear the emailError and passwordError elements
    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    
  }
}
submitBtn.addEventListener('click',function(e){
  e.preventDefault()
  if(!validateEmail(emailInput.value) && !validatePassword(passwordInput.value)){
    logged.style.color = "Green";
    logged.innerHTML = "Succcessfully Logged";

  }else{
    logged.style.color = "Red";
    logged.innerHTML = "Login error";

  }
  
})













