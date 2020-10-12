// "content.js" removed
// "addNote.js" ,  "addNote.css" removed
const neededScripts = ["basicScript.js", "teleporter.js", "tab.js"];
const neededStyles = ["navbar.css"];
const presentScripts = document.querySelector("#mainScriptTag").getAttribute("data-presentScripts") || "";
const presentStyles = document.querySelector("#mainScriptTag").getAttribute("data-presentStyles") || "";
let animationsToBePlayed = [];

function AppendScripts() {
    neededScripts.forEach(script => {
        if (!presentScripts.includes(script)) {
            const scriptTag = document.createElement("script");
            scriptTag.src = `/js/${script}`;
            document.body.appendChild(scriptTag);
        }
    });
}

function AppendStyles() {
    neededStyles.forEach(style => {
        if (!presentStyles.includes(style)) {
            const linkTag = document.createElement("link");
            linkTag.rel = "stylesheet";
            linkTag.href = `/css/${style}`;
            document.head.appendChild(linkTag);
        }
    });
}

