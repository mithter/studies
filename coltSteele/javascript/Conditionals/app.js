// let random = Math.random();
// if (random < 0.5) {
//     console.log("Your number is less than 0.5");
//     console.log(random);
// }
// else {
//     console.log("Your number is more (or equal) than 0.5");
//     console.log(random);
// }


// const dayOfWeek = prompt('Enter a day').toLowerCase();

// if (dayOfWeek === 'monday') {
//     console.log("Ughhh I hate Mondays");
// } else if (dayOfWeek === 'saturday') {
//     console.log("Yay I love Saturdays!");
// } else if (dayOfWeek === 'friday') {
//     console.log("Fridays are decent, especially after work");
// } else {
//     console.log("Meh");
// }



// const age = 89;

// if (age < 5) {
//     console.log("Youngins get in free!");
// } else if (age < 10) {
//     console.log("Children price of $10")
// } else if (age < 65) {
//     console.log("Adult price of $20")
// } else {
//     console.log("Senior price of $12")
// }

const password = prompt("please enter a new password");

if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log('Correct password!');
    } else {
        console.log("No spaces allowed!");
    }
}

else {
    console.log("Password is too short! Must be 6 or more characters.");
}

