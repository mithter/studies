// try {
//     hello.toUpperCase();
// }
// catch {
//     console.log("Error!");
// }


function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    }
    catch (e) {
        console.log(e);
        console.log("Wrong Shit buddy!")
    }
}

const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)

const add = (a, b) => a + b



