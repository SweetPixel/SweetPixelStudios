// Generated on 2014-04-19 using generator-lessapp 0.4.10
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Configurable paths
    var config = {
        app: 'app',
        dist: 'dist'
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        config: config,

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            bower: {
                files: ['bower.json'],
                tasks: ['bowerInstall']
            },
            js: {
                files: ['<%= config.app %>/scripts/{,*/}*.js'],
                tasks: ['jshint'],
                options: {
                    livereload: true
                }
            },
            jstest: {
                files: ['test/spec/{,*/}*.js'],
                tasks: ['test:watch']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            less: {
                files: ['<%= config.app %>/mobile-games-ios-android-styles/{,*/}*.less'],
                tasks: ['less:server', 'autoprefixer']
            },
            styles: {
                files: ['<%= config.app %>/mobile-games-ios-android-styles/{,*/}*.css'],
                tasks: ['newer:copy:styles', 'autoprefixer']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= config.app %>/{,*/}*.html',
                    '.tmp/mobile-games-ios-android-styles/{,*/}*.css',
                    '<%= config.app %>/images/{,*/}*'
                ]
            }
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                open: true,
                livereload: 35729,
                // Change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function(connect) {
                        return [
                            connect.static('.tmp'),
                            connect().use('/bower_components', connect.static('./bower_components')),
                            connect.static(config.app)
                        ];
                    }
                }
            },
            test: {
                options: {
                    open: false,
                    port: 9001,
                    middleware: function(connect) {
                        return [
                            connect.static('.tmp'),
                            connect.static('test'),
                            connect().use('/bower_components', connect.static('./bower_components')),
                            connect.static(config.app)
                        ];
                    }
                }
            },
            dist: {
                options: {
                    base: '<%= config.dist %>',
                    livereload: false
                }
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= config.dist %>/*',
                        '!<%= config.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                '<%= config.app %>/indie-gaming-pakistan-scripts/{,*/}*.js',
                '!<%= config.app %>/scripts/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },

        // Mocha testing framework configuration options
        mocha: {
            all: {
                options: {
                    run: true,
                    urls: ['http://<%= connect.test.options.hostname %>:<%= connect.test.options.port %>/index.html']
                }
            }
        },

    // Compiles LESS to CSS and generates necessary files if requested
        less: {
            options: {
                paths: ['./bower_components'],
            },
            dist: {
                options: {
                    cleancss: true,
                    report: 'gzip'
                },
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/mobile-games-ios-android-styles',
                    src: '{,*/}*.less',
                    dest: '.tmp/styles',
                    ext: '.css'
                }]
            },
            server: {
                options: {
                    sourceMap: true,
                    sourceMapBasepath: '<%= config.app %>/',
                    sourceMapRootpath: '../'
                },
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/mobile-games-ios-android-styles',
                    src: '{,*/}*.less',
                    dest: '.tmp/styles',
                    ext: '.css'
                }]
            }
        },

        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/mobile-games-ios-android-styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/mobile-games-ios-android-styles/'
                }]
            }
        },

        // Automatically inject Bower components into the HTML file
        bowerInstall: {
            app: {
                src: ['<%= config.app %>/index.html'],
                ignorePath: '<%= config.app %>/',
                exclude: ['bower_components/bootstrap/dist/js/bootstrap.js']
            },
            less: {
                src: ['<%= config.app %>/mobile-games-ios-android-styles/{,*/}*.less'],
                ignorePath: '<%= config.app %>/bower_components/'
            }
        },

        // Renames files for browser caching purposes
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= config.dist %>/scripts/{,*/}*.js',
                        '<%= config.dist %>/mobile-games-ios-android-styles/{,*/}*.css',
                        '<%= config.dist %>/images/{,*/}*.*',
                        '<%= config.dist %>/mobile-games-ios-android-styles/fonts/{,*/}*.*',
                        '<%= config.dist %>/*.{ico,png}'
                    ]
                }
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            options: {
                dest: '<%= config.dist %>'
            },
            html: '<%= config.app %>/index.html'
        },

        // Performs rewrites based on rev and the useminPrepare configuration
        usemin: {
            options: {
                assetsDirs: ['<%= config.dist %>', '<%= config.dist %>/sweet-pixel-studios-images']
            },
            html: ['<%= config.dist %>/{,*/}*.html'],
            css: ['<%= config.dist %>/mobile-games-ios-android-styles/{,*/}*.css']
        },

        // The following *-min tasks produce minified files in the dist folder
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/sweet-pixel-studios-images',
                    src: '{,*/}*.{gif,jpeg,jpg,png}',
                    dest: '<%= config.dist %>/sweet-pixel-studios-images'
                }]
            }
        },

        svgmin: {
            dist: {
                files: {
                //     // expand: true,
                //     // cwd: '<%= config.app %>/sweet-pixel-studios-images',
                //     // src: '{,*/}*.svg',
                //     src: ['*/*.svg'],
                //     dest: '<%= config.dist %>/sweet-pixel-studios-images'
                // }
                    // src: ['svgs/*.svg'],
                    // dest: '<%= config.dist %>/sweet-pixel-studios-images'
                    // 'dist/sweet-pixel-studios-images/Social Media Icons.svg' : 'app/sweet-pixel-studios-images/Social Media Icons.svg'
                }
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true,
                    removeCommentsFromCDATA: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= config.dist %>',
                    src: '{,*/}*.html',
                    dest: '<%= config.dist %>'
                }]
            }
        },
        dploy: {                                    // Task
            live: {                                // Target
                host: 'sweetpixelstudios.com',            // Your FTP host
                user: 'deployer',
                scheme: 'sftp',
                privateKey: '~/.ssh/id_rsa',
                publicKey: '~/.ssh/id_rsa.pub',
                passphrase: 'sayyam',
                path: {
                    local: 'dist/',               // The local folder that you want to upload
                    remote: '/var/www/sweetpixelstudios'          // Where the files from the local file will be uploaded at in your remote server
                }
            },
            stage: {
                host: 'sweetpixelstudios.com',            // Your FTP host
                user: 'deployer',
                scheme: 'sftp',
                privateKey: '~/.ssh/id_rsa',
                publicKey: '~/.ssh/id_rsa.pub',
                path: {
                    local: 'dist/',               // The local folder that you want to upload
                    remote: '/var/www/stagingsps'          // Where the files from the local file will be uploaded at in your remote server
                  }
            }
        },

        gitcommit: {
            SpsTarget: {
                options: {
                    message: 'Deploying'
                },
                files: {
                    src: ['.']
                }
            }
        },

        slack: {
            options: {
                token: 'uVprS3ru0zhP2kJdTuwSd5id', // get one from here: https://typekit.slack.com/services
                domain: 'sweetpixelstudios', // https://domain.slack.com
                channel: '#general',
                username: 'Grunt',
                icon_url: 'http://i.imgur.com/nWZI4IX.png' // if icon_emoji not specified
            },
            your_target: {
                text: 'http://www.sweetpixelstudios.com was just deployed {{message}}' // {{message}} can be replaced with --message='some text' option from command line
            },
        },

        // By default, your `index.html`'s <!-- Usemin block --> will take care of
        // minification. These next options are pre-configured if you do not wish
        // to use the Usemin blocks.
        // cssmin: {
        //     dist: {
        //         files: {
        //             '<%= config.dist %>/styles/main.css': [
        //                 '.tmp/styles/{,*/}*.css',
        //                 '<%= config.app %>/styles/{,*/}*.css'
        //             ]
        //         }
        //     }
        // },
        // uglify: {
        //     dist: {
        //         files: {
        //             '<%= config.dist %>/scripts/scripts.js': [
        //                 '<%= config.dist %>/scripts/scripts.js'
        //             ]
        //         }
        //     }
        // },
        // concat: {
        //     dist: {}
        // },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= config.app %>',
                    dest: '<%= config.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        'images/{,*/}*.webp',
                        '{,*/}*.html',
                        'mobile-games-ios-android-styles/fonts/{,*/}*.*'
                    ]
                }, {
                    expand: true,
                    dot: true,
                    cwd: 'bower_components/bootstrap/dist',
                    src: ['fonts/*.*'],
                    dest: '<%= config.dist %>'
                }]
            },
            styles: {
                expand: true,
                dot: true,
                cwd: '<%= config.app %>/mobile-games-ios-android-styles',
                dest: '.tmp/mobile-games-ios-android-styles/',
                src: '{,*/}*.css'
            }
        },

        // Generates a custom Modernizr build that includes only the tests you
        // reference in your app
        modernizr: {
            dist: {
                devFile: 'bower_components/modernizr/modernizr.js',
                outputFile: '<%= config.dist %>/indie-gaming-pakistan-scripts/vendor/modernizr.js',
                files: {
                    'src':[
                        '<%= config.dist %>/indie-gaming-pakistan-scripts/{,*/}*.js',
                        '<%= config.dist %>/mobile-games-ios-android-styles/{,*/}*.css',
                        '!<%= config.dist %>/indie-gaming-pakistan-scripts/vendor/*'
                    ]
                },
                uglify: true
            }

        },

        sitemap: {
          dist: {
            siteRoot: 'dist/',
            homepage: 'http://www.sweetpixelstudios.com'
          }
        },


        // Run some tasks in parallel to speed up build process
        concurrent: {
            server: [
                'less:server',
                'copy:styles'
            ],
            test: [
                'copy:styles'
            ],
            dist: [
                'less:dist',
                'copy:styles',
                'imagemin',
                'svgmin'
            ]
        }
    });


    grunt.registerTask('serve', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'autoprefixer',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('server', function (target) {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run([target ? ('serve:' + target) : 'serve']);
    });

    grunt.registerTask('copySVG', function (target) {
      grunt.file.copy('app/sweet-pixel-studios-images/Social-Media-Icons.svg',
      'dist/sweet-pixel-studios-images/Social-Media-Icons.svg');
    });

    grunt.registerTask('copyAndroidStoreSVG', function (target) {
      grunt.file.copy('app/sweet-pixel-studios-images/Android_Store.svg',
      'dist/sweet-pixel-studios-images/Android_Store.svg');
    });

    grunt.registerTask('copyBeBackSoonSVG', function (target) {
        grunt.file.copy('app/sweet-pixel-studios-images/be_back_soon.svg',
            'dist/sweet-pixel-studios-images/be_back_soon.svg');
    });

    grunt.registerTask('copyFacebookSVG', function (target) {
        grunt.file.copy('app/sweet-pixel-studios-images/facebook.svg',
            'dist/sweet-pixel-studios-images/facebook.svg');
    });

    grunt.registerTask('copyFollowusSVG', function (target) {
        grunt.file.copy('app/sweet-pixel-studios-images/Follow_us_on.svg',
            'dist/sweet-pixel-studios-images/Follow_us_on.svg');
    });

    grunt.registerTask('copyGPlusSVG', function (target) {
        grunt.file.copy('app/sweet-pixel-studios-images/G+.svg',
            'dist/sweet-pixel-studios-images/G+.svg');
    });

    grunt.registerTask('copyiOSStoreSVG', function (target) {
        grunt.file.copy('app/sweet-pixel-studios-images/iOS_Store.svg',
            'dist/sweet-pixel-studios-images/iOS_Store.svg');
    });

    grunt.registerTask('copyPlayThisOutSVG', function (target) {
        grunt.file.copy('app/sweet-pixel-studios-images/play_this_out.svg',
            'dist/sweet-pixel-studios-images/play_this_out.svg');
    });

    grunt.registerTask('copyRobotWebSVG', function (target) {
        grunt.file.copy('app/sweet-pixel-studios-images/Robot_Web.svg',
            'dist/sweet-pixel-studios-images/Robot_Web.svg');
    });

    grunt.registerTask('copyTwitterSVG', function (target) {
        grunt.file.copy('app/sweet-pixel-studios-images/twitter.svg',
            'dist/sweet-pixel-studios-images/twitter.svg');
    });

    grunt.registerTask('copyRobotMobileSVG', function (target) {
        grunt.file.copy('app/sweet-pixel-studios-images/Robot_Mobile.svg',
            'dist/sweet-pixel-studios-images/Robot_Mobile.svg');
    });

    grunt.registerTask('test', function (target) {
        if (target !== 'watch') {
            grunt.task.run([
                'clean:server',
                'concurrent:test',
                'autoprefixer'
            ]);
        }

        grunt.task.run([
            'connect:test',
            'mocha'
        ]);
    });

    grunt.registerTask('build', [
        'clean:dist',
        'useminPrepare',
        'concurrent:dist',
        'autoprefixer',
        'concat',
        'cssmin',
        'uglify',
        'copy:dist',
        'modernizr',
        'rev',
        'usemin',
        'htmlmin',
        'copySVG',
        'copyAndroidStoreSVG',
        'copyBeBackSoonSVG',
        'copyFacebookSVG',
        'copyFollowusSVG',
        'copyGPlusSVG',
        'copyiOSStoreSVG',
        'copyPlayThisOutSVG',
        'copyRobotWebSVG',
        'copyTwitterSVG',
        'copyRobotMobileSVG',
        'sitemap'
    ]);

    grunt.registerTask('default', [
        'newer:jshint',
        'test',
        'build'
    ]);

    grunt.registerTask('deploy',[
        'newer:jshint',
        'test',
        'build',
        'gitcommit',
        'dploy:live',
        'slack'
    ]);
};
