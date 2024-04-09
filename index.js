const fs = require('fs');

function extractNumbers(info) {
    const content = fs.readFileSync(info, 'utf8');
    const lines = content.trim().split('\n');
    const numbers = [];

    for (const line of lines) {
        const [num, _] = line.split(' ');
        numbers.push(parseInt(num));
    }

    return numbers;
}

function rearrangeIntoStaircase(arr) {
    arr.sort((a, b) => a - b);
    let staircase = [];
    let index = 0;
    while (index < arr.length) {
        let step = [];
        for (let i = 0; i < staircase.length + 1; i++) {

            if (index >= arr.length) {
                break;
            }
            step.push(arr[index]);
            index++;
        }
        staircase.push(step);
    }
    return staircase;
}

const input = extractNumbers('encoded_message.txt');
const result = rearrangeIntoStaircase(input);

function returnLast(arr) {
    const novoArry = [];

    for (let i = 0; i < arr.length; i++) {
        novoArry.push(arr[i][arr[i].length - 1]);
    }
    return novoArry;
}
const somenteIndicesDasMensagens = returnLast(result);

function decode(message_file, enconding) {
    const encod = enconding;
    const content = fs.readFileSync(message_file, 'utf8');
    const lines = content.trim().split('\n');
    const words = [];

    for (let i = 0; i < encod.length; i++) {
        for (let j = 0; j < lines.length; j++) {

            if (encod[i].toString() === lines[j][0].toString()) {
                const [num, word] = lines[j].split(' ');
                words.push(word);
            }

        }
    }
    const decoded_message = words.join('');
    return decoded_message;
}

const decoded_message = decode('encoded_message.txt', somenteIndicesDasMensagens);

function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, 'utf8');
}

writeToFile('decoded.txt', decoded_message);