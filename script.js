// du kan endre / legge til dine egne goodies her
const goodies = [
  "Send en melding til en person du ikke har snakket med på lenge og sjekk inn.",
  "Rydd én liten ting: skrivebordet ditt, nattbordet, eller bare gulvet på rommet.",
  "Gå en 10-minutters tur uten mobilen og tenk på hva du vil få til fremover.",
  "Gi et ekte kompliment til noen i dag – ikke bare «nice» men noe spesifikt.",
  "Drikk et stort glass vann og strekk litt på kroppen i 2 minutter.",
  "Gjør én ting du har utsatt i flere dager. Bare den ene tingen.",
  "Skriv ned tre ting du er takknemlig for i dag.",
  "Hjelp en venn med noe lite (lekser, jobb, et problem) uten å be om noe tilbake.",
  "Skru av alle varsler i 1 time og gjør noe som faktisk gir deg noe.",
  "Planlegg én ting du skal gjøre i morgen som gjør dagen litt bedre."
];

const button = document.getElementById("goodie-btn");
const suggestionText = document.getElementById("suggestion-text");

button.addEventListener("click", () => {
  const index = Math.floor(Math.random() * goodies.length);
  const goodie = goodies[index];
  suggestionText.textContent = goodie;
});
