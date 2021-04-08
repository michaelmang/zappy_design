const _ = require("lodash");

const tokens = require("../build/js/_variables.js");

const colors = () => {
  const colorTokens = Object.entries(tokens).filter(([key]) =>
    key.startsWith("color")
  );
  return Object.fromEntries(
    colorTokens.map(([key, value]) => {
      const colorName = key.replace("color.", "");
      return [colorName, value];
    })
  );
};

const fontFamily = () => ({
  sans: _.get(tokens, "font-family"),
});

const fontSize = () => {
  return Object.fromEntries(
    Object.entries(tokens).filter(([key]) => key.includes("font-size"))
  );
};

const screens = () => ({
  sm: _.get(tokens, "breakpoint.mobile"),
  md: _.get(tokens, "breakpoint.tablet"),
});

const spacing = () => {
  return Object.fromEntries(
    Object.entries(tokens).filter(([key]) => key.includes("spacing"))
  );
};

module.exports = {
  theme: {
    colors: colors(),
    fontFamily: fontFamily(),
    fontSize: fontSize(),
    screens: screens(),
    spacing: spacing(),
  },
};