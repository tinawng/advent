const fs = require('fs');
const INPUTS = JSON.parse(fs.readFileSync('day12.json'));

var boat_dir = 'E';
var directions = ['E', 'S', 'W', 'N'];
var boat_coords = { 'N': 0, 'S': 0, 'E': 0, 'W': 0 };

// ✨ PART I
INPUTS.forEach(inst => {
  var action = inst.slice(0, 1)
  var move = parseInt(inst.slice(1))

  switch (action) {
    case 'R':
      var rot = move / 90

      var new_dir = (directions.indexOf(boat_dir) + rot) % directions.length
      boat_dir = directions[new_dir]
      break
    case 'L':
      var rot = -move / 90

      var new_dir = (directions.indexOf(boat_dir) + rot) % directions.length
      if (new_dir < 0) {
        new_dir = directions.length + new_dir
      }
      boat_dir = directions[new_dir]
      break
    case 'F':
      action = boat_dir;
    default:
      boat_coords[action] += move;
  }

});
var manhattan = [boat_coords['E'] - boat_coords['W'], boat_coords['N'] - boat_coords['S']]
console.log("✨ PART I", manhattan.reduce((x, y) => Math.abs(x) + Math.abs(y)));

// ✨ PART II
var boat_coords = { 'N': 0, 'E': 0 };
var waypoint_coords = { 'N': 1, 'E': 10 };

INPUTS.forEach(inst => {
  var action = inst.slice(0, 1)
  var move = parseInt(inst.slice(1))

  var nb_rotation = move / 90 % directions.length

  if (action == 'R' || action == 'L') {
    for (let i = 0; i < nb_rotation; i++) {
      var nord = waypoint_coords['N'];
      waypoint_coords['N'] = -waypoint_coords['E']
      waypoint_coords['E'] = nord;

      waypoint_coords['N'] *= action == 'L' ? -1 : 1;
      waypoint_coords['E'] *= action == 'L' ? -1 : 1;
    }
  }
  else if (action == 'F') {
    boat_coords['N'] += waypoint_coords['N'] * move;
    boat_coords['E'] += waypoint_coords['E'] * move;
  }
  else {
    if (action == 'S')
      waypoint_coords['N'] -= move
    else if (action == 'W')
      waypoint_coords['E'] -= move
    else
      waypoint_coords[action] += move;
  }
});
var manhattan = [boat_coords['E'], boat_coords['N']]
console.log("✨ PART II", manhattan.reduce((x, y) => Math.abs(x) + Math.abs(y)));