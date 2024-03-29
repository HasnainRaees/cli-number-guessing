#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const randomNumber: number = Math.floor(Math.random() * 10 + 1);

const answer = await inquirer.prompt([
  {
    name: "userNumber",
    type: "number",
    message: "Enter your guess number between 1-10:",
  },
]);

if (answer.userNumber === randomNumber) {
  console.log(chalk.blue("Congratulation ! you guess a right number"));
} else {
  console.log(chalk.red("Try again. Better luck next time"));
}
