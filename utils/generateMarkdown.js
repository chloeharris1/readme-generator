// Including files needed for this application
const fs = require('fs');

// Generate markdown function 
function generateMarkdown(response) {
  return `# ${response.title}
  ![license badge](https://img.shields.io/badge/license-${response.license}-blue)
  ## Description 
  ${response.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  ## Installation 
  ${response.installation}
  ## Usage 
  ${response.usage}
  // ![screenshot](assets/images/screenshot.png)
  ## Credits 
  Chloe Harris - [GitHub Profile](https://github.com/${response.username})
  ## License
  This product is licensed under the ${response.license} license.
  ## How to Contribute 
  ${response.contribute}
  ## Tests
  ${response.test}
  ## Questions 
  If you have any questions about this project, please contact me at ${response.email}. 
  You can find more of my work at [${resp.username}](https://github.com/${resp.username})
  `
}
module.exports = generateMarkdown;

