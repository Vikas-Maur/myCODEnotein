// TRASH SVG
const trash =
    `
    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
  </svg>
`

// EXCLAMATION SVG
const excl =
    `
<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-exclamation-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
</svg>
`

const noteIds = "notesId";
let notesAdded = [];

function SetTheLocalStorage() {
    if (localStorage.getItem(noteIds) === null) {
        localStorage.setItem(noteIds, notesAdded.join(" "));
    }
    else {
        notesAdded = localStorage.getItem(noteIds).split(" ");
    }
}

function CreateAnElement(elem, id = null, classList = null, callback = null) {
    const element = document.createElement(elem);
    if (id) {
        element.id = id;
    }
    if (classList) {
        classList.forEach(className => {
            element.classList.add(className)
        });
    }
    if (callback) {
        element.addEventListener("click", () => {
            callback()
        });
    }
    return element;
}

function ToggleNoteHolder() {
    notesHolder.classList.toggle("hideNoteHolder");
}

function CreateANote(parent = null) {
    const writeNote = document.createElement("div");
    writeNote.id = 
}

function AddToNoteDiv() {
    const writeNote = CreateANote();
    const delButton = CreateADelButton();
}

const notesHolder = document.createElement("div");
notesHolder.classList.add("hideNoteHolder");
notesHolder.id = "notesHolder";

// ******************

const notesButtonSection = document.createElement("div");
notesButtonSection.id = "notesButtonSection";

// ADDING BUTTONS  
const removeNoteSection = CreateAnElement("button", "removeNoteSection", null, ToggleNoteHolder);
const addNoteButton = CreateAnElement("button", "addNoteButton");
notesButtonSection.appendChild(removeNoteSection);
notesButtonSection.appendChild(addNoteButton);

// ******************

// ******************
const noteDiv = CreateAnElement("div", "noteDiv");


