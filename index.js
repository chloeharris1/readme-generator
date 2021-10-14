// Including `inquirer` package needed for this application
const inquirer = require("inquirer");
// Importing the `fs` module to enable interaction with the file system 
const fs = require('fs');
// Generate markdown file
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user input: GH Username, Email, Project Description, License, Installation, Test Instructions, Usage, Contributing 
const promptUser = () => {
return inquirer.prompt([
      {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your E-mail address',
      },
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm i',
      },
      {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
        default: 'npm test',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
      },
    ]);
};
//     .then((response) => {
//       // markdown.writeFile(response)
//       fs.writeFile(response)
//       if (err) console.error(err);
//     }
//   }; 
// promptUser();


const init = () => {
    promptUser()
    .then((response) => fs.writeFileSync('README.md', generateMarkdown(response)))
    .then (() => console.log('Successfully wrote to README.md'))
    .catch(err => console.log(err));
};
init();
