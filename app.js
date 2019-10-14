const keyboard = document.getElementById('qwerty');
const word = document.getElementById('phrase');
const reset = document.querySelector('.btn__reset');
const missed = 0;

reset.addEventListener('click', () => {
    document.getElementById('overlay').style.display = 'none';
    // **** Moved this variable and function call inside of here. ****
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
        // **** changed this to loop through passed in arr ****
        for (let i = 0; i < arr.length; i++) {

         let ul = document.getElementsByTagName('ul')[0];
         let li = document.createElement('li');
         // *** Set the textContent to the letter/space in the index position of array
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
        // **** this can't be the same variable name as the function: **** //
        // checkLetter = document.getElementsByName(li);
        let match = null;
        for (let i = 0; i < randomPhrase.value; i++) {
            if (button === checkLetter) {
                li.className= 's how';
            } else {
                button.textContent= match;
            }
        }
    };

// const checkLetter = button => {
//    checkLetter = document.getElementsByName(li);
//    const match = null;
//    for (let i = 0; i < )

// keyboard.addEventListener('click', () => {

// });

// function checkWin() {};