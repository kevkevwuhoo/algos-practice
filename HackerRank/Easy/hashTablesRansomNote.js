/****
 * Harold is a kidnapper who wrote a ransom note, but now he is worried it will be traced back to him through his handwriting. He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note. The words in his note are case-sensitive and he must use only whole words available in the magazine. He cannot use substrings or concatenation to create the words he needs.

Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.
 */

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'checkMagazine' function below.
 *
 * The function accepts following parameters:
 *  1. STRING_ARRAY magazine
 *  2. STRING_ARRAY note
 */

function checkMagazine(magazine, note) {
    // if magazine is empty, return no
    if(!magazine) {
        console.log("No");
        return;
    }
    // object to hold words in magazine
    const words = {};
    magazine.forEach((magWord) => {
        if(!words[magWord]) {
            words[magWord] = 1;
        } else {
            words[magWord] += 1;
        }
    });
    // check if each word is in magazine or not and print yes or no
    for (let i = 0; i < note.length; i++) {
        let noteWord = note[i];
        if(!words[noteWord]) {
            console.log("No");
            return;
        } else if(words[noteWord]) {
            if(words[noteWord] === 0) {
                console.log("No");
                return;
            } else {
                words[noteWord]--;
            }
        }
    }
    console.log("Yes");
}

function main() {
    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const m = parseInt(firstMultipleInput[0], 10);

    const n = parseInt(firstMultipleInput[1], 10);

    const magazine = readLine().replace(/\s+$/g, '').split(' ');

    const note = readLine().replace(/\s+$/g, '').split(' ');

    checkMagazine(magazine, note);
}
