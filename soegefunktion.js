
// Variabel: Hent søgefeltet fra DOM
let searchInput = document.getElementById("soegefelt");

// Array: Indeholder søgeord som objekter med tilknyttede sektion-ID'er
let searchKeywords = [
    { keyword: "åbningstider", target: "fablab-info" },
    { keyword: "tilbud", target: "fablabs-tilbud" },    
    { keyword: "medarbejdere", target: "hvem-driver" }, 
    { keyword: "udtagelser", target: "feedback" }  
];

// Funktion: Håndterer søgning
function search() {
    // Debugging: Udskriv en besked, når søgning starter
    console.log("Søgefunktion kaldt");

    // Variabel: Hent og normalisér brugerens input
    let userInput = searchInput.value.trim().toLowerCase();

    // Debugging: Udskriv brugerens input
    console.log("Brugerinput:", userInput);

    // Kontrolstruktur (if-else): Tjek for tomt input
    if (userInput === "") {
        alert("Søgefeltet kan ikke være tomt.");
        return;
    }

    // Variabel: Boolean til at spore, om der er fundet et match
    let found = false;

    // Kontrolstruktur (loop): Gå gennem søgeordene
    for (let i = 0; i < searchKeywords.length; i++) {
        // Debugging: Udskriv hvert søgeord, der sammenlignes
        console.log("Sammenligner med:", searchKeywords[i].keyword);

        // Kontrolstruktur (if-else): Tjek, om brugerinput matcher et søgeord
        if (userInput === searchKeywords[i].keyword.toLowerCase()) { 

            // Debugging: Udskriv det fundne match
            console.log("Match fundet! Scroller til sektion:", searchKeywords[i].target);

            // DOM: Find sektionen baseret på ID
            let targetSection = document.getElementById(searchKeywords[i].target);

            // Kontrolstruktur (if-else): Tjek, om sektionen findes
            if (targetSection) {
                // DOM: Scroll til sektionen
                targetSection.scrollIntoView({ behavior: "smooth" });
            } else {
                alert("Sektionen findes ikke på siden.");
                console.error("Sektion med ID '" + searchKeywords[i].target + "' blev ikke fundet.");
            }

            found = true; // Opdater found til true
            break; // Afslut loopet
        }
    }

    // Kontrolstruktur (if-else): Håndter, hvis intet match blev fundet
    if (!found) {
        alert("Ingen resultater fundet for '" + userInput + "'");
        console.warn("Ingen match for brugerinput:", userInput);
    }
}

// Debugging: Udskriv søgeordene til konsollen for kontrol
console.log("Mulige søgeord:", searchKeywords);
