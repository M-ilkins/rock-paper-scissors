const roundNumber = document.getElementById('round-number');
const compChoiceDisplay = document.getElementById('computer-choice');
const startButton = document.getElementById('start');
const compChoices = ['rock', 'paper', 'scissors'];
const userChoice = document.getElementById('user-choice');
const userChoicesList = document.querySelectorAll('input');
const result = document.getElementById('result');
const restartButton = document.getElementById('reload');
const yourScore = document.getElementById('your-score');
const computerScore = document.getElementById('computer-score');



function generateRandChoice () {
    if (!userChoice.textContent){
        document.getElementById('notification').style.display = 'inline-block';
        setTimeout(()=>{document.getElementById('notification').style.display = 'none';}, 2000);
        return;
    }
    let randNum = Math.floor(Math.random() * 3);
    let randChoice = compChoices[randNum];
    compChoiceDisplay.textContent = randChoice;
    roundNumber.textContent++;
    if (userChoice.textContent === compChoiceDisplay.textContent){
        result.textContent = 'draw';
    } else if (userChoice.textContent === 'rock' && compChoiceDisplay.textContent === 'paper'){
        result.textContent = 'loss';
    } else if (userChoice.textContent === 'rock' && compChoiceDisplay.textContent === 'scissors'){
        result.textContent = 'win';
    } else if (userChoice.textContent === 'paper' && compChoiceDisplay.textContent === 'rock'){
        result.textContent = 'win';
    } else if (userChoice.textContent === 'paper' && compChoiceDisplay.textContent === 'scissors'){
        result.textContent = 'loss';
    } else if (userChoice.textContent === 'scissors' && compChoiceDisplay.textContent === 'paper'){
        result.textContent = 'win';
    } else if (userChoice.textContent === 'scissors' && compChoiceDisplay.textContent === 'rock'){
        result.textContent = 'loss';
    }
    if(result.textContent === 'win'){
        yourScore.textContent++;
    } else if (result.textContent === 'loss'){
        computerScore.textContent++
    }
}

startButton.addEventListener('click', generateRandChoice);
userChoicesList.forEach(input => input.addEventListener('click', displayYourChoice));
restartButton.addEventListener('click', () => location.reload());

function displayYourChoice () {
    userChoicesList.forEach(input => {
        if(input.checked == true) {
            userChoice.textContent = input.value;
        }
    })
}














