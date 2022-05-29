// const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer', 'gunners'];

// for (i = 0; i < subreddits.length; i++) {
//     console.log(`Visit reddit.com/r/${subreddits[i]}`);
// }

// for (let sub of subreddits) {
//     console.log(`Visit reddit.com/r/${sub}`)
// }

// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]

// for (let array of seatingChart) {
//     console.log(array)
//     for (let seat of array) {
//         console.log(seat)
//     }
// }

// for (let char of "hello world") {
//     console.log(char);
// }

const testScores = {
    david: 25,
    mark: 80,
    brad: 79,
    gary: 92,
    marcus: 93,
    magenya: 87,
}


let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
    total += score;
}
console.log(total / scores.length);