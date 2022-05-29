function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1
}

function greet(msg = "Hi", person = "Bob", punc = "!") {
    console.log(`${msg}, ${person}${punc}`)
}