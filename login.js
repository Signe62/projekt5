let isLoggedIn = false;

let users = [
    {username: "admin", password: "admin"},
    {username: "fablab", password: "1234"},
    {username: null, password: null}
];

document.addEventListener("DOMContentLoaded", () => {
    if (isLoggedIn === "true") {
        window.location.href = "index.html";
        console.log("User is already logged in. Navigating to homepage...")
    } else {
        console.log("User is not logged in");
    }
});

function logIn(event) {
    event.preventDefault();

    let brugernavn = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;
    let validationText = document.getElementById("validation-text");

    if (brugernavn === "" && password === "") {
        localStorage.setItem("isLoggedIn", true);
        console.log("User logged in without input");
        window.location.href = "index.html";
        return;
    }

    // Check against other users
    for (let user of users) {
        if (brugernavn === user.username && password === user.password) {
            localStorage.setItem("isLoggedIn", true);
            console.log("User logged in");
            window.location.href = "index.html";
            return;
        }
    }

    // If no match is found
    validationText.textContent = "Login failed, please try again.";
    console.log("Login failed");
}
