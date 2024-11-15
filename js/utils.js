const formValues = {};
const formValidation = {};

export const validatePassword = (e) => {
  const password = e.target.value;
  const passwordRegex = /^(?=(.*[A-Z]))(?=(.*[a-z]))(?=(.*\d))(?=(.*[\W_]))[A-Za-z\d\W_]{8,}$/;
  const isValid = passwordRegex.test(password);

  formValidation.password = isValid;

  if (isValid) {
    e.target.classList.add("valid");
    e.target.classList.remove("invalid");
  } else {
    e.target.classList.add("invalid");
    e.target.classList.remove("valid");
  }

  return isValid;
};


export const validatePasswordRepeat = (e) => {
  const repeatPassword = e.target.value;
  const originalPassword = document.getElementById("password").value;
  const isMatch = repeatPassword === originalPassword;

  if (isMatch) {
    e.target.classList.add("valid");
    e.target.classList.remove("invalid");
  } else {
    e.target.classList.add("invalid");
    e.target.classList.remove("valid");
  }

  formValidation.passwordRepeat = isMatch;
  return isMatch;
};

export const validateEmail = (email) => {
  const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return String(email).toLowerCase().match(regExp);
};

export const getValidationStatus = () => {
  return Object.values(formValidation).every((validationStatus) => !!validationStatus);
};

export const setFormValue = (valueKey, newValue, validator) => {
  formValues[valueKey] = newValue;
  if (validator !== undefined) {
    formValidation[valueKey] = validator(newValue);
  }
};

export const submitSignUpForm = () => {
  if (!getValidationStatus()) {
    console.log("FORM IS INCORRECT");
    return false;
  }

  if (formValidation.password && formValidation.passwordRepeat) {
    console.log("FORM IS FINE");
    console.log(formValues)
    return true;
  } else {
    console.log("Passwords do not match.");
    return false;
  }
};

export const submitSignInForm = () => {
  if (!getValidationStatus()) {
    console.log("FORM IS INCORRECT");
    return false;
  }

  const email = formValues["sign_in_email"];
  const password = formValues["sign_in_password"];
  console.log(email);
  console.log(password);

  if (email && password) {
    console.log("Sign In successful!");
    return true;
  } else {
    console.log("Invalid credentials.");
    return false;
  }
};