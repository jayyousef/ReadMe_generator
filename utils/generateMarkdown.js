// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'none':
      return ``;

    case 'Apache 2.0 License':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'

    case 'Boost Software License 1.0':
      return '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'

    case 'The MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'none') {
    return ``;
  } else {
    return `## License 
    This project is licensed under the ${license}. Click the link below to learn more about how you can use this project.`
  }
}
// ${renderLicenseLink(data.license)}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

  ${renderLicenseBadge(data.license)}

  ## Table of contents
  1. [Introduction](#introduction)
  2. [Some paragraph](#installation)
  3. [Another paragraph](#contributions)
  4. [Contact](#contact)

  ## Description <a name="introduction"></a>
  ${data.description}
  ### Motivation
  ${data.motivation}
  ${data.why}
  ### Problem Solved
  ${data.problemSolved}
  ${data.learned}:
	

  ## Installation <a name="installation"></a>
  ${data.installation}

	## Usage
  ${data.usage}

  ## Credits
	${data.credits}

  ${renderLicenseSection(data.license)}

  ## Features 
${data.features}

## Contribution Guidelines <a name="contributions"></a>
${data.contribute}
For more information see the [Contributor Covenant](https://www.contributor-covenant.org/)

## Test Instructions
${data.testing}

## Questions <a name="contact"></a>
If you have any questions or issues you can find my github profile [here](www.github.com/${data.github}) => www.github.com/${data.github}
You can also contact me at my (email address)[mailto:${data.email}]: ${data.email}


${data.license}
`;

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


module.exports = generateMarkdown;
