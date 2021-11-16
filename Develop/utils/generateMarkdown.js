// Function that returns license badge + link based on which license is passed in
function renderLicenseBadge(data) {
  let {title, description, installation, usage, credits, license} = data;
  badge = 0;
    switch (license) {
      case "MIT":
        badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        break;
      case "GNU GPLv3":
        badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        break;
      case "GNU AGPLv3":
        badge = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
        break;
      case "GNU LGPLv3":
        badge = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
        break;
      case "Mozilla Public License 2.0":
        badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
        break;
      case "Apache License 2.0":
        badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        break;
      case "Boost Software License 1.0":
        badge = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
        break;
      case "The Unlicense":
        badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
        break;
    }
     return badge;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  let {title, description, installation, usage, credits, license} = data;
  let badgeIcon = renderLicenseBadge(data);
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
  ${badgeIcon}
`;
}

// Exports
module.exports = generateMarkdown;