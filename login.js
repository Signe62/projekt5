let isLoggedIn = false;

let users = [
    {username: "admin", password: "admin"},
    {username: "ditte", password: "123"},
    {username: "", password: ""}
]

function logIn(event) {
    event.preventDefault();


    let brugernavn = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;
    let validationText = document.getElementById("validation-text");

    for (let user of users) {
        if (brugernavn === user.username && password === user.password) {
            localStorage.setItem("isLoggedIn", true);

            console.log("User logged in", isLoggedIn);
            
            window.location.href = "index.html";
            isLoggedIn = true;
            break;
        } else {
            validationText.textContent = "Brugernavn eller Password forkert, prøv igen.";
            break;
        }
    }
}