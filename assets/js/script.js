var startButton = document.querySelector('.start-button')
var wordBlanksEl = document.querySelector('.word-blanks')

var validChars = "abcdefghijklmnopqrstuvwxyz"
var words = ["lion", "zebra", "kitten", "dog", "monkey", "whale", "bear", "eagle", "hawk"]
var output
var guessedCharacters = []
// score variable
// timeleft variable

function handleKeydown( event ) {
    console.log(event.key)
    if (validChars.includes(event.key)) {
        // keep track of character that was guessed
        guessedCharacters.push(event.key)
        // re render wordBlanks.textContent
        renderCharacters() 
    }
    // validate key 
}

function renderCharacters(){
    var string = ""
   

//  var to hold a new string
for (var i = 0; i < output.length; i++) {
    var letter = output[i]
    // if we have guessed the character
    if (guessedCharacters.includes(letter) ) {
    // add the character into string
    string += letter + ' ' 

} else {
        
        // add an _ into string
        string += '_ '

    
}
        console.log(string)

    }
    // set testContent of wordBlankEl to be string

    wordBlanksEl.textContent = string.trim()
}

function startRound() {
    // get random word from words array
    var randomIndex = Math.floor( Math.random() * words.length)
    output = words[randomIndex]
    renderCharacters()
}

startButton.addEventListener("click", startRound)

document.addEventListener('keydown', handleKeydown)