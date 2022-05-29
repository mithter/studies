// const exams = [80, 98, 76, 78, 77, 90, 89, 84, 81, 77]

// function examScore(arr) {
//     return exams.every(score => score >= 75);
// }

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99,
//         year: 1984
//     },
//     {
//         title: 'Sharknado',
//         score: 35,
//         year: 2013
//     },
//     {
//         title: 'Amadeus',
//         score: 99,
//         year: 1984
//     },

// ]



// const prices = [1.99, 2.99, 3.99, 7.99, 99.99, 0.99, 0.75]

// const minPrice = prices.reduce((min, num) => {
//     if (min.prices < num.prices) {
//         return min;
//     }
//     return num;
// }
// )


const person = {
    firstName: 'Jimmy',
    lastName: 'Johnny',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function () {
        setTimeout(() => {
            console.log(this);
            console.log(this.fullName())

        }, 3000)
    }
}