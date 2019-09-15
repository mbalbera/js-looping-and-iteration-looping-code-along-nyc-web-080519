// Code your solutions in this file
function writeCards(namesArray, event) {
    let cards = []
    for (let x = 0; x < namesArray.length; x++) {
        cards.push(`Thank you, ${namesArray[x]}, for the wonderful ${event} gift!`)
    }
    return cards
}

function countdown(countdown) {
    while (countdown > 0) {
        console.log(countdown);
        countdown -= 1;
    }
    console.log(countdown);
}