const leftArrow = document.querySelector(".leftArrow");
const rightArrow = document.querySelector(".rightArrow");
let activeTechIndex = 1; // Starting index

function getRandomTechnique() {
    return Math.floor(Math.random() * 10) + 1;
}

function updateDisplay() {
    // Hide the currently displayed tech
    document.querySelector(`.tec${activeTechIndex}`).style.display = "none";

    // Generate a new random number and update the activeTechIndex
    activeTechIndex = getRandomTechnique();

    // Show the new tech
    const randomDiv = document.querySelector(`.tec${activeTechIndex}`);
    randomDiv.style.display = "block";
    randomDiv.classList.add("active");
}

leftArrow.addEventListener("click", (e) => {
    e.preventDefault();
    updateDisplay();
});

rightArrow.addEventListener("click", (e) => {
    e.preventDefault();
    updateDisplay();
});
