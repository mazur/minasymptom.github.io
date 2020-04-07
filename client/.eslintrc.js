const rootConfig = require("../.eslintrc.js");

module.exports = {
  ...rootConfig,
  rules: {
    ...(rootConfig.rules || {}),
  },
};
