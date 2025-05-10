"use strict";

// Soal 1
{
    console.log("Soal 1");

    let x = 10;
    x = 12;
    console.log(x);
}

// Soal 2
const soal1 = '5' - 2; //3
const soal2 = '5' + 2; //52
const soal3 = true + false; //1
const soal4 = 10 / '2'; //5
const soal5 = '10' == 10; //true

// Soal 3
{
    console.log("Soal 3");

    let x = 20;
    let y = 10;
    let a = 15;
    let b = 25;

    let sum = x + y;
    let difference = x - a;
    let product = a * b;
    let quotient = x / b;

    let isEqual = x == y;
    let isGreater = x > a;
    let isLessOrEqual = b <= y;

    console.log(sum);
    console.log(difference);
    console.log(product);
    console.log(quotient);
    console.log(isEqual);
    console.log(isGreater);
    console.log(isLessOrEqual);
}

// Soal 4
if (true) {
    console.log("Soal 4");
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    let age;
    let isStudent;

    rl.question('Masukkan Umur kamu: ', (umurInput) => {
        age = umurInput;
        rl.question('Masukkan Status Pelajar: ', (statusInput) => {
            if (statusInput === "pelajar" || statusInput === "Pelajar") {
                isStudent = true;
            } else {
                isStudent = false;
            }
            if (age > 18 && !isStudent) {
                console.log("Dewasa");
            } else {
                console.log("Remaja");
            }
            rl.close();
        });
    });
}

// Soal 5
if (true) {
    console.log("Soal 5");
    let userInput
    userInput = null ?? "Guest";
    console.log(userInput)
    userInput = "Admin"
    console.log(userInput)
}