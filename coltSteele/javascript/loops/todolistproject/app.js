let input = prompt("Please enter a command:");

let listArray = [];

while (input !== "quit") {
    if (input === "new") {
        input = prompt("What would you like to add");
        listArray.push(input);
        console.log(`${input} added to list`);
    }
    else if (input === "list") {
        console.log("***************");
        for (item of listArray) {
            console.log(`${listArray.indexOf(item)}: ${item} `);
        }
        console.log("***************");
    }
    else if (input === "delete") {
        input = parseInt(prompt("Which element would you like to remove(element count starts at 0)?"));
        console.log("***************");
        for (item of listArray) {
            console.log(`${listArray.indexOf(item)}: ${item} `);
        }
        console.log("***************");
        if (parseInt(input) >= 0 || parseInt(input) <= listArray.length) {
            console.log(`${listArray[input]} was removed from array`);
            let removed = listArray.splice(input, 1);
        }
        else {
            console.log("Unknown Index")
        }
    }
    else {
        input = prompt("Please enter the right command:");
    }
    input = prompt("Please enter a command:");
}