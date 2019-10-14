const keyboard = document.getElementById('qwerty');
const word = document.getElementById('phrase');
const reset = document.querySelector('.btn__reset');
const missed = 0;

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

    const checkLetter = button => {
        let letters = document.getElementsByName(li);
        let match = null;
        for (let i = 0; i < randomPhrase.length; i++) {
            if (button === randomPhrase[i]) {
                li.classList.add= 'show';
            } else (button !== randomPhrase[i]) {
                button.textContent= match;
            }
        }
        return match;
    };

// const checkLetter = button => {
//    checkLetter = document.getElementsByName(li);
//    const match = null;
//    for (let i = 0; i < )

// keyboard.addEventListener('click', () => {

// });

// function checkWin() {};