module.exports = (on, config) => {
    require('@cypress/code-coverage/task')(on, config);
    return config;
  };
  
// const cucumber = require("cypress-cucumber-preprocessor").default;

// module.exports = (on, config) => {
//   on("file:preprocessor", cucumber());
// };

// const cucumber = require("cypress-cucumber-preprocessor").default;

// module.exports = (on, config) => {
//   on("file:preprocessor", cucumber());
// };


// module.exports = (on, config) => {
//   const options = {
//     ...browserify.defaultOptions,
//     // typeScript: resolve.sync('typescript', { baseDir: config.projectRoot }),  // WRONG
//     typescript: resolve.sync("typescript", { baseDir: config.projectRoot }), // CORRECT
//   };
//   on("file:preprocessor", cucumber(options));
// };
