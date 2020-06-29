function login() {
  var emailValue = document.getElementById("email").value;
  setUserName(emailValue);
}

function showValue() {
  document.getElementById("result").innerHTML = getUserName();
}

function getUserName() {
  if (typeof Storage !== "undefined") {
    if (localStorage.email) {
      return localStorage.getItem("email");
    } else {
      return "Not Set Yet, set your user name";
    }
  } else {
    document.getElementById("error").innerHTML =
      "Sorry, your browser does not support web storage...";
  }
}

function setUserName(value) {
  if (typeof Storage !== "undefined") {
    localStorage.setItem("email", value);
  } else {
    document.getElementById("error").innerHTML =
      "Sorry, your browser does not support web storage...";
  }
}

function clearAllData() {
  // Clear all items
  localStorage.clear();
}
