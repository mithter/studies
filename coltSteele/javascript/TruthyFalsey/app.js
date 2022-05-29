// const userInput = prompt("Enter something");

// if (userInput) {
//     console.log("TRUTHY!");
// } else {
//     console.log("FALSEY!");
// }

// if (0) {
//     console.log("Truthy");
// } else {
//     console.log("Falsey");
// }

// if (null) {
//     console.log("Truthy");
// } else {
//     console.log("Falsey");
// }

// if (NaN) {
//     console.log("Truthy");
// } else {
//     console.log("Falsey");
// }

// if (undefined) {
//     console.log("Truthy");
// } else {
//     console.log("Falsey");
// }

for (i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i, "Fizz Buzz");
    }
    else if (i % 3 === 0) {
        console.log(i, "Fizz");
    }
    else if (i % 5 === 0) {
        console.log(i, "Buzz");
    }
    else {
        console.log(i);
    }
}