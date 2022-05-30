const newNumberList = [1, 2, 9, 12, 90, 18813, 22]
const newNumberList2 = [5, 19, 235, 1563, 1323]
console.log(...newNumberList, ...newNumberList2)

Math.max(...newNumberList)
Math.max(newNumberList)

const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty, Wyatt'];

const allPets = [...cats, ...dogs]



//Spreading Objects into a new array


const feline = {
    legs: 4,
    ears: 2,
    claws: 10,
    name: 'Kibby',
    isFurry: true
}

// function sum() {
//     return arguments.reduce((total, el) => total + el)
// }

// function sum(...nums) {
//     return nums.reduce((total, el) => total + el)
// }

function raceResults(gold, silver, ...everyoneElse) {
    console.log(`Gold metal goes to :${gold}`);
    console.log(`Silver metal goes to :${silver}`);
    console.log(`And thanks to everyone else: ${everyoneElse}`);
}

console.log("Build")