const keyboard = document.getElementById('qwerty');
const word = document.getElementById('phrase');
const reset = document.querySelector('.btn__reset');
const missed = 0;

reset.addEventListener('click', () => {
    document.getElementById('overlay').style.display = 'none';
    const phraseArray = getRandomPhraseAsArray(phrase);
    addPhrasetoDisplay(phraseArray);
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

getRandomPhraseAsArray(phrases);



const addPhraseToDisplay = arr => {
        randomPhrase(arr);
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

// const checkLetter = button => {
//    grabLi = document.getElementsByName(li);
//    let match = null;
//    for (let i = 0; i < randomPhrase.value; i++) {
//        if button === checkLetter {
//            li.className= 'show';
//        } else {
//            button.textContent= match;
//        }
//    }

// keyboard.addEventListener('click', () => {

// });

// function checkWin() {};