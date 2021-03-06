#!/usr/bin/env node
"use strict";

const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const program = require("commander");
const { version, description } = require("./package.json");

// import functions
const { list, order, create } = require("./lib");

const init = () => {
  clear();
  console.log(
    chalk.red(
      figlet.textSync("Oxid cli", {
        font: "Star Wars",
        horizontalLayout: "full",
        verticalLayout: "default"
      })
    )
  );
};

// Print commands or help
// $ oxid -v
// $ oxid --version
program
  .name("oxid")
  .version(`v${version}`, "-v, --version")
  .description(description);

// Print coffee drinks menu
// $ oxid list
// $ oxid ls
program
  .command("list") // sub-command name
  .alias("ls") // alternative sub-command is `ls`
  .description("List coffee menu") // command description

  // function to execute when command is uses
  .action(function() {
    list();
  });

// Order a coffee
// $ oxid order
// $ oxid o
program
  .command("order") // sub-command name
  .alias("o") // alternative sub-command is `o`
  .description("Order a coffee") // command description

  // function to execute when command is uses
  .action(function() {
    order();
  });

// New Oxid boilerplate
// $ oxid new
// $ oxid create
program
  .command("new") // sub-command name
  .alias("create") // alternative sub-command is `create`
  .description("New oxid boilerplate") // command description

  // function to execute when command is uses
  .action(function() {
    create();
  });

const run = async () => {
  // show script introduction
  init();

  // run program with arguments
  program.parse(process.argv);

  // if program was called with no arguments, show help.
  if (!program.args.length) program.help();
};

run();
