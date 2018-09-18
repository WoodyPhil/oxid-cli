const ora = require("ora");
const shell = require("shelljs");
const inquirer = require("../lib/inquirer");
const chalk = require("chalk");

const createModule = (name, type) => {
  const filePath = `${process.cwd()}/${name}.${type}`;
  shell.touch(filePath);
  return filePath;
};

const success = oxidModule => {
  console.log(chalk.green.bold(`Done! OXID Module created at ${oxidModule}`));
};

module.exports = async args => {
  try {
    // ask questions
    const answers = await inquirer.askQuestions();
    const { name, type } = answers;
    console.log(answers);

    // create the module
    const spinner = ora().start();
    const oxidModule = createModule(name, type);
    spinner.stop();

    success(oxidModule);
  } catch (err) {
    spinner.stop();

    console.error(err);
  }
};
