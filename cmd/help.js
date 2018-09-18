const menus = {
  main: `
      oxid [command] <options>
      module ............. create a Oxid Module
      version ............ show package version
      help ............... show help menu for a command`,

  module: `
      oxid module <options>
      --admin, -a ..... admin side module`
};

module.exports = args => {
  const subCmd = args._[0] === "help" ? args._[1] : args._[0];

  console.log(menus[subCmd] || menus.main);
};
