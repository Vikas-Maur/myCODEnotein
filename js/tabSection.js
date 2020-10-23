const tabSections = document.querySelectorAll(".tabSection");
tabSections.forEach(tabSection=>{
    const tabs = tabSection.querySelectorAll(".tab");
    tabs.forEach(tab=>{
        tab.addEventListener("click",()=>{
            tabs.forEach(rtab=>{
                document.getElementById(rtab.getAttribute("data-target")).classList.add("hiddenTab");
                rtab.classList.remove("tabBorder");
            })
            document.getElementById(tab.getAttribute("data-target")).classList.remove("hiddenTab");
            tab.classList.add("tabBorder");
        });
    });
    tabs[0].click();
})