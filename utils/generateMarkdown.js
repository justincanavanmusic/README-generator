// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license==="MIT") {
  console.log("badge1")
if (license==="Apache") 
  console.log("badge2")
if (license==="none") 
  console.log("")
}
// renderLicenseBadge(`${data.license}`);
}



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
