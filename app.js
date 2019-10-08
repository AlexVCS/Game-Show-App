const keyboard = document.getElementById('qwerty');
const word = document.getElementById('phrase');
const missed = 0;

document.querySelector('.btn__reset').addEventListener('click', () => {
    document.getElementById('overlay').style.display = 'none';
});

const phrases = [
    'Raspberry Sorbet',
    'Mango Cake',
    'Passion Fruit Cupcake',
    'Pineapple Donut',
    'Mamey Ice Cream'
];

function getRandomPhraseAsArray(arr) {
    const randomPhrase = arr[Math.floor(Math.random() * arr.length)];

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split('');
    }

    console.log(randomPhrase);
    return freshPhrases;
    
};

function addPhraseToDisplay(arr) {
        randomPhrase(arr);
        let characters = randomPhrase(arr);
        for (let i = 0; i < randomPhrase.length; i++) {
            console.log(randomPhrase[i]);
            
         let ul = document.getElementsByTagName('ul')[0];
         let li = document.createElement('li');
         li.textContent = characters.value;    
         ul.appendChild(li);
        
         const phraseArray = getRandomPhraseAsArray(phrase);
         addPhrasetoDisplay(phraseArray);
        };

// function checkLetter () {
//     if () {}
//     else () {}
// }

// function checkWin() {};