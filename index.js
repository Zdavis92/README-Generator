// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
const { resolve } = require('path');
const generateMarkdown = require('./Develop/utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
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
                console.log('Please enter insturctions to install you app!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: 'How do you use your app?',
        validate: usageInfo => {
            if (usageInfo) {
                return true;
            } else {
                console.log('Please describe how to use your app!')
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to apply to your app?',
        choices: ['MIT', 'Apache', 'Unlicense', 'GNU GPL v3', 'LGPL v3']
    },
    {
        type: 'confirm',
        name: 'confirmGuidelines',
        message: "Would you like to add contribution guidelines?",
        default: false
    },
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'How can other people contribute?',
        when: ({confirmGuidelines}) => {
            if (confirmGuidelines) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmTest',
        message: 'Would you like to add testing instructions?',
        default: false
    },
    {
        type: 'input',
        name: 'testInstuctions',
        message: 'How do you test your app?',
        when: ({confirmTest}) => {
            if (confirmTest) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'githubName',
        message: 'What is your Github Username?',
        validate: githubName => {
            if (githubName) {
                return true;
            } else {
                console.log('Please enter your Github Username!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What email can you be reached at for questions about your app?',
        validate: email => {
            if (email) {
                return true;
            }else {
                console.log('Please enter your email')
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', data, err => {
            if (err) {
                console.log(err)
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
    });
})};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
     .then(readmeData => {
        writeFile(generateMarkdown(readmeData))
        })
}

// Function call to initialize app
init();
