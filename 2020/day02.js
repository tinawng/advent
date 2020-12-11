const fs = require('fs');
const INPUTS = JSON.parse(fs.readFileSync('day02.json'));

var right = 0;
INPUTS.forEach(row => {
    let rules = row.split(' ')[0].split('-');
    let letter = row.split(' ')[1][0];
    let password = row.split(' ')[2];

    const count = password.split(letter).length-1;
    if (count >= parseInt(rules[0]) && count <= parseInt(rules[1]))
        right++;

});
console.log('✨ PART I:', right);

var right = 0;
INPUTS.forEach(row => {
    let rules = row.split(' ')[0].split('-');
    let letter = row.split(' ')[1][0];
    let password = row.split(' ')[2];

    if (password[parseInt(rules[0])-1] == letter ^ password[parseInt(rules[1])-1] == letter)
        right++;

});
console.log('✨ PART II:', right);