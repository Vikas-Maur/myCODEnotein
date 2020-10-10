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
    <nav class="navbar">
        <div class="logo">
            myCODEnotein
        </div>
        <ul class="navLists">
            <li class="navlist"><a href="/">HOME</a></li>
            <li class="navlist"><a href="/src/pygame.html">PYGAME</a></li>
            <li class="navlist"><a href="/src/sql.html">SQL</a></li>
            <li class="navlist"><a href="https://mycodenotein.blogspot.com">MY OLD WEBSITE</a></li>
        </ul>
        <div class="hamburger">
            <div class="line line1"></div>
            <div class="line line2"></div>
            <div class="line line3"></div>
        </div>
    </nav>
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

function SetNavbar() {
    document.body.innerHTML = navbar + document.body.innerHTML;
    const hamburger = document.querySelector(".hamburger");
    const lines = [hamburger.querySelector(".line1"), hamburger.querySelector(".line2"), hamburger.querySelector(".line3")];
    const navLists = document.querySelector("nav .navLists");

    if (window.innerWidth <= 500) {
        navLists.querySelectorAll(".navlist").forEach(list => {
            list.addEventListener("click", () => {
                try {
                    navLists.classList.remove("navVisible");
                    lines[0].classList.remove("line1active");
                    lines[1].classList.remove("line2inactive");
                    lines[2].classList.remove("line3active");
                } catch (error) {
                    console.log(error);
                }
            });
        });
    }
    hamburger.addEventListener("click", () => {
        navLists.classList.toggle("navVisible");
        lines[0].classList.toggle("line1active");
        lines[1].classList.toggle("line2inactive");
        lines[2].classList.toggle("line3active");
    });
    AddAnimation(NavbarAnimation);

}

function NavbarAnimation() {
    if (sessionStorage.getItem("firstViewOnmyCODEnotein") === true || sessionStorage.getItem("firstViewOnmyCODEnotein") === null) {
        sessionStorage.setItem("firstViewOnmyCODEnotein", false);
        document.querySelector(".logo").style.setProperty("animation", "logoAnimation 4s ease-in");
        document.querySelector("nav").setAttribute("data-animationPlayed", "true");
    }
    else {
        document.querySelector("nav").setAttribute("data-animationPlayed", "false");
    }
}

function AddAnimation(animation) {
    animationsToBePlayed.push(animation);
}

function PlayAnimations() {
    animationsToBePlayed.forEach((animation) => {
        animation();
    });
}

function RunApp() {
    AppendScripts();
    AppendStyles();
    SetNavbar()

    const googleTagManager = 
    `
    <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-167954453-3"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-167954453-3');
</script>
    `

    document.querySelector("head").innerHTML = googleTagManager+document.querySelector("head").innerHTML;

    window.onload = () => {
        document.body.style.backgroundColor = "var(--light)";
        PlayAnimations();
    }
}
RunApp()