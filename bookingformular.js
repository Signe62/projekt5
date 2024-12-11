// Håndterer indsendelse af formularen
function haandterFormular(event) {
    event.preventDefault();

    // Indsamler data fra formularens felter
    let navn = document.getElementById("navn").value;
    let email = document.getElementById("email").value;
    let telefon = document.getElementById("telefon").value;
    let maskine = document.getElementById("maskine").value;
    let besoegende = parseInt(document.getElementById("besoegende").value);
    let dato = document.getElementById("dato").value;
    let tid = document.getElementById("tid").value;

    // Udskriver de indtastede data i konsollen til fejlfinding
    console.log("Indtastede data:", {
        navn: navn,
        email: email,
        telefon: telefon,
        maskine: maskine,
        besoegende: besoegende,
        dato: dato,
        tid: tid
    });

    // Tjek om alle felter er udfyldt
    if (!navn || !email || !telefon || !maskine || isNaN(besoegende) || !dato || !tid) {
        alert("Udfyld venligst alle felter korrekt!");
        return;
    }

    // Tjek om antal besøgende er højst 5
    if (besoegende > 5) {
        alert("Der kan maks. bookes tid for 5 personer.");
        return;
    }

    // Tjek om maskinen er gyldig
    let gyldigeMaskiner = ["3D-printer", "Laserskærer"];
    if (!gyldigeMaskiner.includes(maskine)) {
        alert("Vælg en gyldig maskine.");
        return;
    }

    // Vis gyldige maskiner i konsollen
    console.log("Gyldige maskiner:");
    for (let i = 0; i < gyldigeMaskiner.length; i++) {
        console.log("- " + gyldigeMaskiner[i]);
    }

    // Saml data i et objekt
    let bookingData = {
        navn: navn,
        email: email,
        telefon: telefon,
        maskine: maskine,
        besoegende: besoegende,
        dato: dato,
        tid: tid
    };

    // Vis bookingdata i konsollen
    console.log("Bookingdata:", bookingData);

    // DOM: Opdater beskeden på siden
    let beskedElement = document.getElementById("besked");
    beskedElement.textContent = "Tak, " + bookingData.navn + "! Din booking er modtaget til " + bookingData.maskine + " den " + bookingData.dato + " kl. " + bookingData.tid + ".";

    // Opdater knappen efter indsendelse
    let sendKnap = document.getElementById("sendKnap");
    sendKnap.textContent = "Indsendt!";
    sendKnap.disabled = true; 
}

// Tilføj funktion til formularens indsendelse
let formular = document.getElementById("bookingFormular");
formular.addEventListener("submit", haandterFormular);
