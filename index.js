// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateREADME = require('./Develop/src/page-template');


// questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Please enter a README Title. (Required)',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('You must provide a title for your project!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please provide your github username.',
      validate: user => {
        if (user) {
          return true;
        } else {
          console.log('You must provide your github username!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please provide a valid email.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please give project description.'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please give installation instuctions.'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please give usage information.'
    },
    {
      type: 'confirm',
      name: 'confirmScreenshot',
      message: 'Would you like to provide a screenshot for your readme file.',
      default: true
    },
    {
      type: 'input',
      name: 'screenshot',
      message: 'please provide relative path of screenshot image.',
      when: ({ confirmScreenshot }) => {
        if (confirmScreenshot) {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please select a license.',
      choices: ['MIT', 'GPL-3.0', 'LGPL-3.0', 'AGPL-3.0', 'MPL-2.0', 'Apache-2.0', 'BSL-1.0', 'None'],
      default: ['MIT'],
      validate: licenseInput => {
        if (licenseInput) {
          return true;
        } else {
          console.log("You must select a license!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What tests can be performed with this application?'
    },
    {
      type: 'input',
      name: 'contributors',
      message: 'Please provide information/guidelines on where others can contribute and assist with this project.'
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Please provide any links or repos that assisted or inspired you to create this project.'
    }
  ])
};

// Initializes app
questions()
  .then(templateData => {
    const pageMD = generateREADME(templateData);

    // Create a function to write README file
    fs.writeFile('./Develop/dist/README.md', pageMD, err => {
      if (err) throw new Error(err);

      console.log('README complete!');
    });


  })