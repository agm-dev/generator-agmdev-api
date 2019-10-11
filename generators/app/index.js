"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  initializing() {
    this.composeWith(
      require.resolve("generator-agmdev-barebone/generators/app"),
      { name: "agmdev-api" }
    );
  }

  prompting() {}

  writing() {
    const configPath = "src/config";
    const server = "server.js";
    this.fs.copy(
      this.templatePath(server),
      this.destinationPath(`${configPath}/${server}`)
    );
    const vars = "vars.js";
    this.fs.copy(
      this.templatePath(vars),
      this.destinationPath(`${configPath}/${vars}`)
    );
    this.fs.copy(
      this.templatePath("config.index.js"),
      this.destinationPath(`${configPath}/index.js`)
    );
  }

  install() {}

  end() {
    this.log("This would be the API generator");
  }
};
