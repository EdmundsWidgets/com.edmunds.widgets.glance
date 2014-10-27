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
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    grunt.registerTask('default', 'watch');
    grunt.registerMultiTask('build', 'Build task', function() {
        grunt.task.run(this.data);
    });

};