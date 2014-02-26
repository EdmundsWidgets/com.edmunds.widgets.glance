/* global module */
module.exports = function(grunt) {

    // config
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        // https://github.com/gruntjs/grunt-contrib-jshint
        jshint: {
            options: {
                jshintrc: true
            },
            gruntfile: ['Gruntfile.js'],
            src: ['src/**/*.js'],
            unit: ['test/unit/**/*.js']
        },

        // https://github.com/gruntjs/grunt-contrib-watch
        watch: {
            gruntfile: {
                files: ['<%= jshint.gruntfile %>'],
                tasks: 'jshint:gruntfile'
            },
            src: {
                files: ['<%= jshint.src %>'],
                tasks: 'jshint:src'
            },
            unit: {
                files: ['<%= jshint.unit %>'],
                tasks: 'jshint:unit'
            }
        }

    });

    // plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // tasks
    grunt.registerTask('default', 'watch');

    grunt.registerTask('test', [
        'jshint'
    ]);

};
