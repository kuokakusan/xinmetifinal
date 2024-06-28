const guessField = document.getElementById('guessField');
const guessMessage = document.getElementById('guessMessage');
const gameImage = document.getElementById('gameImage');

const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

let guessCount = 0;

function checkGuess() {
    const userGuess = parseInt(guessField.value);
    guessCount++;

    if (userGuess === randomNumber) {
        guessMessage.textContent = `恭喜你猜對了！你總共猜了${guessCount}次。`;

        // 觸發圖片動畫效果
        gameImage.classList.add('animateImage');
        gameImage.style.filter = 'blur(0px) hue-rotate(360deg) invert(0%) contrast(1)';

        disableInputAndButton(guessField);
    } else if (userGuess < randomNumber) {
        guessMessage.textContent = '太小了，再大一點。';
        guessMessage.style.color = 'red';
    } else {
        guessMessage.textContent = '太大了，再小一點。';
        guessMessage.style.color = 'red';
    }

    guessField.value = '';
}

function disableInputAndButton(input) {
    input.setAttribute('disabled', 'true');
    document.querySelector('button').setAttribute('disabled', 'true');
}

