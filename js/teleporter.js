function ShiftHoverDiv(liTag) {
    const [top,height] = [liTag.getBoundingClientRect().top-75,liTag.getBoundingClientRect().height];
    hoverDiv.style.top = `${top}px`;
    hoverDiv.style.height = `${height}px`;
}

try {
    const tocSections = document.querySelectorAll(".section h2");

    const container = document.querySelector(".container");
    const teleporter = document.createElement("div");
    teleporter.id = "teleporter";
    teleporter.innerHTML = `<h1>TELEPORT TO :- </h1><ul id="teleportingList"></ul>`;
    const teleportingList = teleporter.querySelector("#teleportingList");

    const hoverDiv = document.createElement("div");
    hoverDiv.id = "hoverDiv";

    tocSections.forEach((section, index) => {
        const liTag = document.createElement("li");
        liTag.innerHTML = `${index + 1}.) ${section.innerText}`;
        teleportingList.appendChild(liTag);
        liTag.addEventListener("click", () => {
            const scrolliny = section.offsetTop;
            window.scrollTo(x = 0, y = scrolliny + 300);
            ShiftHoverDiv(liTag);
            if(window.innerWidth<=500){
                teleporter.classList.toggle("shiftTeleporter");
            }
        });
    });

    teleportingList.appendChild(hoverDiv);
    container.appendChild(teleporter);
}
catch (e) { }

if(window.innerWidth<=500){
    const showTeleporter = document.createElement("button");
    showTeleporter.id = "showTeleporter";
    showTeleporter.innerHTML = "Teleporter";
    document.querySelector(".container").appendChild(showTeleporter);
    showTeleporter.addEventListener("click",()=>{
        teleporter.classList.toggle("shiftTeleporter"); 
    });
    teleporter.classList.add("shiftTeleporter");
}