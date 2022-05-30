// const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
// const evens = nums.filter(n => {
//     return n % 2 === 0;
// })

// const smallNums = nums.filter(n => n <= 5);


// const fruit = [
//     1,
//     2,
//     3,
//     4,
//     5,
//     6,
//     7,
//     8,
//     9,
//     10
// ]

// const odds = fruit.filter(n => {
//     return n % 2 === 1;
// })


// const validUserNames = [
//     'gary',
//     'luke22boo',
//     'voldermort91',
//     'limmewitz11021'
// ];

// const invalidUserNames = validUserNames.filter(n => n.length < 10);
// let userNames = ["Bill", "George20012", "Marcus291341", "Gregins2", "MarkNum"];
// let validUserNames = userNames.filter(n => n.length < 5);


// function validUserNames([a, b, c, d, e]) {
//     userNames.filter(n => n.length < 10).map(m => m.);
// }

// function validUserNames(usernames) {
//     return usernames.filter(function (username) {
//         if (username.length < 10)
//             return username;
//     })
// }

// let reverseString = function (s) {
//     for (let i = s.length - 1; i >= 0; i--)
//         console.log(s[i]);
// }


const testArray = ['Beans', 'CherryCoke2', 'MilkMaid221', 'JimmyWts', 'Yarnba', 'Krauchy']

let validUsernames = function (arry) {
    return (arry.filter((item) => {
        return item.length < 10;
    }))
}