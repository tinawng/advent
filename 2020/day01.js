const fs = require('fs');
const INPUTS = JSON.parse(fs.readFileSync('day01.json'));

// ✨ PART I
INPUTS.forEach(i => {
    INPUTS.forEach(j => {
        let y = i + j;
        if (y == 2020) {
            let res = i * j
            console.log('✨ PART I:', res);
        }
    });
});

// ✨ PART II
INPUTS.forEach(i => {
    INPUTS.forEach(j => {
        INPUTS.forEach(k => {
            let y = i + j + k;
            if (y == 2020) {
                let res = i * j * k
                console.log('✨ PART II:', res);
            }
        });
    });
});