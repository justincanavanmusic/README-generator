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
    message: 'Can you give a description of your project?',
    name: 'description',
  },
    {
    type: 'input',
    message: 'Can you make a Table of Contents for your project?',
    name: 'contents',
  },
  {
    type: 'list',
    message: 'Which license are you using?',
    choices: ['MIT', "Apache", "none"],
    name: 'license'
  },
 {
    type: 'input',
    message: 'Can you give installation instructions?',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Can you provide instructions for usage?',
    name: 'usage',
  },

  {
    type: 'input',
    message: 'Can you list some tests to run on your application?',
    name: 'tests',
  },
    {
    type: 'input',
    message: 'Can you list any collaborators along with their Github links?',
    name: 'credits',
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
 },

 {
  type: 'input',
  message: 'What is your GitHub repo name?',
  name: 'repo',
},
 

];
//
// for (let i = 0; i < questions.length; i++) {
// // console.log(questions[i].name);
// }


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
      fs.writeFile('README2.md', generateMarkdown(data)
    ,(err) =>
    err ? console.error(err) : console.log('Commit logged!'
    ))
    
   
}
// function customPrompt(name) {
//   if (name === 'justin') {
//     return Promise.resolve('this name is good'); 
//   } else if (name === 'steven') {
//     return Promise.reject('this name is bad')
//   }
// }

// TODO: Create a function to initialize app
function init() {
  inquirer //package
  .prompt (questions)   //array of the objects
  .then((response) => { //name of each prompt+user input
    writeToFile('README2.md', response); //response goes into data at 26
    // console.log(response);

  }
  );
}

// Function call to initialize app
init();
