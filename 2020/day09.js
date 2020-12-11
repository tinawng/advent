const fs = require('fs');
const INPUTS = JSON.parse(fs.readFileSync('day09.json'));

var invalid_num = undefined;
for (let i = 25; i < INPUTS.length; i++) {
    const check_num = INPUTS[i];

    const arr = INPUTS.slice(i-25, i);
    const valid = arr.some(num => {
        var diff = Math.abs(check_num - num);
        return arr.includes(diff) && diff != num;
    })

    if (!valid) invalid_num = check_num;
}
console.log("✨ PART I", invalid_num);


const invalid_index = INPUTS.indexOf(invalid_num);
const range = INPUTS.slice(0, invalid_index);
for (let i = 0; i < range.length; i++) {
    const numbers = [];

    for (let j = i; j < range.length; j++) {
        numbers.push(range[j]);
        const sum = numbers.reduce((x, y) => x + y);
        if (sum >= invalid_num) {
            if (sum == invalid_num) console.log("✨ PART II", Math.max(...numbers) + Math.min(...numbers));
            break;
        }
    }
}