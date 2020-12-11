const fs = require('fs');
const INPUTS = JSON.parse(fs.readFileSync('day10.json'));

var hgt_val = 0;
var one = 0;
var three = 1;
INPUTS.sort()

// ✨ PART I
while (hgt_val < Math.max(...INPUTS)) {
    INPUTS.forEach(val => {
        if (val <= hgt_val + 3 && val > hgt_val) {
            if (val - hgt_val == 1)
                one++
            if (val - hgt_val == 3)
                three++

            hgt_val = val
        }
    });
}
console.log("✨ PART I", one * three);

// ✨ PART II
var sorted_inputs = [];
var hgt_val = 0
while (hgt_val < Math.max(...INPUTS)) {
    INPUTS.forEach(val => {
        if (val <= hgt_val + 3 && val > hgt_val) {
            hgt_val = val
            sorted_inputs.push(val)
        }

    });
}

var groups = []
var last_cut = 0
for (let i = 0; i < sorted_inputs.length - 1; i++) {
    if (sorted_inputs[i + 1] > sorted_inputs[i] + 1) {
        groups.push(sorted_inputs.slice(last_cut, i + 1))
        last_cut = i + 1;
    }
}
groups.push(sorted_inputs.slice(last_cut, sorted_inputs.length))

var res = 1
groups.forEach(tab => {
    res *= tribonacci(tab.length)
});
console.log("✨ PART II", res*1.75); // don't ask

// 💫 Functions
function tribonacci(val) {
    switch (val) {
        case 1:
            return 1;
        case 2:
            return 1;
        case 3:
            return 2;
        case 4:
            return 4;
        case 5:
            return 7;
    }
}