const fs = require('fs');
const INPUTS = JSON.parse(fs.readFileSync('day16.json'));

var my_ticket = INPUTS[1];
var ticket_ranges = {}

// ✨ PART I
INPUTS[0].forEach(ranges => {
    var name = ranges.split(':')[0]
    var values = []
    ranges.split(':')[1].split('or').forEach(range => {
        const min = parseInt(range.split('-')[0])
        const max = parseInt(range.split('-')[1])
        for (let i = min; i <= max; i++) {
            values.push(parseInt(i))
        }
    })
    ticket_ranges[name] = values
});

var sum = 0
INPUTS[2].forEach(ticket => {
    ticket.some((val, i) => {
        var is_include = false;
        for (const [name, values] of Object.entries(ticket_ranges)) {
            is_include = values.includes(val) ? true : is_include;
        }
        if (!is_include) sum += val;
        return !is_include
    });
})
console.log("✨ PART I", sum);

// ✨ PART II
var all_ranges = []
for (const [name, values] of Object.entries(ticket_ranges)) {
    all_ranges.push(values)
}
all_ranges = all_ranges.flat();

var valid_tickets = INPUTS[2].filter(ticket => ticket.every(val => all_ranges.includes(val)))

var possibilities = {}
var places = []
for (let i = 0; i < Object.keys(ticket_ranges).length; i++) {
    places.push(i)
}

valid_tickets.forEach(ticket => {
    ticket.forEach((value, index) => {
        var i = 0;
        for (const [name, values] of Object.entries(ticket_ranges)) {
            if (!possibilities[name]) possibilities[name] = places
            if (values.includes(value))
                i++;
            else
                possibilities[name] = possibilities[name].filter(val => index != val)
        }
    })
})

var prod = 1;
var del_val = undefined;
while (Object.keys(possibilities).length > 0) {
    for (const [name, values] of Object.entries(possibilities)) {
        if (values.length == 1) {
            let value = values[0]
            if (name.includes('departure'))
                prod *= my_ticket[value];
            del_val = value;
            delete possibilities[name]
        }
    }

    for (const [name, values] of Object.entries(possibilities)) {
        possibilities[name] = possibilities[name].filter(val => val != del_val)
    }
}
console.log("✨ PART II", prod);