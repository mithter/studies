// const password = prompt("Enter your password: ");

// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log("Valid Passowrd");
// }
// else {
//     console.log("Invalid format...")
// }

// const age = -3;
// if ((age < 5 && age > 0) || age >= 65) {
//     console.log("Admission is free");
// } else if (age >= 5 && age < 10) {
//     console.log("Admission is $10");
// } else if (age >= 10 && age < 65) {
//     console.log("Admission is $20");
// } else {
//     console.log("Invalid age.")
// }

// const firstName = prompt("enter your first name");
// while (true) {
//     if (firstName) {
//         console.log("Great job!")
//         break;
//     }
//     else {
//         firstName = prompt("Try again!!");
//     }
// }

// const age = 8;
// if (!(age < 5 && age >= 0 || age >= 65)) {
//     console.log("You are not a baby or a senior!");
// }

const day = 7;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6: case 7:
        console.log("Weekend");
        break;
    default:
        console.log("Not correct!")
        break;
}