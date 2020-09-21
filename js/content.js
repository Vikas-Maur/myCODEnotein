/*

{{p}} --> primary color
{{su}} --> success color
{{s}} --> secondary
{{d}} --> danger
{{w}} --> warning
{{dark}} --> dark
{{l}} --> light
{{i}} --> info

{{comment}} --> comment

{{t}} --> tab

*/

const specificWords = ["import"];
const specificColors = ["info"];
const noApply = "{{noApply}}";
const noApplyLen = noApply.length;


function GivePropByTag(codeText) {
    let codeHTML = codeText;

    // REPLACES TEXT COLOR
    const colorTags = ["p", "su", "d", "w", "i", "l", "dark"];
    const colors = ["primary", "success", "danger", "warning", "info", "light", "dark"]
    colorTags.forEach((tag, index) => {
        const startTag = new RegExp(`{{${tag}}}`, "gi");
        const endTag = new RegExp(`{{end-${tag}}}`, "gi");
        codeHTML = codeHTML.replace(startTag, `<span class="text-${colors[index]}">`);
        codeHTML = codeHTML.replace(endTag, "</span>");
    });

    codeHTML = codeHTML.replace(/{{comment}}/gi, "<div class='comment'>");
    codeHTML = codeHTML.replace(/{{end-comment}}/gi, "</div>");

    codeHTML = codeHTML.replace(/{{t}}/gi, "<pre style='display:inline;'>&Tab;</pre>");

    noApplyTag = new RegExp(noApply,"gi");
    codeHTML = codeHTML.replace(noApplyTag,"");

    return codeHTML;
}

function GiveCode(codeText) {
    let codeHTML = codeText;
    codeHTML = GivePropByTag(codeHTML);

    return codeHTML;
}

const content = document.querySelector(".content");

const sections = content.querySelectorAll(".section");

sections.forEach((section) => {
    const heading = section.querySelector("h2");
    heading.innerHTML = GiveCode(heading.innerHTML);

    const subHeadings = section.querySelectorAll("h3");
    subHeadings.forEach(subHeading => {
        subHeading.innerHTML = GiveCode(subHeading.innerHTML);
    });

    const codeBlocks = section.querySelectorAll(".code");
    codeBlocks.forEach(codeBlock => {
        codeBlock.innerHTML = GiveCode(codeBlock.innerHTML);
    });

});
