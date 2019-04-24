const names = ['Ada', 'Brendan', 'Ali']

function  printBadges(names) {
  for (i = 0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i+1}.`);
  }
  return names
}


function coinFlips() {
  return Math.random() >= 0.5;
}
let results = []
function tailsNeverFails() {
  results.length = 0;
  while(coinFlips() > 0.5) {
     results.push("Tails");
     console.log("Tails")
  }
  console.log('Heads')
  return `You got ${results.length} tails in a row!`
}
