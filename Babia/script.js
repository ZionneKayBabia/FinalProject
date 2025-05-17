
function handleSignup() {
  clearErrors();
  const inputs = getInputValues();
  const hasErrors = validateInputs(inputs);

  if (!hasErrors) {
    saveToLocalStorage(inputs);
    window.location.href = "proj_profile_babia.html";
  }
}

function getInputValues() {
  return {
    firstName: document.getElementById("firstName").value.trim(),
    lastName: document.getElementById("lastName").value.trim(),
    email: document.getElementById("email").value.trim(),
    password: document.getElementById("password").value.trim(),
    contact: document.getElementById("contact").value.trim(),
    why: document.getElementById("why").value.trim(),
    sex: document.querySelector('input[name="sex"]:checked')
  };
}


function validateInputs(data) {
  let hasError = false;

  if (!data.firstName) {
    document.getElementById("firstNameError").textContent = "required";
    hasError = true;
  }
  if (!data.lastName) {
    document.getElementById("lastNameError").textContent = "required";
    hasError = true;
  }
  if (!data.sex) {
    document.getElementById("sexError").textContent = "required";
    hasError = true;
  }
  if (!data.email) {
    document.getElementById("emailError").textContent = "required";
    hasError = true;
  }
  if (!data.password) {
    document.getElementById("passwordError").textContent = "required";
    hasError = true;
  }
  if (!data.why) {
    document.getElementById("whyError").textContent = "required";
    hasError = true;
  }

  return hasError;
}

function clearErrors() {
  ["firstNameError", "lastNameError", "sexError", "emailError", "passwordError", "whyError"]
    .forEach(id => document.getElementById(id).textContent = "");
}


function saveToLocalStorage(data) {
  localStorage.setItem("firstName", data.firstName);
  localStorage.setItem("lastName", data.lastName);
  localStorage.setItem("email", data.email);
  localStorage.setItem("sex", data.sex.value);
  localStorage.setItem("why", data.why);
}

function loadProfile() {
  document.getElementById("displayFirst").textContent = localStorage.getItem("firstName") || "";
  document.getElementById("displayLast").textContent = localStorage.getItem("lastName") || "";
  document.getElementById("displayEmail").textContent = localStorage.getItem("email") || "";
  document.getElementById("displaySex").textContent = localStorage.getItem("sex") || "";
  document.getElementById("displayWhy").textContent = localStorage.getItem("why") || "";
}
