// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create a function to write README file
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./README.md', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};

// TODO: Create a function to initialize app
function init() {
  return inquirer
    .prompt([
      {
        name: "title",
        message: "What is the title of your project?",
        validate: (titleInput) => {
          if (titleInput) {
            return true;
          } else {
            console.log("Please enter a title");
            return false;
          }
        },
      },
      {
        name: "description",
        message: "Enter a project description",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter a description");
            return false;
          }
        },
      },
      {
        name: "installation",
        message: "Enter installation instructions",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter installation instructions");
            return false;
          }
        },
      },
      {
        name: "usage",
        message: "Enter usage information",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter usage information");
            return false;
          }
        },
      },
      {
        name: "credits",
        message: "Enter any credits",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter credits");
            return false;
          }
        },
      },
      {
        type: "list",
        name: "license",
        message: "Which license does this application have?",
        choices: [
          "MIT",
          "GNU GPLv3",
          "GNU AGPLv3",
          "GNU LGPLv3",
          "Mozilla Public License 2.0",
          "Apache License 2.0",
          "Boost Software License 1.0",
          "The Unlicense",
        ],
      },
      {
        name: "testing",
        message: "Enter test instructions",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter test instructions");
            return false;
          }
        },
      },
    ])
    .then((data) => {
      return data;
    });
}

// Function call to initialize app
init()
  .then(data => {
      return generateMarkdown(data);
  })
  .then(data => {
      writeFile(data);
  })
  .catch((err) => {
    console.log(err);
  });