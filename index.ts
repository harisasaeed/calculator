#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
{message: "Enter first Number", type: "number", name: "FirstNumber"},
{message: "Enter second Number", type: "number", name: "secondNumber"},
{
    message: "Select one of the operators to perform action",
    type: "list",
    name: "operators",
    choices: ["addition", "subtraction", "division", "multiplication"]
}
]);
console.log(answer);

//condition statment

if (answer.operators === "addition") {
console.log(answer.FirstNumber + answer.secondNumber);
}else if (answer.operators === "subtraction"){
console.log(answer.FirstNumber - answer.secondNumber);
}else if (answer.operators === "division"){
    console.log(answer.FirstNumber / answer.secondNumber);
    }else if (answer.operators === "multiplication"){
        console.log(answer.FirstNumber * answer.secondNumber);
        }else {
            console.log("please select valid operator")
        }