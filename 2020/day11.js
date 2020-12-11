const fs = require('fs');
const INPUTS = JSON.parse(fs.readFileSync('day11.json'));

String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

var len_x = 90, len_y = 97;
var room = [...INPUTS];
var occupied_seats = undefined

while (true) {
    let new_room = [...room];
    for (let y = 0; y < len_y; y++) {
        for (let x = 0; x < len_x; x++) {
            var seat = getSeatState(room, x, y);
            if (seat == 'L' && occupiedSeatsAround(room, x, y) == 0)
                new_room[y] = new_room[y].replaceAt(x, '#');
            if (seat == '#' && occupiedSeatsAround(room, x, y) >= 4)
                new_room[y] = new_room[y].replaceAt(x, 'L');
        }
    }

    if (occupied_seats == occupiedSeats(new_room))
        break;
    occupied_seats = occupiedSeats(new_room)
    room = [...new_room];
}
console.log("PART I", occupied_seats);


var room = [...INPUTS];

while (true) {
    let new_room = [...room];
    for (let y = 0; y < len_y; y++) {
        for (let x = 0; x < len_x; x++) {
            var seat = getSeatState(room, x, y);
            if (seat == 'L' && inSightSeats(room, x, y) == 0)
                new_room[y] = new_room[y].replaceAt(x, '#');
            if (seat == '#' && inSightSeats(room, x, y) >= 5)
                new_room[y] = new_room[y].replaceAt(x, 'L');
        }
    }

    if (occupied_seats == occupiedSeats(new_room))
        break;
    occupied_seats = occupiedSeats(new_room)
    room = [...new_room];
}
console.log("PART II", occupied_seats);


function occupiedSeatsAround(room, x, y) {
    var occ_seats = 0;
    for (let ix = x - 1; ix <= x + 1; ix++)
        for (let iy = y - 1; iy <= y + 1; iy++)
            if (!(ix == x && iy == y)) // around only
                occ_seats = getSeatState(room, ix, iy) == '#' ? ++occ_seats : occ_seats;

    return occ_seats;
}

function inSightSeats(room, x, y) {
    var occ_seats = 0

    // up
    for (let iy = y - 1; iy >= 0; iy--) {
        const seat_state = getSeatState(room, x, iy)
        if (seat_state != '.') {
            occ_seats = seat_state == '#' ? ++occ_seats : occ_seats;
            break
        }
    }
    // down
    for (let iy = y + 1; iy < len_y; iy++) {
        const seat_state = getSeatState(room, x, iy)
        if (seat_state != '.') {
            occ_seats = seat_state == '#' ? ++occ_seats : occ_seats;
            break
        }
    }
    // left
    for (let ix = x - 1; ix >= 0; ix--) {
        const seat_state = getSeatState(room, ix, y);
        if (seat_state != '.') {
            occ_seats = seat_state == '#' ? ++occ_seats : occ_seats;
            break
        }
    }
    // right
    for (let ix = x + 1; ix < len_x; ix++) {
        const seat_state = getSeatState(room, ix, y);
        if (seat_state != '.') {
            occ_seats = seat_state == '#' ? ++occ_seats : occ_seats;
            break
        }
    }

    // down-right
    for (let i = 1; i < len_x; i++) {
        const seat_state = getSeatState(room, x + i, y + i);
        if (seat_state != '.') {
            occ_seats = seat_state == '#' ? ++occ_seats : occ_seats;
            break
        }
    }
    // up-right
    for (let i = 1; i < len_x; i++) {
        const seat_state = getSeatState(room, x + i, y - i);
        if (seat_state != '.') {
            occ_seats = seat_state == '#' ? ++occ_seats : occ_seats;
            break
        }
    }
    // down-left
    for (let i = 1; i < len_x; i++) {
        const seat_state = getSeatState(room, x - i, y + i);
        if (seat_state != '.') {
            occ_seats = seat_state == '#' ? ++occ_seats : occ_seats;
            break
        }
    }
    // up-left
    for (let i = 1; i < len_x; i++) {
        const seat_state = getSeatState(room, x - i, y - i);
        if (seat_state != '.') {
            occ_seats = seat_state == '#' ? ++occ_seats : occ_seats;
            break
        }
    }

    return occ_seats;
}

function getSeatState(room, x, y) {
    return (x < 0 || x >= len_x || y < 0 || y >= len_y) ? '.' : room[y][x];
}

function occupiedSeats(room) {
    return room.reduce((acc, val) => acc.concat(val)).split('').map(seat => seat == '#' ? 1 : 0).reduce((x, y) => x + y);
}