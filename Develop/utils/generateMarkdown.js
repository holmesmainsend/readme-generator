// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(data) {
  let {title, description, installation, usage, credits, license} = data;
  badge = 0;
    switch (license) {
      case "MIT":
        badge = "1";
        break;
      case "GNU GPLv3":
        badge = "";
        break;
      case "GNU AGPLv3":
        badge = "";
        break;
      case "GNU LGPLv3":
        badge = "";
        break;
      case "Mozilla Public License 2.0":
        badge = "";
        break;
      case "Apache License 2.0":
        badge = "";
        break;
      case "Boost Software License 1.0":
        badge = "";
        break;
      case "The Unlicense":
        badge = "";
        break;
    }
    return badge;
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let {title, description, installation, usage, credits, license} = data;
  return `# ${title}

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## Credits
${credits}

## License
${license}
`;
}

module.exports = generateMarkdown;
module.exports = renderLicenseBadge;