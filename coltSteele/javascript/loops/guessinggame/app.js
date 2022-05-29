// let input = prompt("Guess a number between 1 and 100!")
// const magicNumber = 36;
// while (input != magicNumber) {
//     if (input < 10)
//         input = prompt("Way Higher")
//     if (input >= 10 && input < 20)
//         input = prompt("Higher")

//     if (input >= 20 && input < 36)
//         input = prompt("A little hig..you're close")

//     if (input <= 100 & input >= 70)
//         input = prompt("Way less...")

//     if (input < 70 && input > 36)
//         input = prompt("Lower than that...")

//     if (input > 100)
//         input = prompt("Out of range...")


// }

// alert("WINNER");


// let input = parseInt(prompt("Enter a maximum number!"));
// while (!input) {
//     input = parseInt(prompt("Enter a valid number!"));
// }

// const randomMagicNumber = Math.floor(Math.random() * input) + 1;
// let guess = parseInt(prompt("Enter your first guess:"));
// let guesses = 1;


// while (parseInt(input) !== randomMagicNumber) {
//     if (input === 'q') {
//         break;
//     }
//     guesses++;
//     if (input > randomMagicNumber) {
//         input = prompt("Too High")
//     }
//     else {
//         input = prompt("Too Low")
//     }

// }

// if (input === 'q') {
//     alert("You quitter...")
// }

// else {
//     alert("You win! " + `You guessed ${guesses} times...`)
// }







// let maximumNumber = parseInt(prompt("Enter a maximum number"));
// while (!maximumNumber) {
//     maximumNumber = parseInt(prompt("Enter a valid number!"));
// }

// const randomNumber = Math.floor(Math.random() * maximumNumber) + 1;

// let input = parseInt(prompt("Enter a guess:"));
// let guess = 1;

// while (parseInt(input) !== randomNumber) {
//     if (input === 'q') break;
//     guess++;
//     if (input > randomNumber) {
//         input = prompt("too high");
//     } else {
//         input = prompt("too low");
//     }
// }

// if (input === 'q') {
//     alert("You're a loser!");
// }
// else {
//     alert(`You win! Your guesses ${guess} times...`);
// }






// let maximum = parseInt(prompt("Enter the maximum number!"));
// while (!maximum) {
//     maximum = parseInt(prompt("Enter a valid number!"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum);

// let guess = parseInt(prompt("Enter your first guess!"));

// while (guess !== targetNum) {
//     if (guess > targetNum) {
//         guess = parseInt(prompt("Too high! Enter a new guess:"));
//     } else {
//         guess = parseInt(prompt("Too low! Enter a new guess:"));
//     }
// }

// console.log("YOU GOT IT!");


let maximum = parseInt(prompt("Please enter a maximum number:"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number"));
}

const targetNumber = Math.floor(Math.random() * maximum) + 1;
alert(targetNumber);
let guess = parseInt(prompt("Enter your guess"));
let attempts = 1;

while (parseInt(guess) !== targetNumber) {
    if (guess === 'q') break;
    attempts += 1;
    if (guess < targetNumber) {
        guess = prompt("Too low. Guess again.")
    } else {
        guess = prompt("Too high. Guess again.")
    }

}
if (guess === 'q') {
    alert('You lose!')
} else {
    alert(`Congrats! You guess right after ${attempts} attempts`);
}
