// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt([
        {
          type: 'input',
          name: 'title',
          message: 'What is the title of your project?',
          validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('Please enter a title');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'description',
          message: 'Enter a project description',
          validate: githubInput => {
            if (githubInput) {
              return true;
            } else {
              console.log('Please enter a description');
              return false;
            }
          }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a project description',
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log('Please enter a description');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'installation',
            message: 'Enter installation instructions',
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log('Please enter installation instructions');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information',
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log('Please enter usage information');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'contributions',
            message: 'Enter contribution guidelines',
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log('Please enter contribution guidelines');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'testing',
            message: 'Enter test instructions',
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log('Please enter test instructions');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'description',
            message: 'Enter a project description',
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log('Please enter a description');
                return false;
              }
            }
          },
          {
            type: 'list',
            name: 'license',
            message: 'Which license does this application have?',
            choices: ['MIT', 'GNU GPLv3', 'GNU AGPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', 'The Unlicense']
          },
      ]);
}

// Function call to initialize app
init();
