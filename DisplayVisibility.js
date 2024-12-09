let isLoggedIn = localStorage.getItem("isLoggedIn");

let mineBookingerKnap = document.getElementById("minebookinger-knap");
let logIndKnap = document.getElementById("logind-knap");
let forsideOverskrift = document.getElementById("forside-overskrift");

document.addEventListener("DOMContentLoaded", () => {
    console.log(isLoggedIn);
    if (isLoggedIn === "true") {
        mineBookingerKnap.style.visibility = "visible";
        logIndKnap.textContent = "Log ud";
        forsideOverskrift.textContent = "Velkommen, Jonas"
    } else {
        mineBookingerKnap.style.visibility = "hidden";
        logIndKnap.textContent = "Log ind";
    }
});

function logInOrOut(event) {
    event.preventDefault();
    
    if (isLoggedIn === "false") {
        window.location.href = "login.html";
    } else {
        window.location.href = "index.html";
        localStorage.setItem("isLoggedIn", false)
    }
}

function bookTid(event) {
    event.preventDefault();
    console.log("hallo")

    if (isLoggedIn === "false") {
        window.location.href = "login.html";
    } else {
        window.location.href = "#hvad-er-fablab"; // opdater til booking section
    }
}