// intro.js
//
// TODO: Implement the intro state machine with three states:
//   1. loading — initial state while the page/assets are preparing
//   2. ready   — "click to continue" state, waiting for user interaction
//   3. main    — transitions away from the intro into the main content

// 1. Wait 3 seconds
// 2. After the wait, log something to the console (not touching HTML yet)
const loadingDiv = document.getElementById("loading");
const continueDiv = document.getElementById("click-to-continue");
let timerId = setTimeout(loadingScreen, 3000);

function loadingScreen() {
    loadingDiv.classList.add("hidden");
    continueDiv.classList.add("visible");
}

