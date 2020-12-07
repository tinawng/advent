const fs = require('fs');
const INPUTS = JSON.parse(fs.readFileSync('day7.json'));

// PART I
var bags = ["shiny gold"];
for (let i = 0; i < bags.length; i++) {
    INPUTS.forEach(row => {
        var [bag, capacity] = row.split(' bags contain ');
        if (bags.some(b => capacity.includes(b)))
            bags.push(bag);

    });
    bags = bags.filter((item, pos) => bags.indexOf(item) == pos);
}
bags = bags.filter((item) => item != "shiny gold");
console.log("PART I", bags.length);

// PART II
var bags = ["shiny gold"];
var bags_count = 0;

for (let i = 0; i < bags.length; i++) {
    INPUTS.forEach(row => {
        var [bag, capacity] = row.split(' bags contain ');
        capacity = capacity.replace('.', '');

        if (bags[i] == bag)
            capacity.split(', ').forEach(content => {
                var nb_of_bags = content.split(' ')[0];
                var has_bag = content.split(nb_of_bags)[1].slice(1).replace(' bags', '').replace(' bag', '');
                for (let i = 0; i < nb_of_bags; i++) {
                    bags_count++;
                    bags.push(has_bag);
                }
            })
    })
    bags.shift();
    i--;
}
console.log("PART II", bags_count);