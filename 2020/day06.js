const fs = require('fs');
const INPUTS = JSON.parse(fs.readFileSync('day06.json'));

// ✨ PART I
var filtered = INPUTS.map(group => {
  group = group.reduce((x, y) => x + y);
  return group.split('').filter((item, pos) => group.indexOf(item) == pos).length;
}).reduce((x, y) => x + y);
console.log("✨ PART I", filtered);

// ✨ PART II
var intersected = INPUTS.map(group => group.reduce((x, y) => intersect(x, y)).length).reduce((x, y) => x + y)
console.log("✨ PART II", intersected);

// 💫 Functions
function intersect(a, b) {
  a = typeof a != "object" ? a.split('') : a
  return a.filter(Set.prototype.has, new Set(b));
}