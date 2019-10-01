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
    return freshPhrases;
};

function addPhraseToDisplay(arr) {
    for ()
}
    

// const phraseArray = getRandomPhraseAsArray(phrases);
// addPhrasetoDisplay(phraseArray);

// function checkLetter () {}

// function checkWin() {}