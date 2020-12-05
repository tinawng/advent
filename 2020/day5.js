const fs = require('fs');
const INPUTS = JSON.parse(fs.readFileSync('day5.json'));

var seats_id = INPUTS.map(row => row.split('').map((x, i) => x == 'B' ? Math.pow(2, 6 - i) * 8 : x == 'R' ? Math.pow(2, 9 - i) : 0).reduce((x, y) => x + y))
console.log("Part I", Math.max.apply(null, seats_id));

var my_seat = seats_id.map((id, i) => !seats_id.includes(i) && seats_id.includes(i-1) && seats_id.includes(i+1) ? i : 0).reduce((x, y) => x + y);
console.log("Part II", my_seat);