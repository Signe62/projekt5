// Debugging: Bekræft at JavaScript-filen er korrekt linket
console.log("JavaScript er korrekt linket.");

// Funktion til at håndtere formularens indsendelse
function haandterFormular(event) {
    event.preventDefault(); // Forhindrer siden i at genindlæse

    // Variabler: Hent data fra inputfelterne
    let navn = document.getElementById("navn").value;
    let email = document.getElementById("email").value;
    let telefon = document.getElementById("telefon").value;
    let maskine = document.getElementById("maskine").value;
    let besoegende = parseInt(document.getElementById("besoegende").value);
    let dato = document.getElementById("dato").value;
    let tid = document.getElementById("tid").value;

    // Debugging: Log de indtastede data
    console.log("Indtastede data:", {
        navn: navn,
        email: email,
        telefon: telefon,
        maskine: maskine,
        besoegende: besoegende,
        dato: dato,
        tid: tid
    });

    // Kontrolstruktur: Tjek om alle felter er udfyldt korrekt
    if (!navn || !email || !telefon || !maskine || isNaN(besoegende) || !dato || !tid) {
        alert("Udfyld venligst alle felter korrekt!");
        return;
    }

    // Operatorer: Begræns antal besøgende til maks. 5
    if (besoegende > 5) {
        alert("Der kan maks. bookes tid for 5 personer.");
        return;
    }

    // Arrays: Definer gyldige maskiner
    let gyldigeMaskiner = ["Printer", "3D-Laser"];
    if (!gyldigeMaskiner.includes(maskine)) {
        alert("Vælg en gyldig maskine.");
        return;
    }

    // Loops: Log de gyldige maskiner
    console.log("Gyldige maskiner:");
    for (let i = 0; i < gyldigeMaskiner.length; i++) {
        console.log("- " + gyldigeMaskiner[i]);
    }

    // Objekter: Saml data i et objekt
    let bookingData = {
        navn: navn,
        email: email,
        telefon: telefon,
        maskine: maskine,
        besoegende: besoegende,
        dato: dato,
        tid: tid
    };

    // Debugging: Log objektet
    console.log("Bookingdata:", bookingData);

    // DOM: Opdater beskeden på siden
    let beskedElement = document.getElementById("besked");
    beskedElement.textContent = "Tak, " + bookingData.navn + "! Din booking er modtaget til " + bookingData.maskine + " den " + bookingData.dato + " kl. " + bookingData.tid + ".";

    // Events: Ændr tekst på knappen efter indsendelse
    let sendKnap = document.getElementById("sendKnap");
    sendKnap.textContent = "Indsendt!";
    sendKnap.disabled = true; // Deaktiver knappen for at forhindre gentagne klik
}

// Events: Tilknyt funktionen til formularens indsendelse
let formular = document.getElementById("bookingFormular");
formular.addEventListener("submit", haandterFormular);
