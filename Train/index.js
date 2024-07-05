let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let count = 0
function increment() {
    count = count + 1
    countEl.textContent = count
}

function save() {
    let countData = " " + count + " + "
    saveEl.textContent += countData;
    countEl.textContent = 0;
    count = 0;
    console.log(count);
}
save()

let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard

if (sum < 21) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
} else if (sum > 21) {
    console.log("You're out of the game! 😭")
}