const fs = require('fs');
const INPUTS = JSON.parse(fs.readFileSync('day13.json'));

const depart = INPUTS[0];
var buses = INPUTS[1].split(',').filter(bus => bus != 'x');

// ✨ PART I
buses = buses.map(bus => {
  var t = depart / bus;
  t = Math.ceil(t);
  t = t * bus;
  t = t - depart
  return [bus, t]
}).sort((x, y) => x[1] - y[1]);

console.log("✨ PART I", buses[0].reduce((x, y) => x * y));

// ✨ PART II
var [first_bus, ...buses] = INPUTS[1].split(',').map((bus, index) => [parseInt(bus), index]).filter(([bus]) => Number.isInteger(bus));
let multiplier = first_bus[0];
let timestamp = 0;
buses.forEach(([bus, bus_index]) => {
  while (true) {
    if ((timestamp + bus_index) % bus == 0) {
      multiplier *= bus;
      break;
    }
    timestamp += multiplier;
  }
});
console.log("✨ PART II", timestamp);
