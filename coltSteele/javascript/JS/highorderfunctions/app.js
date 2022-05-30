function makeMysterFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log("Congratulations you win!");
            console.log("You're a winner!");
        }
    } else {
        return function () {
            alert("You have been infected with a virus!");
            alert("STOP TRYING TO CLOSE THIS WINDOW");
            alert("STOP TRYING TO CLOSE THIS WINDOW");
            alert("STOP TRYING TO CLOSE THIS WINDOW");
            alert("STOP TRYING TO CLOSE THIS WINDOW");
            alert("STOP TRYING TO CLOSE THIS WINDOW");
            alert("STOP TRYING TO CLOSE THIS WINDOW");
            alert("STOP TRYING TO CLOSE THIS WINDOW");
            alert("STOP TRYING TO CLOSE THIS WINDOW");
        }
    }
}

function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}

// makeBetweenFunc(5, 10) =>


// function isBetween(n) {
//     return n > 50 && n < 100
// }

// function isBetween2(n) {
//     return n > 1 && n < 10
// }

const cat = {
    name: 'Winnie',
    color: 'Multi',
    breed: 'Domestic Shorthair',
    meow() {
        console.log(`${this.name}, the ${this.color} colored ${this.breed} cat says Meoooow`)
    }
}

const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
        this.eggCount++;
        return "Egg";
    }
}