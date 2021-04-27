function SetTeleporterButtons(){
    const teleporterButtons = document.querySelectorAll(
        "#teleporter li button.btn-toggle"
    );
    teleporterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            let ariaExpanded = button.getAttribute("aria-expanded");
            const scrollToId = button.getAttribute("data-targetId");
            const targetElement = document.getElementById(scrollToId);
            if (ariaExpanded == "true") {
                targetElement.scrollIntoView(true);
            }
        });
    });
}

