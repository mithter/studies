function singSong() {
    console.log("Do")
    console.log("Rey")
    console.log("Me")
    console.log("So")
    console.log("La")
}

function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}.`);

}


function repeat(message, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += message;
    }
    console.log(result);
}


function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    let sum = x + y;
    return sum;

}


function lastElement(array) {
    if (array === ([])) {
        return null;
    }
    else {
        return array[array.length - 1];
    }
}