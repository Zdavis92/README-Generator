// requires for app to work
const fs = require('fs');
const inquirer = require("inquirer");
const { resolve } = require('path');
const generateMarkdown = require('./Develop/utils/generateMarkdown');
// arrary of questions to be asked
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
        type: 'input',
        name: 'contributionGuidelines',
        message: 'How can other people contribute?',
        validate: contributionGuidelines => {
            if (contributionGuidelines) {
                return true;
            } else {
                console.log('Please add guidelines for contribution!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'testInstuctions',
        message: 'How do you test your app?',
        validate: testInstuctions => {
            if (testInstuctions) {
                return true;
            } else {
                console.log('Please add instructions for testing!')
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

// function to create the readme file with the user data
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

// function to initialize the app
function init() {
    inquirer.prompt(questions)
     .then(readmeData => {
        writeFile(generateMarkdown(readmeData))
        })
}

init();
