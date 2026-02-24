function generateHooks() {

    const niche = document.getElementById("niche").value.trim();
    const audience = document.getElementById("audience").value.trim();
    const results = document.getElementById("results");

    if (!niche || !audience) {
        alert("Fill in both fields.");
        return;
    }

    const templates = [
        `Stop scrolling if you're into ${niche}...`,
        `If you're a ${audience}, this will change how you see ${niche}.`,
        `Nobody talks about this in ${niche} but...`,
        `Most ${audience} fail at ${niche} because of this.`,
        `Before you try ${niche}, watch this.`,
        `This ${niche} trick is blowing up right now.`,
        `You're doing ${niche} wrong if you...`,
        `If you care about ${niche}, read this.`,
        `The hidden truth about ${niche}.`,
        `Why ${audience} struggle with ${niche}.`
    ];

    results.innerHTML = "";

    templates.forEach(text => {
        const div = document.createElement("div");
        div.className = "hook";
        div.innerText = text;
        results.appendChild(div);
    });
}
