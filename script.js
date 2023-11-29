const wordURL = 'https://words.dev-apis.com/word-of-the-day'

async function getWord() {
    const promise = await fetch(wordURL)
    processedPromise = await promise.json()
    console.log(processedPromise.word)
    return processedPromise.word
}

let userInput = ''

let colPosition = 0
let rowPosition = 0
let trials = 1
let winner = false
const columns = ['one', 'two', 'three', 'four', 'five']
const rows = ['one', 'two', 'three', 'four', 'five', 'six']

function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter);
}

const dayWord = getWord()

async function validateInput() {
    const dayWord = await getWord()

    if (userInput === dayWord) {
        alert('You Won !!!')
        winner = true
    } else {
        if (trials === 6) {
            alert('You lost')
        } else {
            alert('Try again !')
        }
    }
}
document
    .addEventListener("keydown", function (event) {
        if (!isLetter(event.key)) {
            event.preventDefault();
        } else {
            if (trials <= 6 && !winner) {
                const currentBoxId = rows[rowPosition] + '-' + columns[colPosition % 5]
                const currentBox = document.getElementById(`${currentBoxId}`)
                console.log(currentBox)
                currentBox.innerText = event.key
                userInput += event.key
                colPosition = colPosition + 1
                if (colPosition % 5 === 0) {
                    trials += 1
                    rowPosition += 1
                    validateInput()
                }
            }
        }
    });
