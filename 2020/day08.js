const fs = require('fs');
const INPUTS = JSON.parse(fs.readFileSync('day08.json'));

console.log("✨ Part I");
exec_inst([...INPUTS], true)

console.log("✨ Part II");
for (let i = 0; i < INPUTS.length; i++) {
    const instruction = INPUTS[i];
    const new_list = [...INPUTS];

    if (instruction.includes("nop")) {
        new_list[i] = instruction.replace("nop", "jmp");
        exec_inst(new_list);
    }
    if (instruction.includes("jmp")) {
        new_list[i] = instruction.replace("jmp", "nop");
        exec_inst(new_list);
    }
}

// 💫 Functions
function exec_inst(list, ignore_fail = false) {
    var fail = false, acc = 0;

    for (let i = 0; i < list.length; i++) {
        const [instruction, number] = list[i].split(' ');
        list[i] = "done 0"

        if (instruction == 'acc')
            acc += parseInt(number);
        if (instruction == 'jmp')
            i += parseInt(number) - 1;
        if (instruction == 'done') {
            fail = true;
            break;
        }
    }
    if (!fail || ignore_fail)
        console.log(acc);
}