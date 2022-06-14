
function writeCards(name, event) {
    const newarray = [];
    for (let n = 0; n < name.length; n++) {
        newarray.push(`Thank you, ${name[n]}, for the wonderful ${event} gift!`); }
    return newarray;
}

function countDown(n) {
    while (n >= 0) {
        console.log(n)
        n--
    }
}