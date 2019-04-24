// Code your solutions in this file
function printBadges(list) {
    let count=0
    for (let each of list) {
        count++
        console.log(`Welcome ${each}! You are employee #${count}.`)
    }
    return list
}

function roll() {
    return Math.random()
}

function tailsNeverFails(input=roll()) {
    let tailsCount=0
    while   (input <= 0.5) {
            tailsCount++
        }
    return `You got ${tailsCount} tails in a row!`
}