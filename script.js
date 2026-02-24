let dailyLimit = 3;

function scrollToTool() {
    document.getElementById("tool").scrollIntoView({behavior:"smooth"});
}

function generateScript() {

    const topic = document.getElementById("topic").value.trim();
    const audience = document.getElementById("audience").value.trim();
    const results = document.getElementById("results");

    if (!topic || !audience) {
        alert("Fill in both fields.");
        return;
    }

    let usage = localStorage.getItem("dailyUsage");
    if (!usage) usage = 0;

    if (usage >= dailyLimit) {
        alert("Free limit reached. Upgrade to Pro for unlimited scripts.");
        return;
    }

    usage++;
    localStorage.setItem("dailyUsage", usage);

    const hook = `Stop scrolling if you're a ${audience} interested in ${topic}...`;

    const script = `
HOOK:
${hook}

BODY:
Most ${audience} struggle with ${topic} because they focus on the wrong things.
Here's the one shift that changes everything.

CTA:
Follow for more ${topic} insights.

HASHTAGS:
#${topic.replace(" ","")} #growth #viral
`;

    results.innerHTML = `<div class="script-box">${script}</div>`;
}
