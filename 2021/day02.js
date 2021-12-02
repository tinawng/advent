const fs = require('fs');
const INPUTS = fs.readFileSync("day02.txt").toString().split("\n");

var hz = 0, vr = 0;
for (const command of INPUTS) {
    let [dir, amt] = command.split(' ')
    if ('forward' == dir) {
        hz += parseInt(amt);
    }
    else if ('up' == dir) {
        vr -= parseInt(amt);
    }
    else if ('down' == dir) {
        vr += parseInt(amt);
    }
}

console.log('✨ PART I:', hz*vr);

var hz = 0, vr = 0, aim = 0;
for (const command of INPUTS) {
    let [dir, amt] = command.split(' ')
    if ('forward' == dir) {
        hz += parseInt(amt);
        vr+= aim*parseInt(amt);
    }
    else if ('up' == dir) {
        aim -= parseInt(amt);
    }
    else if ('down' == dir) {
        aim += parseInt(amt);
    }
}

console.log('✨ PART II:', hz*vr);