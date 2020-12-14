const fs = require('fs');
const INPUTS = JSON.parse(fs.readFileSync('day14.json'));

// ✨ PART I
var mask = "";
var memory = [];
INPUTS.forEach(row => {
    const [inst, value] = row.split('=');
    if (inst == "mask")
        mask = value;
    else {
        var binary = padWithZeroes((value >>> 0).toString(2), 36)
        var masked_binary = mask.split('').map((n, i) => n == 'X' ? binary.charAt(i) : n).reduce((x, y) => x + y)
        var decimal = parseInt(masked_binary, 2);
        var address = inst.split('[')[1].replace(']', '');
        memory[address] = decimal;
    }
});
console.log("✨ PART I", memory.reduce((x, y) => x + y));

// ✨ PART II
var mask = "";
var memory = {};
var addresses = [];
INPUTS.forEach(row => {
    const [inst, value] = row.split('=');

    if (inst == "mask")
        mask = value;
    else {
        var address = inst.split('[')[1].replace(']', '');
        var binary = padWithZeroes((address >>> 0).toString(2), 36);
        var masked_binary = mask.split('').map((n, i) => n == '0' ? binary.charAt(i) : n).reduce((x, y) => x + y)

        addresses = []
        replaceX(masked_binary)

        addresses.forEach(addr => {
            memory[parseInt(addr, 2)] = parseInt(value);
        });

    }
});
console.log("✨ PART II", Object.entries(memory).map(([key, value]) => value).reduce((x, y) => x + y));

// 💫 Functions
function padWithZeroes(number, length) {
    var str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
}

function replaceX(str) {
    var str1 = str.replace('X', '0')
    if (str1.includes('X')) {
        var [str1a, str1b] = replaceX(str1)
        if (!str1a.includes('X'))
            addresses.push(str1a, str1b)
    }
    var str2 = str.replace('X', '1')
    if (str2.includes('X')) {
        var [str2a, str2b] = replaceX(str2)
        if (!str1a.includes('X'))
            addresses.push(str2a, str2b)
    }
    return [str1, str2]
}
