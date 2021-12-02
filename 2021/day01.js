const fs = require('fs');
const INPUTS = fs.readFileSync("day01.txt").toString().split("\n").map(i => +i);

console.log('✨ PART I:', INPUTS.filter((_, i, arr) => arr[i] < arr[i + 1]).length);
console.log('✨ PART II:', INPUTS.filter((_, i, arr) => arr[i] < arr[i + 3]).length);