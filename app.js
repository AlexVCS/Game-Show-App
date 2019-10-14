const keyboard = document.getElementById('qwerty');
const word = document.getElementById('phrase');
const reset = document.querySelector('.btn__reset');
const missed = 0;

reset.addEventListener('click', () => {
    document.getElementById('overlay').style.display = 'none';
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

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split('');
    }

    return randomPhrase;
};

getRandomPhraseAsArray(phrases);



const addPhraseToDisplay = arr => {
        randomPhrase(arr);
        let characters = randomPhrase(arr);
        for (let i = 0; i < randomPhrase.length; i++) {
            console.log(randomPhrase[i]);
            
         let ul = document.getElementsByTagName('ul')[0];
         let li = document.createElement('li');
         li.textContent = characters.value;

         if (li.textContent === ' ') {
             li.className = 'space';
         } else {
             li.className = 'letter';
         }

         ul.appendChild(li);

         const phraseArray = getRandomPhraseAsArray(characters);
         addPhrasetoDisplay(phrases);
        };
    }

// const checkLetter = button => {
//    checkLetter = document.getElementsByName(li);
//    const match = null;
//    for (let i = 0; i < )

// keyboard.addEventListener('click', () => {

// });

// function checkWin() {};