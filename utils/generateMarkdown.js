  //Function returns a badge of the license the user chooses
  // If there is no license, return an empty string
  function renderLicenseBadge(license) {
    let badge;
    console.log("this is license -----" + license)
    if (license == 'none') {
      badge = ``
    } else if (license == 'Apache 2.0 License') {
      badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    } else if (license == 'Boost Software License 1.0') {
      badge = '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
    } else if (license == 'The MIT License') {
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    }
    console.log("this is badge -----" + badge)
    return badge;

  }

  //function gets the link to the license the user chooses to pass to the ##License section of the ReadMe
  function renderLicenseLink(license) {
    let link;
    console.log("this is license -----" + license)
    if (license == 'none') {
      link = ``
    } else if (license == 'Apache 2.0 License') {
      link = '[License Apache 2.0](https://opensource.org/licenses/Apache-2.0)'
    } else if (license == 'Boost Software License 1.0') {
      link = '[License: Boost](https://www.boost.org/LICENSE_1_0.txt)'
    } else if (license == 'The MIT License') {
      link = '[License: MIT](https://opensource.org/licenses/MIT)'
    }

    return link;
  }


  // Returns the entire license section unless user chooses None
  // If there is no license, it returns an empty string
  function renderLicenseSection(license) {
    let licenseSection;
    if (license == 'none') {
      licenseSection = ``;
    } else {
      licenseSection = `## License 
This project is licensed under the ` + license + ". Click the link below to learn more about how you can use this project."
    }
    return licenseSection
  }

  // TODO: This function creates the entire readme File, except the license section, which is generated above
  function generateMarkdown(data) {
    console.log(data)
    return `# ${data.projectTitle.toUpperCase()}
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
${renderLicenseLink(data.license)}

## Features 
${data.features}

## Contribution Guidelines <a name="contributions"></a>
${data.contribute}
For more information see the [Contributor Covenant](https://www.contributor-covenant.org/)

## Test Instructions
${data.testing}
## Questions <a name="contact"></a>
If you have any questions or issues you can find my github profile [here](www.github.com/${data.github}) => www.github.com/${data.github}
You can also contact me at my [email address](mailto:${data.email}): ${data.email}
`;

  }

  //exports the function for use in other files
  module.exports = {
    generateMarkdown
    // renderLicenseBadge,
    // renderLicenseLink,
    // renderLicenseSection
  }