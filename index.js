// Code your solutions in this file
function printBadges(array){
    for (let index = 0; index < array.length; index++){
        console.log(`Welcome ${array[index]}! You are employee #${index+1}.`)
    }
    return array
}

function tailsNeverFails() {
    let count = 0
    while (Math.random() >= 0.5) {
        count++
    } 
    return `You got ${count} tails in a row!`
}
