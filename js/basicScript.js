const heading = document.querySelector(".heading");
const headingAnimationName = heading.getAttribute("data-animation") || "headingBubble";

function HeadingAnimation(){
    const navAnimationPlay = document.querySelector("nav").getAttribute("data-animationPlayed");
    if (navAnimationPlay == "false") {
        heading.style.setProperty("animation", `${headingAnimationName} 3s ease-in-out`);
    }
    else {
        heading.style.setProperty("animation", `${headingAnimationName} 3s ease-in-out 5s`);
    }
}
AddAnimation(HeadingAnimation);

const container = document.querySelector(".container");
const content = document.querySelector(".content");
const teleporter = document.createElement("div");
teleporter.id = "teleporter";

container.appendChild(teleporter);

const tabSpaces = document.querySelectorAll(".tab")
tabSpaces.forEach(tab => {
    const noOfSpaces = Number(tab.classList[1])||1;
    console.log(noOfSpaces);
    const preTag = document.createElement("pre");
    preTag.style.display = "inline";
    for (let i = 0; i < noOfSpaces; i++) {
        preTag.innerHTML = preTag.innerHTML + "&Tab;";
    }
    tab.appendChild(preTag);
});