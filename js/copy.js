
function CopyText(text){
    const tArea = document.createElement("textarea");
    document.body.append(tArea);
    tArea.value = text;
    tArea.select();
    document.execCommand("copy");
    document.body.removeChild(tArea);
}

const copyButtons = document.querySelectorAll(".copy");

copyButtons.forEach(button=>{
    const copyText = button.nextElementSibling.innerText;
    button.innerText = "Copy";
    button.addEventListener("click",()=>{
        button.innerText = "Copied!";
        CopyText(copyText);
    });
    button.addEventListener("mouseleave",()=>{
        button.innerText = "Copy";
    });
});

