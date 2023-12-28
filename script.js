var submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", function () {
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  function validateEmail(email) {
    // Define a regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the email against the regular expression
    return emailRegex.test(email);
  }

  function validatePassword(password) {
    // At least 8 characters, one uppercase letter, one lowercase letter, one digit, and one special character
    const passwordRegex =
      /^[A-Za-z\d@$!%*?&]{8,}$/;

    // Test the password against the regular expression
    return passwordRegex.test(password);
  }

  let firstNameError = document.getElementById("first-name-error");
  let firstNameWarning = document.getElementById("first-name-warning");
  let lastNameError = document.getElementById("last-name-error");
  let lastNameWarning = document.getElementById("last-name-warning");
  let emptyEmailError = document.getElementById("empty-email-error");
  let invalidEmailWarning = document.getElementById("invalid-email-warning");
  let emailWarning = document.getElementById("email-error");
  let emptyPasswordWarning = document.getElementById("empty-password-warning");
  let invalidPasswordError = document.getElementById("invalid-password-error");
  let passwordError = document.getElementById("password-error");

  if (!firstName) {
    firstNameError.classList.remove("opacity-0");
    firstNameWarning.classList.remove("opacity-0");
  } else {
    firstNameError.classList.add("opacity-0");
    firstNameWarning.classList.add("opacity-0");
  }

  if (!lastName) {
    lastNameError.classList.remove("opacity-0");
    lastNameWarning.classList.remove("opacity-0");
  } else {
    lastNameError.classList.add("opacity-0");
    lastNameWarning.classList.add("opacity-0");
  }

  if (!email) {
    emptyEmailError.classList.remove("opacity-0");
    emailWarning.classList.remove("opacity-0");
  } else if (validateEmail(email)) {
    invalidEmailWarning.classList.add("opacity-0");
    emailWarning.classList.add("opacity-0");
  } else {
    invalidEmailWarning.classList.remove("opacity-0");
    emptyEmailError.classList.add("opacity-0");
    emailWarning.classList.remove("opacity-0");
  }
  if (!password){
    emptyPasswordWarning.classList.remove("opacity-0")
    passwordError.classList.remove("opacity-0")
  }else if(validatePassword(password)){
    invalidPasswordError.classList.add("opacity-0")
    passwordError.classList.add("opacity-0")
  }else{
    invalidPasswordError.classList.remove("opacity-0")
    emptyPasswordWarning.classList.add("opacity-0")
    passwordError.classList.remove("opacity-0")
  }

  // Basic form validation
  // if (!firstName || !lastName || !email || !password) {
  //             alert("Please fill out all fields.");
  //             return;
  //         }

  console.log("First Name", firstName);
  console.log("Last Name", lastName);
  console.log("Email", email);
  console.log("Password", password);
});
