let trolde = [
  {
    navn: 'Grum',
    vaaben: ['Stridshammer', 'Armbrøst', 'Teske', 'Sut','Spegepølse','Daggert'],
    billede: 'troldHanTransp.png'
  },
  {
    navn: 'Similine',
    vaaben: ['Snor', 'Økse', 'Kølle', 'Mjøddunk'],
    billede: 'troldHunTransp.png'
  }
];

// Vi skriver alle trolde og deres våben ud
let output = "";

// For of loopet er ret nemt at bruge
// en variabel for en enkelt instans af objektet defineres "let trol"
// "of" henviser til objektet "trolde"
// Det som så skal ske står i de krøllede parenteser
for (let trold of trolde) {

  // Loopet henter hver enkelt trold ved hjælp af objektets egenskaber
  // Læg mærke til at HTML'en skrives i "backticks"
  // Egenskaberne hentes med "trold"
  // Og vi gemmer alt i en variabel der vokser og vokser med +=
  output += `<div class="troldeListe">

    <h2> Trold: ${trold.navn} </h2>

    <figure>
       <img src="images/${trold.billede}" alt="${trold.navn}">
    </figure>

    <p>Her er trolden <span class="marker"> ${trold.navn}</span>, der har disse våben med sig:</p>
    <ol>`;

        // Vi looper derefter gennem våbenlisten
        // altså: der et loop mere inde i loopet
        for (let vaaben of trold.vaaben) {
            output += `<li> ${vaaben}</li>`;
        }

    output += `</ol>` // /ol
    output += `</div>`; // /div
}

// Den korteste variant er at bruge id'en når der skrives
demo.innerHTML = output;