const _ = require("lodash");
const StyleDictionary = require("style-dictionary");

const jsFlatFormat = {
  name: "javascript/flat",
  formatter: ({ properties }) => {
    return `module.exports = ${
      JSON.stringify(properties, null, 2)
    }`;
  },
};

const scssFlatFormat = {
  name: "scss/flat",
  formatter: ({ properties }) => {
    return Object.entries(properties).map(([key, value]) => {
      return `$${_.kebabCase(key)}: ${value}`;
    }).join(';\n');
  },
};

StyleDictionary.registerFormat(jsFlatFormat);
StyleDictionary.registerFormat(scssFlatFormat);

module.exports = {
  source: ["tokens/**/*.json"],
  platforms: {
    scss: {
      transformGroup: "scss",
      buildPath: "build/scss/",
      files: [
        {
          destination: "_variables.scss",
          format: "scss/flat",
        },
      ],
    },
    javascript: {
      transformGroup: "js",
      buildPath: "build/js/",
      files: [
        {
          destination: "_variables.js",
          format: "javascript/flat",
        },
      ],
    },
  },
};
