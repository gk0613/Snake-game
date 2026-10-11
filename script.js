const snakeButton = document.getElementById("snake");
const scissorButton = document.getElementById("scissor");
const stoneButton = document.getElementById("stone");

const youChoiceDisplay = document.getElementById("you-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("result");
const yourScoreDisplay = document.getElementById("your-score");
const computerScoreDisplay = document.getElementById("computer-score");
const resetButton = document.getElementById("reset");

const choices = ["Snake", "Scissor", "Stone"];
let yourScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function checkWinner(you, computer) {
    if (you === computer) return "Draw";

    if (
        (you === "Snake" && computer === "Scissor") ||
        (you === "Scissor" && computer === "Stone") ||
        (you === "Stone" && computer === "Snake")
    ) {
        return "You Win!";
    }
    return "You Lose!";
}

function showResultClass(result) {
    resultDisplay.className = "result";
    if (result === "You Win!") {
        resultDisplay.classList.add("win");
    } else if (result === "You Lose!") {
        resultDisplay.classList.add("lose");
    } else {
        resultDisplay.classList.add("draw");
    }
}

function playGame(you) {
    const computer = getComputerChoice();
    const result = checkWinner(you, computer);

    youChoiceDisplay.textContent = you;
    computerChoiceDisplay.textContent = computer;
    resultDisplay.textContent = result;
    showResultClass(result);

    if (result === "You Win!") {
        yourScore++;
    } else if (result === "You Lose!") {
        computerScore++;
    }

    yourScoreDisplay.textContent = yourScore;
    computerScoreDisplay.textContent = computerScore;
}

function resetGame() {
    yourScore = 0;
    computerScore = 0;
    yourScoreDisplay.textContent = "0";
    computerScoreDisplay.textContent = "0";
    youChoiceDisplay.textContent = "-";
    computerChoiceDisplay.textContent = "-";
    resultDisplay.textContent = "Make your move!";
    resultDisplay.className = "result neutral";
}

snakeButton.addEventListener("click", () => playGame("Snake"));
scissorButton.addEventListener("click", () => playGame("Scissor"));
stoneButton.addEventListener("click", () => playGame("Stone"));
resetButton.addEventListener("click", resetGame);
