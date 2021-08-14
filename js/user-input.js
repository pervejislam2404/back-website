const userEmail = document.getElementById("user-email");
const userPassword = document.getElementById("user-pass");
const submitButton = document.getElementById("login-button");

submitButton.addEventListener("click", function(e) {
    if (userEmail.value != "shuvo@gmail.com" || userPassword.value != "pervej") {
        alert("halar pute valo kori information de")
    }
    if (userEmail.value == "shuvo@gmail.com" && userPassword.value == "pervej") {
        window.location.href = "bank/bank.html";
    }
})