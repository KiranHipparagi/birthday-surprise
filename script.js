function checkPassword() {
    var password = document.getElementById("password").value;
    if (password === "5111998") {
        window.location.href = "gift.html";
    } else {
        document.getElementById("message").innerText = "Incorrect password. Try again.";
    }
}
