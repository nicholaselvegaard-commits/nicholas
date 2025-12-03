if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch((err) => {
    console.error("Service worker-feil:", err);
  });
}
const suggestions = [
  "Send en melding til noen og spør hvordan de egentlig har det.",
  "Plukk opp søppel ute, selv om det ikke er ditt.",
  "Gi et ekte kompliment til en person i dag.",
  "Skru av lys du ikke bruker, spar litt strøm.",
  "Tilgi noen for noe lite du fortsatt går og irriterer deg over.",
  "Gå en tur uten mobilen og tenk gjennom hva du er takknemlig for.",
  "Hjelp en venn med noe uten å be om noe tilbake.",
  "Gi bort klær du ikke bruker lenger.",
  "Skriv en lapp eller melding med noe fint til et familiemedlem.",
  "Sett deg et lite mål for denne uka og ta første steg nå."
];

const suggestionText = document.getElementById("suggestion-text");
const newSuggestionBtn = document.getElementById("new-suggestion-btn");
const form = document.getElementById("action-form");
const input = document.getElementById("action-input");
const list = document.getElementById("action-list");
const clearBtn = document.getElementById("clear-btn");

function getStoredActions() {
  try {
    const data = localStorage.getItem("good_actions");
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

function saveActions(actions) {
  localStorage.setItem("good_actions", JSON.stringify(actions));
}

function formatDate(dateString) {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("no-NO", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

function renderActions() {
  const actions = getStoredActions();
  list.innerHTML = "";

  if (actions.length === 0) {
    const emptyLi = document.createElement("li");
    emptyLi.textContent = "Ingen handlinger lagret enda. Start i dag.";
    emptyLi.className = "small";
    list.appendChild(emptyLi);
    return;
  }

  actions
    .slice()
    .reverse()
    .forEach(action => {
      const li = document.createElement("li");
      li.className = "action-item";

      const textSpan = document.createElement("span");
      textSpan.textContent = action.text;

      const dateSpan = document.createElement("span");
      dateSpan.className = "action-date";
      dateSpan.textContent = formatDate(action.date);

      li.appendChild(textSpan);
      li.appendChild(dateSpan);
      list.appendChild(li);
    });
}

newSuggestionBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * suggestions.length);
  const suggestion = suggestions[randomIndex];
  suggestionText.textContent = suggestion;
  input.value = suggestion; // fyll inn feltet for kjapp lagring
  input.focus();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = input.value.trim();
  if (!value) return;

  const actions = getStoredActions();
  actions.push({
    text: value,
    date: new Date().toISOString()
  });
  saveActions(actions);
  input.value = "";
  renderActions();
});

clearBtn.addEventListener("click", () => {
  const ok = confirm("Er du sikker på at du vil slette hele loggen?");
  if (!ok) return;
  localStorage.removeItem("good_actions");
  renderActions();
});

// initial render
renderActions();
