// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [ {
  type: 'input',
  message: 'What is the title of your project?',
  name: 'title',
   },
 {
   type: 'input',
   message: 'What is your Github username?',
   name: 'username',
 },
 {
   type: 'input',
   message: 'What is your email address?',
   name: 'email',
 },];
//


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
      fs.writeFile('README2.md', generateMarkdown(data)
    ,(err) =>
    err ? console.error(err) : console.log('Commit logged!'))
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt (questions)   //array of the objects
  .then((response) => { //name of each prompt+user input
    // questions.push(response)
    writeToFile('README2.md', response); //response goes into data at 26
  }
  );
}

// Function call to initialize app
init();
