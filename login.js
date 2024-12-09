let isLoggedIn = false;

let users = [
    {username: "admin", password: "admin"},
    {username: "ditte", password: "123"}
]

function logIn(event) {
    event.preventDefault();
    localStorage.setItem("isLoggedIn", true);
    console.log("User logged in", isLoggedIn);
    window.location.href = "index.html";
    isLoggedIn = true;

    // let brugernavn = document.getElementById("login-username").value;
    // let password = document.getElementById("login-password").value;
    // let validationText = document.getElementById("validation-text");

    // for (let user of users) {
    //     if (brugernavn === user.username && password === user.password) {

    //         break;
    //     }
    // }

    // if (!isLoggedIn) {
    //     validationText.textContent = "Brugernavn eller Password forkert, prøv igen.";
    // }
}