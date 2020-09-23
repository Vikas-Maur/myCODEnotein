
function ShiftTabHover(liTag,tabHoverDiv){
    tabHoverDiv.style.width = `${liTag.offsetWidth}px`;
    tabHoverDiv.style.top = `${liTag.offsetTop + liTag.offsetHeight}px`;
    tabHoverDiv.style.left = `${liTag.offsetLeft}px`;
}

function ChangeTabTarget(activeTab,allTabs){
    return
}

const tabSections = document.querySelectorAll(".tabSection");
const tabAttr = "data-tabs";
const tabTargetAttr = "data-tabTargets";
const defaultTabs = ["CODE","DESC"];

tabSections.forEach(tabSection=>{
    const tabHolder = document.createElement("ul");
    const tabHoverDiv = document.createElement("div");
    tabHoverDiv.classList.add("tabHover");

    let tabs;
    try{
        tabs = tabSection.getAttribute(tabAttr).split(" ");
    }catch(e){
        tabs = defaultTabs;
    }
    const tabTargets = tabSection.getAttribute(tabTargetAttr).split(" ");

    tabs.forEach((tab,index)=>{
        const liTag = document.createElement("li");
        liTag.innerHTML = tab;
        tabHolder.appendChild(liTag);
        liTag.addEventListener("click",()=>{
            ChangeTabTarget(tabTargets[index],tabTargets);
            ShiftTabHover(liTag,tabHoverDiv);
        });
    });

    tabHolder.appendChild(tabHoverDiv);
    tabSection.appendChild(tabHolder);
    tabHolder.children[0].click();

});