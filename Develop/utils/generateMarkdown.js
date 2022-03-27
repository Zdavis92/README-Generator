// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ""
  }
  if (license === "MIT") {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  if (license === "Apache") {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  if (license === "Unlicense") {
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
  }
  if (license === "GNU GPL v3") {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }
  if (license === "LGPL v3") {
    return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  } else if (license === "MIT") {
    return '<https://opensource.org/licenses/MIT>'
  } else if (license === 'Apache') {
    return '<https://opensource.org/licenses/Apache-2.0>'
  } else if (license === 'Unlicense') {
    return '<https://unlicense.org/>'
  } else if (license === 'GNU GPL v3') {
    return '<https://www.gnu.org/licenses/gpl-3.0>'
  } else if (license === 'LGPL v3') {
    return '<https://www.gnu.org/licenses/lgpl-3.0>'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This app is covered by a ${license} license. For more information please checkout this link ${renderLicenseLink(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  [Description](#description)
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contribution](#contibuting)
  [Testing](#testing)
  [Questions](#questions)
  ## Installation
  ${data.installInstructions}
  ## Usage
  ${data.usageInfo}
  ## License
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contributionGuidelines}
  ## Testing
  ${data.testInstuctions}
  ## Questions
  https://github.com/${data.githubName}
  ${data.email}
`;
}

module.exports = generateMarkdown;
