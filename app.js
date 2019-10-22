const keyboard = document.getElementById('qwerty');
const word = document.getElementById('phrase');
const reset = document.querySelector('.btn__reset');
const showLi = document.getElementsByClassName('.show');
const startScreen = document.getElementById('overlay');
let letters = document.getElementsByClassName('letter');
let missed = 0;
// let letterFound= 'false';

// listens for start button presses
reset.addEventListener('click', () => {
    startScreen.style.display = 'none';
    const phraseArray = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(phraseArray);
});

const phrases = [
    'Raspberry Sorbet',
    'Mango Cake',
    'Passion Fruit Cupcake',
    'Pineapple Donut',
    'Mamey Ice Cream'
];

// return a random phrase from the array
const getRandomPhraseAsArray = arr => {
    const randomPhrase = arr[Math.floor(Math.random() * arr.length)];
    return randomPhrase.split('');
}

// add letters of a string to the displaay
const addPhraseToDisplay = arr => {
        for (let i = 0; i < arr.length; i++) {

         let ul = document.getElementsByTagName('ul')[0];
         let li = document.createElement('li');
         li.textContent = arr[i];

         if (li.textContent === ' ') {
             li.className = 'space';
         } else {
             li.className = 'letter';
         }

         ul.appendChild(li);
        }
    }

// checks if a letter is in the phrase
const checkLetter = button => {

        let match = null;
        for (let i = 0; i < letters.length; i++) {
            if (letters[i].textContent.toLowerCase() === button) {
                letters[i].classList.add('show');
                match = true;
            }
        }
        return match;
    }

    let hearts = document.querySelectorAll('img');

// listens for onscreen keyboard clicks
keyboard.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        event.target.disabled = true;
        event.target.classList.add('chosen');
        // pass the button to the checkLetter function
        let letterFound = checkLetter(event.target.textContent);
         // Increase the missed variable by one when the wrong letter is guessed
        if (letterFound === null) {
            missed += 1; 
        // remove a heart from the scoreboard, add lost heart
            hearts[missed].src = "images/lostHeart.png";
    }
    }
});  

// check if you've been victorious or not!

const checkWin = () => {
    let showLI = document.getElementsByClassName('show');
        if (letters.length === showLI.lenth) {
            startScreen.classList.add('win');
            startScreen.textContent = 'Congrats, you have won!!'
            startScreen.style.display = 'flex';
        }

        if (missed >= 5) {
            startScreen.classList.add('lose');
            startScreen.textContent = 'Awww no, you lost this time :('
            startScreen.style.display = 'flex';
        }
}

const gameReset = () => {

}