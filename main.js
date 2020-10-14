
// Creare un array con un insieme di indirizzi email.

var email = ["annalisadesantis@gmail.it", "annalisadesantis91@gmail.it", "annalisadesantis123@gmail.it", "annalisadesantis@live.it", "annalisadesantis91@live.it", "annalisadesantis123@live.it"];
console.log(email);


// Chiedere all'utente il suo indirizzo email e verificare se è nella lista (tramite un ciclo for).

var email_utente = prompt("Inserisci il tuo indirizzo email");
console.log(email_utente);

var email_trovata = false;

for (var i = 0; i < email.length; i++) {

    if (email_utente == email[i]) {
        email_trovata = true;
    }
}

// Comunicare quindi un messaggio appropriato (sei in lista/non sei in lista)

if (email_trovata) {
    console.log("La tua email è corretta")
} else {
    console.log("La tua email non è corretta")
}
