let randomNumber = parseInt(Math.random()*100+1);
// console.log(randomNumber);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame)
    {
        submit.addEventListener('click', 
        function(e)
        {
            e.preventDefault();
            const guess = parseInt(userInput.value);
            console.log(guess);
            validGuess(guess);

        }
    )
    }
function validGuess(guess)
{
    //
    if(isNaN(guess))
        {
            alert('Please enter a valid Number ');
        }else if (guess < 1 || guess > 100)
            {
                alert('Please enter a numer in between 1 to 100');
            }else{
                prevGuess.push(guess);
                if(numGuess == 11)
                    {
                        displayGuess(guess);
                        displayMessage(`Game Over. Random number was
                        ${randomNumber}`);
                        endGame();
                    }else{
                        displayGuess(guess);
                        checkGuess(guess);
                    }
            }
    
}

function checkGuess(guess)
{
    //
    if(guess === randomNumber){
        displayMessage(`You guessed it right`);
        endGame();
    }else if ( guess < randomNumber){
            displayMessage(`Number is TOO low`);
        }else{
            displayMessage(`Number is TOO high`);
        }
}
function displayGuess(guess)
{
    //
    userInput.value = '';
    guessSlot.innerHTML += `${guess}`
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message)
{
    lowOrHi.innerHTML = `<h2>${message}</h2>`

}

function endGame()
{
    //

}

function newGame()
{
    //

}
