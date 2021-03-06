// creates screenshot section
const generateScreenshot = screenShot => {
  if (!screenShot) {
    return '';
  }

  return `
## Screenshot

![](${screenShot})
  `;
};


module.exports = templateData => {
  console.log(templateData);

  return `
# ${templateData.title}  

[![License](https://img.shields.io/badge/License-${templateData.license}-blue)](https://www.opensource.org/licenses/${templateData.license})

## Description

${templateData.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Tests](#tests)
* [Credits](#credits)
* [Questions](#questions)


## Installation

${templateData.installation}

## Usage

${templateData.usage}

${generateScreenshot(templateData.screenshot)}

## License

This project is licensed under ${templateData.license}.

## Contributing

${templateData.contributors}

## Tests

${templateData.tests}

## Credits

${templateData.credits}

## Questions

If you have any questions regarding this project, you can reach me via email at ${templateData.email}. 
If you would like to view more of my projects, you can access them here at: https://github.com/${templateData.github}.


    `;
};
