/* Core Features:
*1 - Start screen to take the name (Player as default name) and start button.
*2 - Shuffle all the cards. 
// *3 - All Cards must be flipped down at the start of the game.
// *4 - A click on a card flip it faced up.
// *5 - If two cards clicked then latch, or hide.
// *6 - Create a list that holds all of opened cards
*7 - Each 2 clicks is one move. 
*8 - Time start at the start of the game.
*9 - Restarting the game is possible. 
*10- Stars are calculated based on a formula. 
*11- At the end of the game, popup shows the stats and name of player.

Bonus:
* Flipping card animation.
// * Game start: Show all the cared faced up for 3s.
* Shake the cards OR make the background color red on wrong answers.
* if the cards match, make animation and make the background green.
* Flipping card animation.
* Leaderboard

Bugs:
* you should not be able to click clicked cards. 
*/

// The start of the code. 

// Toggle the cards
let cards = document.querySelectorAll(".card");

function toggleCards () {
    for (const element of cards) {
        element.classList.toggle("show");
    }

}

setTimeout(toggleCards,300);
setTimeout(toggleCards,3000);

// Adding event listener to show the cards
let cardFlag = 1;
let card1 , class1, class2;
let matchCounter = 0;
let movesCounter = 0;
let moves = document.querySelector(".moves");
moves.textContent = movesCounter;

function cardLatch(element) {

    element.setAttribute("class", "match card");
    matchCounter += 1;
}


function cardReset(element) {
    element.setAttribute("class", "card no-match");
    setTimeout(function() {
        element.classList.remove("no-match")},700);
}
function cardLogic (element) {

    if (cardFlag === 1) {
        class1 = element.firstElementChild.className
        cardFlag = 2;
        card1 = element;
    }
    else {

        if (cardFlag === 2) {
            class2 = element.firstElementChild.className
            if (class1 === class2) {
                cardLatch(element)
                cardLatch(card1)
            }
            else {
                cardReset(element);
                cardReset(card1);
            }
            movesCounter += 1;
            moves.textContent = movesCounter;

        }
        cardFlag = 1;
    }
    if (matchCounter === 16) {
        alert("You have won!")
    }

}
function cardSelect() {
    // TODO: Condition to check if the card already clicked.
    if ( this.classList.contains("match") === false && this.classList.contains("show") === false && this.classList.contains("no-match") === false) {
        this.setAttribute("class", "show open card");
        cardLogic(this)
    }
    
}

for (const card of cards) {
    card.addEventListener("click",cardSelect)
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// !Small scale code.




/* 
function cardSelect() {
    this.classList.toggle("show");
    this.classList.toggle("open");        
}
 */
