// TODO: Include packages needed for this application

const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the title of your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project',
        validate: description => {
            if (description) {
                return true;
            } else {
                console.log('Please describe your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installInstructions',
        message: 'How is your app installed?',
        validate: installInstructions => {
            if (installInstructions) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: 'How does your app work?',
        validate: usageInfo => {
            if (usageInfo) {
                return true;
            } else {
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
}

// Function call to initialize app
init();
