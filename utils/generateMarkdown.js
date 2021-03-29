// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'none':
      return ``;

    case 'license 1':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'

    case 'license 2':
      return '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'

    case 'license 3':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) { 
//   switch (license) {
//     case 'none':
//       return ``;

//     case 'license 1':
//       return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'

//     case 'license 2':
// return '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'

//     case 'license 3':
// return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
//   }
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'none') {
    return ``;
  }
  else {
    return `## License 
    This project is licensed under the ${license}. Click the link below to learn more about how you can use this project.
  `
  }
}
// ${renderLicenseLink(data.license)}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}
  ${data.motivation}
  ${data.why}
  ${data.problemSolved}
  ${data.learned}:
	
  ## Installation
  ${data.installation}

	## Usage
  ${data.usage}

  ## Credits
	${data.credits}

  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}

  ## Features
${data.features}

## How to contribute
${data.contribute}
For more information see the [Contributor Covenant](https://www.contributor-covenant.org/)



  


`;
}

module.exports = generateMarkdown;
