/**
 * Installs bower packages
 *
 * ---------------------------------------------------------------
 *
 * This grunt task is configured to clean out the contents in the .tmp/public of your
 * sails project.
 *
 * For usage docs see:
 *    https://github.com/yatskevich/grunt-bower-task
 */


module.exports = function (grunt) {
  "use strict";

  grunt.loadNpmTasks('grunt-bower-task');
  var path = require('path');
  //Then add the task
  grunt.initConfig({
    pkg: grunt.file.readJSON('bower.json'),
    // Bower Task
    bower: {
      install: {
        options: {
          targetDir: './assets/linker',
          install: true,
          verbose: false,
          cleanTargetDir: false,
          cleanBowerDir: false,
          bowerOptions: {},
          layout: function (type, component, source) {
            if (type === 'fonts') {
              return path.join("/styles/fonts");
            }

            return path.join(type, component);
          }
        }
      }
    }
  });
};
