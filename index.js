//created a player to bet an amount when playing
let player = {
    name: "Tshireletso",
    chips: 100,
    
    }

//created variables and set their values to their suitable labels
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")



playerEl.textContent = player.name + ": R" + player.chips

//this function picks any card to show 
function getRandomCard() {
    let randomNumber = Math.floor (Math.random()*13 )+ 1 
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

//created function values to enable my game to play
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    //set rules for my game of when to draw a new card, when to get a blackjack and how it kicks you out of the game
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Draw a new card"
    } else if (sum === 21) {
        message = "Blackjack!"
        hasBlackJack = true 
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message       
}
//created a function value that triggers a new card to add up the total sum needed to win
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}



// I found coding with javascript difficult. It took long for me to understand certain things like creating functions and syntax. My cards also drew with decimal numbers and it took me a whole day to figure out my mistakes. I also struggled with understanding the idea of black jack game but I ended up downloading the game application and the moment I understood the rules of the game it became easier for me to know and understand what is required of me in the project. Overall I enjoyed the challenges I faced and loved how I overcame them.