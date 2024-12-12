let users = [
    {username: "admin", password: "admin"},
    {username: "fablab", password: "1234"},
    {username: null, password: null}
];

function logIn(event) {
    event.preventDefault();

    let brugernavn = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;
    let validationText = document.getElementById("validation-text");

    if (brugernavn === "" && password === "") {
        localStorage.setItem("isLoggedIn", true);
        console.log("Brugeren er logget ind uden input");
        window.location.href = "index.html";
        return;
    }

    // Tjekker for eksisterende brugere for at logge ind
    for (let user of users) {
        if (brugernavn === user.username && password === user.password) {
            localStorage.setItem("isLoggedIn", true);
            console.log("Brugeren logges ind");
            window.location.href = "index.html";
            return;
        }
    }

    // Ingen match
    validationText.textContent = "Login failed, please try again.";
    console.log("Logind fejlet");
}