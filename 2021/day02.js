const fs = require('fs');
const INPUTS = fs.readFileSync("day02.txt").toString().split("\n");

let hz = 0, vr = 0;
let mapping = {
    down: (amt) => vr += amt,
    up: (amt) => vr -= amt,
    forward: (amt) => hz += amt
};
INPUTS.map(cmd => cmd.split(' ')).forEach(cmd => mapping[cmd[0]](+cmd[1]))
console.log('✨ PART I:', hz * vr);

hz = 0, vr = 0, aim = 0;
mapping = {
    down: (amt) => aim += amt,
    up: (amt) => aim -= amt,
    forward: (amt) => { hz += amt; vr += aim * amt }
};
INPUTS.map(cmd => cmd.split(' ')).forEach(cmd => mapping[cmd[0]](+cmd[1]))
console.log('✨ PART II:', hz * vr);