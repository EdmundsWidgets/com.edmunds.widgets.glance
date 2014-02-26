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
            karma: ['karma.conf.js'],
            src: ['src/**/*.js'],
            unit: ['test/unit/**/*.js']
        },

        // https://github.com/karma-runner/grunt-karma
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },

        // https://github.com/gruntjs/grunt-contrib-watch
        watch: {
            gruntfile: {
                files: ['<%= jshint.gruntfile %>'],
                tasks: 'jshint:gruntfile'
            },
            karma: {
                files: ['<%= jshint.karma %>'],
                tasks: 'jshint:karma'
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
    grunt.loadNpmTasks('grunt-karma');

    // tasks
    grunt.registerTask('default', 'watch');

    grunt.registerTask('test', [
        'jshint',
        'karma:unit'
    ]);

};
