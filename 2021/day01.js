const fs = require('fs');
const INPUTS = JSON.parse(fs.readFileSync('day01.json'));

function countGreater(list) {
    let count = 0;
    for (let i = 1; i < list.length; i++) {
        let nm = list[i - 1];
        let n = list[i];
        if (n > nm) count++;
    }
    return count;
}

console.log('✨ PART I:', countGreater(INPUTS));

var grouped_inputs = [];
var c = 0;
for (let i = 2; i < INPUTS.length; i++) {
    grouped_inputs.push(INPUTS[i - 2] + INPUTS[i - 1] + INPUTS[i]);
}

console.log('✨ PART II:', countGreater(grouped_inputs));



