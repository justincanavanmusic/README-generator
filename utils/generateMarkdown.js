// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// let badgeURL="https://img.shields.io/github/license/${data.username}/${data.repo}"


function renderLicenseBadge(license) {
if (license==="MIT") {
  return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
} else if (license==="Apache"){ 
  return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
} else if (license==="none") {
  return "";
}

// if (license==="none") {
//   return ""
// } else {
//   return "https://img.shields.io/github/license/${data.username}/${data.repo}"
// }


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== 'none') {
    return `- [License](#license)`
  } else {
  return '';
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'none') {
    return `## License`
  } else {
  return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description 

${data.description}
  
## Table of Contents

${data.contents}
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [Credits](#credits)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Credits

${data.credits}

## Tests

${data.tests}

## Questions

Feel free to contact me with any questions!

### Email: ${data.email}

### Phone: 201-218-8720

### Github Username: ${data.username}


[Check out my GitHub!](https://github.com/justincanavanmusic/)
`

}

module.exports = generateMarkdown;
