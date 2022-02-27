// TODO: Include packages needed for this application
// const inquirer = require("inquirer");
// const fs = require('fs');
// const generateREADME = require('./src/page-template');

const inquirer = require("inquirer");


// TODO: Create an array of questions for user input
//const questions = [];

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your README Title?'
    }
  ])
  .then(answers => console.log(answers));

// TODO: Create a function to write README file
//  fs.writeFile('README.md', generateREADME(), err =>{
//    if(err) throw err;

//    console.log('README complete!');
//  });

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();


