function capitalize(string) {
    let newString = (string[0].toUpperCase() + string.slice(1))
    return newString;
}

function sumArray(arg) {
    let sum = 0;
    for (let number of arg) {
        sum += number;
    }
    return sum;
}

function returnDay(day) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (day >= 1 && day <= 7)
        return days[day - 1];
    else {
        return null;
    }
}