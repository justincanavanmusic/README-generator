// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license==="something") {
  return "badge1"
}else {
  return "badge2"
}
}

renderLicenseBadge("something");
  // if(${data.license}===)
 //if license is "sdfasdf" return   "sfasdf"
//else return "";
// renderLicenseBadge("something");

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description 

${data.description}
  
## Table of Contents

${data.contents}
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License
${data.license}

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
`;
}

module.exports = generateMarkdown;
