import { setFormValue, submitSignUpForm, submitSignInForm, validateEmail, validatePassword, validatePasswordRepeat, getValidationStatus } from "./utils.js";

const first_name_id = 'first_name';
const last_name_id = 'last_name';
const password_id = 'password';
const email_id = 'email';
const sign_in_link_id = 'sign_in_link';
const sign_up_form_id = 'sign_up_form';
const sign_up_btn_id = 'sign_up_btn';
const sign_in_form_id = 'sign_in_form';
const sign_in_btn_id = 'sign_in_btn';

const first_name = document.getElementById(first_name_id);
first_name.oninput = (e) => {
  setFormValue(first_name_id, e.target.value);
  toggleSubmitButton();
};

const last_name = document.getElementById(last_name_id);
last_name.oninput = (e) => {
  setFormValue(last_name_id, e.target.value);
  toggleSubmitButton();
};

const email = document.getElementById(email_id);
email.oninput = (e) => {
  setFormValue(email_id, e.target.value, validateEmail);
  toggleSubmitButton();
};

const passwordField = document.getElementById(password_id);
passwordField.oninput = (e) => {
  validatePassword(e);
  toggleSubmitButton();
};

const passwordRepeatField = document.getElementById("password-repeat");
passwordRepeatField.oninput = (e) => {
  validatePasswordRepeat(e);
  toggleSubmitButton();
};

const switch_to_sign_in = document.getElementById(sign_in_link_id);
switch_to_sign_in.onclick = () => {
  document.getElementById(sign_up_form_id).style.display = "none";
  document.getElementById(sign_in_form_id).style.display = "";
};

const sign_up_btn = document.getElementById(sign_up_btn_id);
sign_up_btn.onclick = (e) => {
  e.preventDefault();
  submitSignUpForm();
};

const sign_in_email = document.getElementById("sign_in_email");
sign_in_email.oninput = (e) => {
  if (e.target) {
    setFormValue("sign_in_email", e.target.value, validateEmail);
    toggleSignInButton();
  }
};

const sign_in_password = document.getElementById("sign_in_password");
sign_in_password.oninput = (e) => {
  if (e.target) {
    validatePassword(e);
    toggleSignInButton();
  }
};

const sign_in_btn = document.getElementById(sign_in_btn_id);
sign_in_btn.onclick = (e) => {
  e.preventDefault();
  submitSignInForm();
};

const switch_to_sign_up = document.getElementById("sign_up_link");
switch_to_sign_up.onclick = () => {
  document.getElementById(sign_in_form_id).style.display = "none";
  document.getElementById(sign_up_form_id).style.display = "";
};

const toggleSubmitButton = () => {
  if (areFieldsNotEmpty() && getValidationStatus()) {
    sign_up_btn.disabled = false;
  } else {
    sign_up_btn.disabled = true;
  }
};

const toggleSignInButton = () => {
  if (areSignInFieldsNotEmpty() && getValidationStatus()) {
    sign_in_btn.disabled = false;
  } else {
    sign_in_btn.disabled = true;
  }
};

const areFieldsNotEmpty = () => {
  return document.getElementById(first_name_id).value.trim() !== "" &&
        document.getElementById(last_name_id).value.trim() !== "" &&
        document.getElementById(email_id).value.trim() !== "" &&
        document.getElementById(password_id).value.trim() !== "" &&
        document.getElementById("password-repeat").value.trim() !== "";
};

const areSignInFieldsNotEmpty = () => {
  return document.getElementById("sign_in_email").value.trim() !== "" &&
        document.getElementById("sign_in_password").value.trim() !== "";
};

window.onload = () => {
  sign_up_btn.disabled = true;
  sign_in_btn.disabled = true;
};
