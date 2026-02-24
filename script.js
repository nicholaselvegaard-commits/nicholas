function generateHooks() {
    const niche = document.getElementById("niche").value;
    const audience = document.getElementById("audience").value;
    const resultsDiv = document.getElementById("results");

    if (!niche || !audience) {
        alert("Please enter both niche and audience.");
        return;
    }

    const templates = [
        "Stop scrolling if you're into {niche}...",
        "If you're a {audience}, this will change how you see {niche}.",
        "Nobody tells you this about {niche}...",
        "Here’s why most {audience} fail at {niche}...",
        "You’re doing {niche} wrong if you...",
        "This is why {audience} struggle with {niche}.",
        "Before you try {niche}, watch this.",
        "99% of {audience} don’t know this about {niche}.",
        "If you care about {niche}, read this.",
        "This simple {niche} trick changed everything for {audience}."
    ];

    resultsDiv.innerHTML = "";

    templates.forEach(template => {
        let hook = template
            .replace("{niche}", niche)
            .replace("{audience}", audience);

        const div = document.createElement("div");
        div.className = "hook";
        div.innerText = hook;
        resultsDiv.appendChild(div);
    });
}
