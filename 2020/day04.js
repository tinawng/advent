const fs = require('fs');
const INPUTS = JSON.parse(fs.readFileSync('day04.json'));

const fields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
const eye_colors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];

const isNumber = (n) => !isNaN(parseFloat(n));
const reducer = (accumulator, currentValue) => accumulator + currentValue;

var valid = 0;
valid = INPUTS.filter((passport) => fields.every((currentValue) => passport.reduce(reducer).includes(currentValue))).length;
console.log("✨ PART I", valid);

valid = 0
INPUTS.forEach(passport => {
    var is_valid = fields.every((currentValue) => passport.reduce(reducer).includes(currentValue))

    passport.forEach(field => {
        var value = field.slice(4);
        if (field.includes('byr')) {
            value = parseInt(value);
            is_valid = (value >= 1920 && value <= 2002) ? is_valid : false;
        }
        if (field.includes('iyr')) {
            value = parseInt(value);
            is_valid = (value >= 2010 && value <= 2020) ? is_valid : false;
        }
        if (field.includes('eyr')) {
            value = parseInt(value);
            is_valid = (value >= 2020 && value <= 2030) ? is_valid : false;
        }
        if (field.includes('hgt')) {
            if (field.includes('cm')) {
                value = parseInt(value.slice(0, -2));
                is_valid = (value >= 150 && value <= 193) ? is_valid : false;
            }
            else if (field.includes('in')) {
                value = parseInt(value.slice(0, -2));
                is_valid = (value >= 59 && value <= 76) ? is_valid : false;
            }
            else
                is_valid = false;
        }
        if (field.includes('hcl'))
            is_valid = (value.length == 7 && value.startsWith('#')) ? is_valid : false;

        if (field.includes('ecl'))
            is_valid = eye_colors.includes(value) ? is_valid : false;

        if (field.includes('pid'))
            is_valid = value.length == 9 && isNumber(value) ? is_valid : false;

    });

    valid = is_valid ? ++valid : valid
});
console.log("✨ PART II", valid);