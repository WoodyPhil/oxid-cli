#!/usr/bin/env node
const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const minimist = require("minimist");

const error = require("./lib/error");

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

const args = minimist(process.argv.slice(2));

let cmd = args._[0] || "help";

if (args.version || args.v) {
  cmd = "version";
}

if (args.help || args.h) {
  cmd = "help";
}

const run = async () => {
  // show script introduction
  init();

  switch (cmd) {
    case "module":
      require("./cmd/module")(args);
      break;

    case "version":
      require("./cmd/version")(args);
      break;

    case "help":
      require("./cmd/help")(args);
      break;

    default:
      error(`"${cmd}" is not a valid command!`, true);
      break;
  }
};

run();
