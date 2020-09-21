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
