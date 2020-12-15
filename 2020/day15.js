const fs = require('fs');
const INPUTS = JSON.parse(fs.readFileSync('day15.json'));
var tab = {};
var turn = INPUTS.length + 1;
var num = INPUTS[INPUTS.length - 1];

INPUTS.forEach((num, i) => {
    tab[num] = [i + 1]
});

while (true) {
    if (tab[num].length < 2) {
        num = 0;

        if (!tab[num]) tab[num] = []
        tab[num].push(turn);
    }
    else {
        let length = tab[num].length
        num = tab[num][length - 1] - tab[num][length - 2];

        if (!tab[num]) tab[num] = []
        tab[num].push(turn);
    }

    if (turn == 2020)
        console.log("✨ PART I", num);
    if (turn == 30000000) {
        console.log("✨ PART II", num);
        break
    }

    turn++;
}