let isLoggedIn = localStorage.getItem("isLoggedIn");

let mineBookingerKnap = document.getElementById("minebookinger-knap");
let logIndKnap = document.getElementById("logind-knap");
let forsideOverskrift = document.getElementById("forside-overskrift");
let forsideTekst = document.getElementById("forside-tekst");
let bookingFormular = document.getElementById("formular-form");

document.addEventListener("DOMContentLoaded", () => {
    console.log(isLoggedIn);
    if (isLoggedIn === "true") {
        mineBookingerKnap.style.visibility = "visible";
        logIndKnap.textContent = "Log ud";
        forsideOverskrift.textContent = "Velkommen, Jonas"
        forsideTekst.textContent = "Du har nu mulighed for at booke en tid hos os. Du kan også se og administrere dine bookinger under Mine bookinger.";
        bookingFormular.style.display = "block";
    } else {
        mineBookingerKnap.style.visibility = "hidden";
        logIndKnap.textContent = "Log ind";
        bookingFormular.style.display = "none";
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

    if (isLoggedIn === "false") {
        console.log("Bruger er ikke logget ind, skifter til login side")
        window.location.href = "login.html";
    } else {
        window.location.href = "#formular-form";
    }
}