const fs = require('fs');
const INPUTS = fs.readFileSync("day03.txt").toString().replace(/\r/gm, "").split("\n");

// reverse array
var arr = [];
for (const row of INPUTS)
    for (let i = 0; i < row.length; i++) arr[i] += row[i];
// reduce 0 & 1  
arr = arr.map(row => row.split('0').length > row.split('1').length ? '0' : '1');

let gr = parseInt(arr.join(''), 2);
let er = (Math.pow(2, arr.length) - 1) - gr;
console.log('✨ PART I:', +gr * +er);

const length = INPUTS[0].length;
let ox = [...INPUTS];
let co = [...INPUTS];

for (let i = 0; i < length; i++) {
    let zeros = ox.map(n => n.charAt(i)).filter(n => n == "0").length
    let ones = ox.map(n => n.charAt(i)).filter(n => n == "1").length
    let keep = ones >= zeros ? '1' : '0';
    ox = ox.filter(n => n.charAt(i) == keep);
    if (ox.length <= 1) break;
}

for (let i = 0; i < length; i++) {
    let zeros = co.map(n => n.charAt(i)).filter(n => n == "0").length
    let ones = co.map(n => n.charAt(i)).filter(n => n == "1").length
    let keep = ones >= zeros ? '0' : '1';
    co = co.filter(n => n.charAt(i) == keep);
    if (co.length <= 1) break;
}

console.log('✨ PART I:', parseInt(ox, 2) * parseInt(co, 2));