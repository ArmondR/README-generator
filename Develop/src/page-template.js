module.exports = templateData => {
  console.log(templateData);

    return `
      # ${templateData.title}  ![License](https://img.shields.io/badge/License-${templateData.license}-blue)

      ## Description

      ${templateData.description}

      ## Table of Contents

      * [Installation](#installation)
      * [Usage](#usage)
      * [License](#license)
      * [Contributors](#contributors)
      * [Tests](#tests)
      * [Questions](#questions)


      ## Installation

      ${templateData.installation}

      ## Usage

      ${templateData.usage}

      ## License

      This project is licensed under ${templateData.license}.

      ## Contributing

      ${templateData.contributors}

      ## Tests

      ${templateData.tests}

      ## Questions

      If you have any questions regarding this project, you can reach me via email at ${templateData.email}. 
      If you would like to view more of my projects, you can access them here at: https://github.com/${templateData.github}.


    `;
};

//module.exports = generateREADME;