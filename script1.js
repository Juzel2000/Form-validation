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
  // Check if password empty
  if (!password.length) {
    return "Enter Password!";
  }
  
  // Check if password is between 8-16 characters long
  if (password.length <= 8 || password.length >= 16) {
    return "Password must be between 8 to 16 characters long";
  }
  // capital letter
  var upperCaseLetters = /[A-Z]/g;
  if(!password.match(upperCaseLetters)) {
    console.log("jj")
    return "Atleast one capital letter!"
  }
  var numbers = /[0-9]/g;
  if(!password.match(numbers)) {
    console.log("kk")
    return "Atleast one Number!"
  }
  var lowercaseletter = /[a-z]/g;
  if(!password.match(lowercaseletter)) {
    console.log("kk")
    return "Atleast one lowercaseletter!"
  }
  var specialchar=  /[-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/;
  if(!password.match(specialchar)) {
    console.log("kk")
    return "Atleast one specialchar!"
  }

  return ""; // If there are no errors, return an empty string
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
    submitBtn.addEventListener('click',function(){
      logged.innerHTML = "Type correct password";
    })
    
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
  } else if (emailErrorText === "" && passwordErrorText === "") {
    // If there are no errors, clear the emailError and passwordError elements
    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    
  }
}
submitBtn.addEventListener('click',function(){
  if(!validateEmail(email.value) && !validatePassword(password.value)){
    logged.innerHTML = "Succcessfully registered";

  }else{
    logged.innerHTML = "Not registered";

  }
  
})
















// submitBtn.addEventListener("click", (e) => {
//   e.preventDefault(); // To prevent reload !!
//   const email = emailInput.value; // Get the current value of the email input
//   const password = passwordInput.value; // Get the current value of the password input
//   const emailErrorText = validateEmail(email); // Validate the email and get the error message
//   const passwordErrorText = validatePassword(password); // Validate the password and get the error message
//   if (emailErrorText || passwordErrorText) {
//     // If there is an error message, display it in the emailError and/or passwordError element
//     emailError.innerHTML = emailErrorText;
//     passwordError.innerHTML = passwordErrorText;
//     logged.innerHTML = "";
//   } else if (emailErrorText === "" && passwordErrorText === "") {
//     // If there are no errors, clear the emailError and passwordError elements
//     emailError.innerHTML = "";
//     passwordError.innerHTML = "";
//     logged.innerHTML = "Succcessfully registered";
//   }
  
// });
