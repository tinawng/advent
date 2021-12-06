const fs = require('fs');
var INPUTS = fs.readFileSync("day06.txt").toString().replace(/\r/gm, "").split(",");

Array.prototype.swap = function (a, b) {
    var temp = this[a];
    this[a] = this[b];
    this[b] = temp;
};

const days = 256;
let fishs = [0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < fishs.length; i++)
    fishs[i] = INPUTS.filter(n => n == i).length;

for (let d = 0; d < days; d++) {
    let new_fishs = fishs[0];
    fishs.swap(1, 0);
    fishs.swap(2, 1);
    fishs.swap(3, 2);
    fishs.swap(4, 3);
    fishs.swap(5, 4);
    fishs.swap(6, 5);
    fishs.swap(7, 6);
    fishs.swap(8, 7);
    fishs[6] += new_fishs;
    fishs[8] = new_fishs;
}

console.log(`✨ PART II: ${fishs.reduce((p, c) => p + c)}`);