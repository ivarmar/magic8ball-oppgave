// modell
let app = document.getElementById("app");
let randomReplies = [
    "No",
    "Yes",
    "maybe",
    "ofc you will",
    "I doubt it",
    "genius question indeed",
];

let lastIndex;
let takenAnswer = "";
// View
updateView();
function updateView() {
    app.innerHTML = /*HTML*/ `
        <h1>This is the magic 8 ball, ask it anything!</h1>
        <div id="Answers">${takenAnswer}</div>
        <button class="knapp" onclick="generateRndAnswers()">Ask me</button>
        <input type="text" placeholder="Ask a question here">
    `;
}

// Controller
function generateRndAnswers() {
    randomIndex = Math.floor(Math.random() * randomReplies.length);
    while (lastIndex == randomIndex) {
        console.log("trying again:");
        randomIndex = Math.floor(Math.random() * randomReplies.length);
    }
    takenAnswer = randomReplies[randomIndex];
    lastIndex = randomIndex;
    updateView();
}
