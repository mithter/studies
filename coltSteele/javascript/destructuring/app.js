const scores = [11912, 75479, 56897, 47557, 45488, 22587];

const highScore = scores[0];
const secondHighScore = scores[1];

//Destructuring

const [gold, silver, bronze] = scores;

const raceResults = ['Eliud Kipchoge', 'Feyisa Lelisa', 'Galen Rupp'];

const [goldMetal, silverMetal, bronzeMetal] = raceResults

//Rest operator included

const [fastest, ...everyoneElse] = raceResults;