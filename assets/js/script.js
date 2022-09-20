var startButton = document.querySelector('.start-button')
var wordBlanksEl = document.querySelector('.word-blanks')

var words = ["lion", "zebra", "kitten", "dog", "monkey", "whale", "bear", "eagle", "hawk"]
var output
// score variable
// timeleft variable

function renderCharacters(){
    var string = ""
   

//  var to hold a new string
for (var i = 0; i < output.length; i++) {
    // if we have guessed the character
        // add the character into string
    // else
        // add an _ into string
        string += '_ '
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

