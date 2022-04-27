const babelOptions = {
  presets: ["babel-preset-gatsby"],
};

/* eslint-disable */
module.exports = require("babel-jest").default.createTransformer(babelOptions);
/* eslint-enable */
