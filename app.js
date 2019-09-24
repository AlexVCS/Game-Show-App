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
    
};

// function addPhraseToDisplay(arr){}
    

// const phraseArray = getRandomPhraseAsArray(phrases);
// addPhrasetoDisplay(phraseArray);

// function checkWin() {}