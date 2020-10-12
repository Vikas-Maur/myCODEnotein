// "content.js" removed
// "addNote.js" ,  "addNote.css" removed
const neededScripts = ["basicScript.js", "teleporter.js", "tab.js"];
const neededStyles = ["navbar.css"];
const presentScripts = document.querySelector("#mainScriptTag").getAttribute("data-presentScripts") || "";
const presentStyles = document.querySelector("#mainScriptTag").getAttribute("data-presentStyles") || "";
let animationsToBePlayed = [];

const navbar =
    `
<header>
    
</header>
`;

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

// function SetNavbar() {
//     document.body.innerHTML = navbar + document.body.innerHTML;
//     const hamburger = document.querySelector(".hamburger");
//     const lines = [hamburger.querySelector(".line1"), hamburger.querySelector(".line2"), hamburger.querySelector(".line3")];
//     const navLists = document.querySelector("nav .navLists");

//     if (window.innerWidth <= 500) {
//         navLists.querySelectorAll(".navlist").forEach(list => {
//             list.addEventListener("click", () => {
//                 try {
//                     navLists.classList.remove("navVisible");
//                     lines[0].classList.remove("line1active");
//                     lines[1].classList.remove("line2inactive");
//                     lines[2].classList.remove("line3active");
//                 } catch (error) {
//                     console.log(error);
//                 }
//             });
//         });
//     }
//     hamburger.addEventListener("click", () => {
//         navLists.classList.toggle("navVisible");
//         lines[0].classList.toggle("line1active");
//         lines[1].classList.toggle("line2inactive");
//         lines[2].classList.toggle("line3active");
//     });
//     AddAnimation(NavbarAnimation);

// }

// function NavbarAnimation() {
//     if (sessionStorage.getItem("firstViewOnmyCODEnotein") === true || sessionStorage.getItem("firstViewOnmyCODEnotein") === null) {
//         sessionStorage.setItem("firstViewOnmyCODEnotein", false);
//         document.querySelector(".logo").style.setProperty("animation", "logoAnimation 4s ease-in");
//         document.querySelector("nav").setAttribute("data-animationPlayed", "true");
//     }
//     else {
//         document.querySelector("nav").setAttribute("data-animationPlayed", "false");
//     }
// }

// function AddAnimation(animation) {
//     animationsToBePlayed.push(animation);
// }

// function PlayAnimations() {
//     animationsToBePlayed.forEach((animation) => {
//         animation();
//     });
// }

// function RunApp() {
//     AppendScripts();
//     AppendStyles();
//     SetNavbar()

//     window.onload = () => {
//         document.body.style.backgroundColor = "var(--light)";
//         PlayAnimations();
//     }
// }
// RunApp()