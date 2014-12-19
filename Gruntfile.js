/**
 * Created by Ivan_Kauryshchanka on 10/27/2014.
 */
/**
 * Created by Ivan_Kauryshchanka on 10/27/2014.
 */
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
        },
        uglify: {
            glance: {
                files: {
                    'public/js/configurator/glance.min.js': 'public/js/configurator/glance.js'
                }
            }
        },
        watch: {
            glance: {
                tasks: ['build:glance']
            }
        },
        build: {
            glance: [
                'uglify:glance'
            ]
        },
        express: {
            options: {
                port: 3001,
                debug: true
            },
            server: {
                options: {
                    script: 'app.js'
                }
            }
        },
        ghost: {
            test: {
                files: [{
                    src: ['tests/*-test.js']
                }]
            },
            options: {
                args: {
                    baseUrl: 'http://localhost:' +
                    '<%= express.options.port %>/' + 'glance/configure'
                },
                direct: false,
                logLevel: 'error',
                printCommand: false,
                printFilePaths: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-ghost');
    grunt.loadNpmTasks('grunt-express-server');

    grunt.registerTask('test', ['express', 'ghost']);


    grunt.registerTask('default', 'watch');
    grunt.registerMultiTask('build', 'Build task', function() {
        grunt.task.run(this.data);
    });

};
