document.onload = () => {
    const hamburger = document.querySelector(".hamburger");

    hamburger.addEventListener("click", () => {
        document.querySelector(".navLists").classList.toggle("navVisible");
    });
}