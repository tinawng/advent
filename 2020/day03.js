const fs = require('fs');
const INPUTS = JSON.parse(fs.readFileSync('day03.json'));

function slide(right, down) {
    var pos = [0, 0]
    var trees = 0;
    while (pos[1] < INPUTS.length - 1) {
        pos[0] += right
        pos[1] += down
        trees = checkTree(pos) ? ++trees : trees;
    }
    return trees
}

function checkTree(pos) {
    let x = pos[0] > 30 ? pos[0] % 31 : pos[0];
    let y = pos[1];
    return INPUTS[y][x] == '#';
}

console.log('✨ PART I:', slide(3, 1));
console.log('✨ PART II:', [slide(1, 1), slide(3, 1), slide(5, 1), slide(7, 1), slide(1, 2)].reduce((x, y) => x * y));