// Practice Exercise 1
const noteInput = document.getElementById("noteInput");
const saveBtn = document.getElementById("saveBtn");
const loadBtn = document.getElementById("loadBtn");
const status = document.getElementById("status");

// Save note with timestamp
saveBtn.addEventListener("click", function () {
    const note = noteInput.value;
    if (note.trim() === "") {
        status.textContent = "Please type something before saving!";
        status.style.color = "red";
        return;
    }
    const savedAt = new Date().toLocaleString(); // timestamp
    const noteData = { text: note, savedAt: savedAt };

    localStorage.setItem("myNote", JSON.stringify(noteData));
    status.textContent = `Note saved at ${savedAt}`;
    status.style.color = "green";
});

// Load note
loadBtn.addEventListener("click", function () {
    const noteData = localStorage.getItem("myNote");
    if (noteData) {
        const parsed = JSON.parse(noteData);
        noteInput.value = parsed.text;
        status.textContent = `Last saved at ${parsed.savedAt}`;
        status.style.color = "blue";
    } else {
        status.textContent = "No saved note found!";
        status.style.color = "red";
    }
});

// Practice Exercise 2
const message = document.getElementById("message");
const firstVisitEl = document.getElementById("firstVisit");
const resetBtn = document.getElementById("resetBtn");

// Get data from localStorage
let visitCount = localStorage.getItem("visitCount");
let firstVisit = localStorage.getItem("firstVisit");

if (visitCount) {
    visitCount = parseInt(visitCount) + 1;
    localStorage.setItem("visitCount", visitCount);
} else {
    visitCount = 1;
    localStorage.setItem("visitCount", visitCount);
    firstVisit = new Date().toLocaleString();
    localStorage.setItem("firstVisit", firstVisit);
}

// Display message
message.textContent = `You have visited this page ${visitCount} times.`;

if (firstVisit) {
    firstVisitEl.textContent = `Your first visit was on: ${firstVisit}`;
}

// Reset button clears the counter
resetBtn.addEventListener("click", function () {
    localStorage.removeItem("visitCount");
    localStorage.removeItem("firstVisit");
    message.textContent = "Counter reset! Refresh the page.";
    firstVisitEl.textContent = "";
});

// Practice Exercise 3
const lightBtn = document.getElementById("lightBtn");
const darkBtn = document.getElementById("darkBtn");
const blueBtn = document.getElementById("blueBtn");

// Function to apply theme
function setTheme(theme) {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
}

// Load saved theme from localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    setTheme(savedTheme);
} else {
    setTheme("light-mode"); // default
}

// Button events
lightBtn.addEventListener("click", () => setTheme("light-mode"));
darkBtn.addEventListener("click", () => setTheme("dark-mode"));
blueBtn.addEventListener("click", () => setTheme("blue-mode"));