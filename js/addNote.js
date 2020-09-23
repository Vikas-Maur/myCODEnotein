const addNote = document.createElement("button");
addNote.id = "addNote";
addNote.innerHTML = "ADD NOTE";

const noteSection = document.createElement("div");
noteSection.id = "noteSection";

const noteDiv = document.createElement("div");
noteDiv.id = "noteDiv";
noteDiv.classList.add("hideNoteDiv");

const noteDivButtons = document.createElement("div");
noteDivButtons.id = "noteDivButtons";

const removeNoteDiv = document.createElement("button");
removeNoteDiv.innerHTML = "X";
removeNoteDiv.id = "removeNoteDiv";
noteDivButtons.appendChild(removeNoteDiv);

addNote.addEventListener("click",()=>{
    noteDiv.classList.toggle("hideNoteDiv");
});


noteSection.appendChild(noteDiv);
noteSection.appendChild(addNote);
noteDiv.appendChild(noteDivButtons);
document.querySelector(".container").appendChild(noteSection);