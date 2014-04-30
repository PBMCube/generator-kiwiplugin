'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var KiwipluginGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      } 
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('You\'re using the fantastic Kiwiplugin generator.'));

    var prompts = [{
      type: 'input',
      name: 'pluginName',
      message: 'What would you like to call your plugin?',
      default: 'KiwiPlugin'
    }];

    this.prompt(prompts, function (props) {
      this.pluginName = props.pluginName;

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('assets');
    this.mkdir('docs');
    this.mkdir('examples');
    this.mkdir('lib');
    this.mkdir('src');
    this.copy('license.txt', 'license.txt');

    this.template('gruntfile.js', 'gruntfile.js');
    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
    
    
    
    this.template('src/plugin-name.js', 'src/' + this.pluginName + '-0.1.0.js');
    this.template('examples/index.html', 'examples/index.html');


  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');

  }
});

module.exports = KiwipluginGenerator;