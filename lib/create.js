const inquirer = require("inquirer");
const colors = require("colors");
const pad = require("pad");
const fs = require('fs');
const ora = require("ora");

const choices = fs.readdirSync(`${__dirname}/templates`);
const curr_dir = `${process.cwd()}/results`;

const questions = [
  {
    name: 'projectChoice',
    type: 'list',
    message: 'What project template would you like to generate?',
    choices: choices
  }, {
    name: 'projectName',
    type: 'input',
    message: 'Project name:',
    validate: function (input) {
      if (/^([A-Za-z\-\_\d])+$/.test(input)) 
        return true;
      else 
        return 'Project name may only include letters, numbers, underscores and hashes.';
      }
    }
];

function createDirectoryContents(templatePath, newProjectPath) {
  const filesToCreate = fs.readdirSync(templatePath);

  filesToCreate.forEach((file) => {
    const origFilePath = `${templatePath}/${file}`;

    // get stats about the current file
    const stats = fs.statSync(origFilePath);

    if (stats.isFile()) {
      const contents = fs.readFileSync(origFilePath, 'utf8');

      // Rename
      if (file === '.npmignore') 
        file = '.gitignore';
      
      const writePath = `${curr_dir}/${newProjectPath}/${file}`;
      fs.writeFileSync(writePath, contents, 'utf8');
    } else if (stats.isDirectory()) {
      fs.mkdirSync(`${curr_dir}/${newProjectPath}/${file}`);

      // recursive call
      createDirectoryContents(`${templatePath}/${file}`, `${newProjectPath}/${file}`);
    }
  });
}

module.exports = function () {
  inquirer
    .prompt(questions)
    .then(function (answers) {
      const {projectChoice, projectName} = answers
      const templatePath = `${__dirname}/templates/${projectChoice}`;

      const spinner = ora().start();
      fs.mkdirSync(`${curr_dir}/${projectName}`);
      createDirectoryContents(templatePath, projectName);
      spinner.stop();

      console.log(pad(colors.grey("projectChoice: "), 30), projectChoice);
      console.log(pad(colors.grey("projectName: "), 30), projectName);
      console.log(pad(colors.grey("templatePath: "), 30), templatePath);

    });
};
