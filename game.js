const playerElement = document.getElementById('player');
const gameContainer = document.getElementById('gameContainer');
let playerPosition = [0, 0];
let jump = false;

// Define mission area
const missionArea = {
    x: 300,
    y: 200,
    width: 100,
    height: 100
};

function updatePlayerPosition() {
    playerElement.style.left = `${playerPosition[0]}px`;
    playerElement.style.bottom = `${playerPosition[1]}px`;
}

function moveLeft() {
    playerPosition[0] -= 20;
    if (playerPosition[0] < 0) playerPosition[0] = 0;
    updatePlayerPosition();
}

function moveRight() {
    playerPosition[0] += 20;
    if (playerPosition[0] > gameContainer.offsetWidth - playerElement.offsetWidth) {
        playerPosition[0] = gameContainer.offsetWidth - playerElement.offsetWidth;
    }
    updatePlayerPosition();
}

function jumpUp() {
    if (!jump) {
        jump = true;
        const interval = setInterval(() => {
            if (playerPosition[1] < 100) {
                playerPosition[1] += 5;
                updatePlayerPosition();
            } else {
                clearInterval(interval);
                jump = false;
                console.log("Jump complete!");
            }
        }, 20);
    }
}

function startMission() {
    const isInRange = 
        playerPosition[0] >= missionArea.x &&
        playerPosition[0] <= missionArea.x + missionArea.width &&
        playerPosition[1] >= missionArea.y &&
        playerPosition[1] <= missionArea.y + missionArea.height;

    if (isInRange) {
        alert("You completed the mission!");
    } else {
        alert("You are not in the mission area.");
    }
}

updatePlayerPosition();
