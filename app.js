const keyboard = document.getElementById('qwerty');
const word = document.getElementById('phrase');
const reset = document.querySelector('.btn__reset');
const missed = 0;

// listens for start button presses
reset.addEventListener('click', () => {
    document.getElementById('overlay').style.display = 'none';
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
};

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
        };
    }

// checks if a letter is in the phrase
const checkLetter = button => {
        let letters = document.getElementsByClassName('letter');
        let match = null;
        for (let i = 0; i < letters.length; i++) {
            if (letters[i].textContent.toLowerCase() === button) {
                li.classList.add= 'show';
                console.log('true');
            } else {
                button.textContent= match;
                return match;
                console.log('false');
            }
        }
    };

// listens for onscreen keyboard clicks
// keyboard.addEventListener('click', (e) => {
//     if (button)
// });

// check if you've been victorious or not!
// const checkWin = () => {
//     const letterLi = document.getElementsByClassName('.letter');
//     const showLi = document.getElementsByClassName('.show');
    
// };