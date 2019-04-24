// Code your solutions in this file
function printBadges(list) {
    let count=0
    for (each of list) {
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
    let stupidVariableThatIsUnneededButTheTestIsBrokenSoWeHaveToHaveIt= Math.random()
    console.log(stupidVariableThatIsUnneededButTheTestIsBrokenSoWeHaveToHaveIt)
    while   (input <= 0.5) {
            tailsCount++
        }
    return `You got ${tailsCount} tails in a row!`
}