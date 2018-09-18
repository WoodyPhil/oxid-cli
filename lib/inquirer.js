const inquirer = require("inquirer");
const minimist = require("minimist");

const files = require("./files");

const askQuestions = () => {
  const args = minimist(process.argv.slice(2));

  const questions = [
    {
      type: "input",
      name: "name",
      message: "Enter a name for the repository:",
      default: args._[0] || files.getCurrentDirectoryBase(),
      validate: function(value) {
        if (value.length) {
          return true;
        } else {
          return "Please enter a name for the module.";
        }
      }
    },
    {
      type: "input",
      name: "description",
      default: args._[1] || null,
      message: "Optionally enter a description of the module:"
    },
    {
      type: "list",
      name: "type",
      message: "Front, Admin, Both:",
      choices: ["front", "admin", "both"],
      default: "front"
    }
  ];

  return inquirer.prompt(questions);
};
module.exports = { askQuestions };
