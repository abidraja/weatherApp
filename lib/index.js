#!/usr/bin/env node
const program = require("commander");

program
  .version("1.0.0") //arbitrary version - let's go with 1.0.0
  .description("Weather Forecast CLI"); // name of your program goes here

program
  .command("today") //keyword or command to invoke the program feature that goes after "weather-cli"
  .alias("t") //alias or shortening of the command
  .description("Show weather information for today")
  .action(() => {
    console.log("Today is a nice day"); //actual logic that will be executed
  });

program.parse(process.argv); //parses passed arguments to command line
