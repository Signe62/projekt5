// Slideshow-data
let slideshowData = {
    nuvaerendeIndex: 0,
    billeder: document.querySelectorAll('.billede-slideshow'),
    prikker: document.querySelectorAll('.prik'),
};

// Funktion til at opdatere det aktuelle billede
function opdaterBillede(nyIndex) {
    let { billeder, prikker } = slideshowData;

    // Kontroller, om billeder og prikker er tilgængelige
    if (!billeder.length || !prikker.length) {
        console.error("Billeder eller prikker mangler.");
        return;
    }

    // Skjul det nuværende billede og fjern markeringen fra prikken
    billeder[slideshowData.nuvaerendeIndex].style.display = 'none';
    prikker[slideshowData.nuvaerendeIndex].classList.remove('aktiv');

    // Beregn det nye billedeindeks
    slideshowData.nuvaerendeIndex = (nyIndex + billeder.length) % billeder.length;

    // Vis det nye billede og markér prikken
    billeder[slideshowData.nuvaerendeIndex].style.display = 'flex';
    prikker[slideshowData.nuvaerendeIndex].classList.add('aktiv');
}

// Funktion til at skifte billede frem eller tilbage
function skiftBillede(retning) {
    opdaterBillede(slideshowData.nuvaerendeIndex + retning);
}

// Opsætning af slideshow
(function opsaetSlideshow() {
    let { billeder, prikker } = slideshowData;

    // Tjek, om der er billeder og prikker
    if (!billeder.length || !prikker.length) {
        console.error("Ingen billeder eller prikker fundet ved initialisering.");
        return;
    }

    // Skjul alle billeder og fjern markering fra alle prikker
    billeder.forEach(billede => (billede.style.display = 'none'));
    prikker.forEach(prik => prik.classList.remove('aktiv'));

    // Start med det første billede
    opdaterBillede(0);

    // Tilføj klikfunktion til prikkerne
    prikker.forEach((prik, index) => {
        prik.addEventListener('click', () => opdaterBillede(index));
    });
})();
