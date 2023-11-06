function checkPassword() {
    var password = document.getElementById("password").value;
    if (password === "darshanraval") {
        window.location.href = "gift.html";
    } else {
        document.getElementById("message").innerText = "Incorrect password. Try again.";
    }
}
