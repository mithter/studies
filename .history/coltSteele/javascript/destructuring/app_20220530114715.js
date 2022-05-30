// const scores = [11912, 75479, 56897, 47557, 45488, 22587];

// const highScore = scores[0];
// const secondHighScore = scores[1];

// //Destructuring

// const [gold, silver, bronze] = scores;

// const raceResults = ['Eliud Kipchoge', 'Feyisa Lelisa', 'Galen Rupp'];

// const [goldMetal, silverMetal, bronzeMetal] = raceResults

// //Rest operator included

// const [fastest, ...everyoneElse] = raceResults;

const user = {
    email: 'harvey@gmail.com',
    password: 'GIbberish22%%',
    firstName: 'Scott',
    lastName: 'Gerord',
    born: 1933,
    died: 1982,
    bio: 'Scott Genko Gerord was an American Ambasssador and the first openly crazy person in the world',
    city: 'Hankeyland',
    state: 'Maryland'
}


// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;

// const { email, firstName, lastName, city, bio } = user;

// const { born: birthYear, died: deathYear } = user

const user2 = {
    email: 'stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Concord',
    born: 1981,
    city: 'Richardland',
    state: 'Nebraska'
}

const { city, state, died: deathYear = 'N/A' } = user2

// function fullName(user) {
//     return `${user.firstName} ${user.lastName}`
// }

function fullName(user) {
    const { firstName, lastName }
    return `${user.firstName} ${user.lastName}`
}
