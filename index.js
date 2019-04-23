// Code your solutions in this file

function printBadges(array) {
    for (let i = 0;  i < array.length;i ++){
        let y = i + 1
        console.log(`Welcome ${array[i]}! You are employee #${y}.`);

    }
        return array;
}           


 function tailsNeverFails() {
   let count = 0
    while (Math.random() >= 0.5){
        count += 1
    }

    console.log (`You got ${count} tails in a row!`)
 }