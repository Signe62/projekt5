
let searchInput = document.getElementById("soegefelt");

// En liste over de søgeord som brugeren kan skrive, og hvor på siden de bliver ført hen //
let searchKeywords = [
    { keyword: "åbningstider", target: "fablab-info" },
    { keyword: "tilbud", target: "fablabs-tilbud" },    
    { keyword: "medarbejdere", target: "hvem-driver" }, 
    { keyword: "udtagelser", target: "feedback" }  
];


function search() {
    // Fjerner eventuelle mellemrum fra starten og slutningen, og laver alt teksten om til små bogstaver. 
    let userInput = searchInput.value.trim().toLowerCase();

    // Bliver brugt til at finde fejl og forstå hvad der sker i koden // 
    console.log("Brugerinput:", userInput);

  // Tjekker om userInput er tomt //  
    if (userInput === "") {
        alert("Søgefeltet kan ikke være tomt."); // Kommer en alert hvis userInput er tomt //
        return; // Stopper indtil brugeren skriver noget andet //
    }

    // Der er ikke blevet fundet et match // 
    let found = false;

   // starter en for-loop //
    for (let i = 0; i < searchKeywords.length; i++) { 
        // Koden tjekker om det brugeren har skrevet er lig med et af searchkeywordsene // 
        if (userInput === searchKeywords[i].keyword.toLowerCase()) { 

            // Der bliver vist en besked i konsollen hvis der er fundet et match som fortæller hvilket sektion der er fundet og skal scrolle til. 
            console.log("Match fundet! Scroller til sektion:", searchKeywords[i].target);

            // HTML-sektion findes ved hjælp af searchkeywords // 
            let targetSection = document.getElementById(searchKeywords[i].target);

            if (targetSection) {
                // scroller ned til sektionen på en smooth måde // 
                targetSection.scrollIntoView({ behavior: "smooth" });
            } else {
                alert("Sektionen findes ikke på siden.");
            }

            // Der er fundet et match og loopen stopper //
            found = true; 
            break; 
        }
    }

    // Hvis der ikke er fundet noget match under søgningen, vises en advarselsbesked som alert //
    if (!found) {
        alert("Ingen resultater fundet for '" + userInput + "'");
    }
}

// Udskriv søgeordene til konsollen for kontrol // 
console.log("Mulige søgeord:", searchKeywords);
