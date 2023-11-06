function checkPassword() {
    var password = document.getElementById("password").value;
    if (password === "5111998") {
        document.getElementById("message").innerText = "Congratulations! You got a special gift for your birthday! 🎉";
    } else {
        document.getElementById("message").innerText = "Incorrect password. Try again.";
    }
}
