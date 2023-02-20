const specialcharectors = ["@", "!", "#", "%", "$","^","&","*","+","-",".","?","/",">","<",",","`","~","{","}","[","]","=","_","|"];

function validateEmail(email) {
    // Check if empty
    if (!email) {
      return "Please enter an email address";
    }
  
    //
    for (let k of specialcharectors) {
      firstLetter = email.charAt(0);
      lastLetter = email.charAt(email.length-1)
      if(firstLetter==k || lastLetter==k){
        return "Please enter an email address";
      }
      
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