module.exports = function( grunt ) {

    grunt.initConfig({
        concat: {
            options: {
                separator: ";",
                stripBanners: true
            },
            libs:{
                src: [ "src/js/models/**/*.js", "src/js/viewModels/**/*.js" ],
                dest: "lib/js/scripts.js"
            },
            vendor: {
                options: {
                    stripBanners: false
                },
                src: [ "src/js/vendor/*.js" ],
                dest: "lib/js/vendor.js"
            }
        },
        jshint: {
            main: {
                options: {
                    jshintrc: ".jshintrc",
                    jshintignore: ".jshintignore"
                },
                files: {
                    src: ["src/**/*.js"]
                }
            }
        }
    });

    grunt.loadNpmTasks( "grunt-contrib-concat" );
    grunt.loadNpmTasks("grunt-contrib-jshint");


    grunt.registerTask( "helloWorld", "Say hello", function() {
        grunt.log.write( "Hello World!" );
    });

    grunt.registerTask( "build", [ "jshint", "concat:libs", "concat:vendor" ]);

    grunt.registerTask( "default", [ "build" ] );
};