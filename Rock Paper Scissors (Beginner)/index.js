const computerChoiceDisplay = document.getElementById('computer-choice')
const playerChoiceDisplay = document.getElementById('player-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let playerChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playerChoice = e.target.id
    playerChoiceDisplay.innerHTML = playerChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 //ya da possibleChoices.length
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === playerChoice) {
        result = 'Berabere!'
    }
    if (computerChoice === 'rock' && playerChoice === 'paper') {
        result = 'Oyuncu Kazandı!'
    }
    if (computerChoice === 'rock' && playerChoice === 'scissors') {
        result = 'Bilgisayar Kazandı!'
    }
    if (computerChoice === 'paper' && playerChoice === 'scissors') {
        result = 'Oyuncu Kazandı!'
    }
    if (computerChoice === 'paper' && playerChoice === 'rock') {
        result = 'Bilgisayar Kazandı!'
    }
    if (computerChoice === 'scissors' && playerChoice === 'rock') {
        result = 'Oyuncu Kazandı!'
    }
    if (computerChoice === 'scissors' && playerChoice === 'paper') {
        result = 'Bilgisayar Kazandı!'
    }
    resultDisplay.innerHTML = result
}