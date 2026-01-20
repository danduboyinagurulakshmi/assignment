function validation() {
  let fullname= document.getElementById("name").value;
  let Email = document.getElementById("Email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let contact = document.getElementById("conatct").value;
  let errormsg = document.getElementById("error-msg");
  if (fullname=== "" || email === "" || password === "" || confirmPassword === "" || conatct === "") {
    errormsg.textContent = "All fields are required";
    return false;
  }
  if (password !== confirmPassword) {
    errorMsg.textContent = "Passwords do not match";
    return false;
  }
  alert("Signup Successful!");
  return true;
}
var storedEmail = localStorage.getItem("email");
var storedPassword = localStorage.getItem("password");
 if (email === storedEmail && password === storedPassword) {
        alert("Login successful!");
        window.location.href = "home.html"; // Redirect to Home page
    } else {
        alert("Invalid Email or Password");
    }