let points = 0;
let totalBots = {
    basic: 0,
    advanced: 0,
    pro: 0
};
const botCosts = {
    basic: 10,
    advanced: 50,
    pro: 200
};
const botClickRates = {
    basic: 1,
    advanced: 5,
    pro: 20
};

// DOM Elements
const pointsDisplay = document.getElementById("points");
const circle = document.getElementById("circle");
const sellButton = document.getElementById("sellButton");
const botButtons = document.querySelectorAll(".botButton");

// Click event for the circle
circle.addEventListener("click", () => {
    points++;
    updatePointsDisplay();
});

// Function to update points display
function updatePointsDisplay() {
    pointsDisplay.textContent = points;
}

// Sell button event to sell points and buy bots
botButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        const botType = event.target.getAttribute("data-bot-type");
        if (points >= botCosts[botType]) {
            points -= botCosts[botType];
            totalBots[botType]++;
            updatePointsDisplay();
        } else {
            alert("Not enough points to buy this bot.");
        }
    });
});

// Function to handle bot clicks per second
function generateClicks() {
    let clicksPerSecond = totalBots.basic * botClickRates.basic +
                          totalBots.advanced * botClickRates.advanced +
                          totalBots.pro * botClickRates.pro;
    points += clicksPerSecond;
    updatePointsDisplay();
}

// Set up automatic click generation every second
setInterval(generateClicks, 1000);