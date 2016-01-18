/* global module:false */

/**
 * Gruntfile for yakjs
 * @param {?} grunt
 */
module.exports = function grunt(grunt) {
    'use strict';

    var pkg = grunt.file.readJSON('package.json');

    // Build Folder: for build related tasks
    var buildDir = './build/';

    // Default Folder: containing default YAKjs setup of instances, plugins and stores
    var defaultDir = './default/';

    // Server Folders: source code of the YAKjs server
    var serverDir = './server/';
    var serverSrcDir = serverDir + 'src/';

    // User Interface Folders: source code of the YAKjs user interface
    var uiDir = './ui/';
    var uiSrcDir = uiDir + 'src/';

    // Test Folders: containing unit test and integration tests.
    var testDir = './test/';
    var testServerDir = testDir + 'server/';

    // Distribution Folder: intermediate and final output for the build process
    var distDir = './dist/';
    var tmpDir = distDir + 'tmp/';
    var pkgDir = './dist/yakjs/';
    var uiPkgDir = pkgDir + 'ui/';
    var reportsDir = distDir + 'reports/';
    var coverageDir = distDir + 'coverage/';

    var banner = ['/**',
            ' * ' + pkg.name,
            ' * @version ' + pkg.version,
            ' * @author ' + pkg.author,
            ' * @created ' + grunt.template.today('yyyy-mm-dd'),
            ' * @license ' + pkg.license,
        ' */\n\n'].join('\n');

    var uiFooter = 'yak.ui.version = \'' + pkg.version + '\';\n';

    grunt.initConfig({
        pkg: pkg,
        clean: {
            dist: [distDir],
            tmp: [tmpDir]
        }
    });

    grunt.config.merge({
        uglify: {
            options: {
                banner: banner
            },
            build: {
                src: pkgDir + pkg.name + '.js',
                dest: pkgDir + pkg.name + '.min.js'
            }
        }
    });

    grunt.config.merge({
        concat: {
            options: {
                separator: '\n'
            },
            server: {
                options: {
                    banner: banner,
                },
                src: [
                        serverDir + '_namespaces.js',
                        serverSrcDir + '**/*.js',
                        serverDir + '_bootstrap.js'
                ],
                dest: pkgDir + pkg.name + '.js',
                nonull: true
            },
            api: {
                options: {
                    banner: banner
                },
                src: [
                        serverDir + '_namespaces.js',
                        serverSrcDir + 'api/**/*.js'
                ],
                dest: uiPkgDir + 'scripts/' + pkg.name + '-api.js',
                nonull: true
            },
            ui: {
                options: {
                    banner: banner,
                    footer: uiFooter
                },
                src: [
                        uiDir + '_namespaces.js',
                        uiSrcDir + '**/*.js',
                        uiDir + '_bootstrap.js'
                ],
                dest: uiPkgDir + 'scripts/' + pkg.name + '-ui.js',
                nonull: true
            },
            less: {
                options: {},
                src: [
                        uiSrcDir + '**/*.less'
                ],
                dest: tmpDir + 'less/' + pkg.name + '-style.less',
                nonull: true
            }
        }
    });

    grunt.config.merge({
        copy: {
            server: {
                files: [
                    {flatten:true, src: ['README.md', 'LICENSE', 'package.json'], dest: pkgDir},
                    {flatten:false, src: ['node_modules/ws/**'], dest: pkgDir},
                    {flatten:false, src: ['node_modules/underscore/**'], dest: pkgDir},
                    {flatten:false, src: ['node_modules/npm/**'], dest: pkgDir},
                    {flatten:false, src: ['node_modules/express/**'], dest: pkgDir},
                    {flatten:false, src: ['node_modules/body-parser/**'], dest: pkgDir},
                    {flatten:false, src: ['node_modules/log4js/**'], dest: pkgDir},
                    {flatten:false, src: ['node_modules/moment/**'], dest: pkgDir},
                    {flatten:false, src: ['node_modules/doctrine/**'], dest: pkgDir},
                    {flatten:true, cwd: serverDir + 'bin/', src: ['*.bat', '*.sh'], dest: pkgDir, expand: true}
                ]
            },
            bin: {
                files: [
                    {flatten: true, cwd: serverDir + 'bin/', src: ['yakjs.js'], dest: pkgDir + 'bin/', expand: true}
                ]
            },
            defaults: {
                files: [
                    { flatten:true, cwd: defaultDir + 'plugins/', src: ['*.js'], dest: pkgDir + 'plugins/', expand: true},
                    { flatten:true, cwd: defaultDir + 'instances/', src: ['*.json'], dest: pkgDir + 'instances/', expand: true},
                    { flatten:true, cwd: defaultDir + 'stores/', src: ['*.*'], dest: pkgDir + 'stores/', expand: true}
                ]
            },
            ui: {
                files: [
                    {expand: true, cwd: uiSrcDir, src: ['**/*.*', '!**/*.less', '!**/*.js', '!**/*.mustache'], dest: uiPkgDir, filter: 'isFile'},
                    {expand: true, cwd: uiDir, src: ['ext/**/*'], dest: uiPkgDir}
                ]
            },
            coverageTest: {
                files: [
                    {flatten:true, cwd: serverDir, src: ['_namespaces.js'], dest: coverageDir + 'server/', expand: true},
                    {flatten:true, cwd: testServerDir, src: ['**/*.js'], dest: coverageDir + 'test/server/', expand: true},
                    {flatten:true, cwd: testDir, src: ['*.js'], dest: coverageDir + 'test/', expand: true}
                ]
            }
        }
    });

    grunt.config.merge({
        eslint: {
            options: {
                config: '.eslintrc'
            },
            server: [serverSrcDir + '**/*.js']
        }
    });

    grunt.config.merge({
        watch: {
            server: {
                files: [serverDir + '**/*.js'],
                tasks: ['compile-server'],
                options: {
                    spawn: false
                }
            },
            client: {
                files: [uiDir + '**/*.*'],
                tasks: ['compile-ui'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.config.merge({
        less: {
            options: {
                paths: [tmpDir + 'less/']
            },
            src: {
                expand: true,
                cwd:    tmpDir + 'less/',
                src:    pkg.name + '-style.less',
                dest:   uiPkgDir + 'style/',
                ext:    '.css'
            }
        }
    });

    grunt.config.merge({
        mustache: {
            dist: {
                files: {
                    src: [uiSrcDir + '**/*.mustache']
                },
                srcMerge: uiSrcDir + 'index.html',
                    target: uiPkgDir + 'index.html'
            }
        }
    });

    grunt.config.merge({
        mochaTest: {
            dist: {
                options: {
                    require: [],
                    reporter: 'spec'
                },
                src: ['./server/test/**/*.js']
            },
            coverage: {
                options: {
                    reporter: 'spec'
                },
                src: [coverageDir + 'test/server/**/*.js']
            }
        }
    });

    // Istanbul coverage analysis
    grunt.config.merge({
        instrument: {
            files: [serverSrcDir + '**/*.js'],
                options: {
                basePath: coverageDir
            }
        }
    });

    grunt.config.merge({
        storeCoverage: {
            options: {
                dir: reportsDir + 'coverage-raw/'
            }
        }
    });

    grunt.config.merge({
        makeReport: {
            src: reportsDir + 'coverage-raw/**/*.json',
                options: {
                type: 'lcov',
                    dir: reportsDir + 'coverage/',
                    print: 'text-summary' // detail, none
            }
        }
    });

    grunt.config.merge({
        compress: {
            zip: {
                options: {
                    archive: distDir + pkg.name + '-' + pkg.version + '.zip',
                    level: 9,
                    mode: 'zip',
                    pretty: true
                },
                files: [{
                    src: ['**/*'],
                    expand: true,
                    cwd: pkgDir,
                    dest: '.'
                }]
            }
        }
    });

    // Load all npm tasks.
    require('load-grunt-tasks')(grunt);

    grunt.loadTasks(buildDir + 'grunt-tasks');

    grunt.registerTask('compile-server', ['concat:server', 'concat:api', 'uglify']);
    grunt.registerTask('compile-ui', ['concat:api', 'concat:ui', 'concat:less', 'copy:ui', 'less', 'mustache']);

    grunt.registerTask('build-server', [
        'compile-server',
        'copy:server',
        'copy:bin',
        'copy:defaults',
        'eslint:server',
        'test']);
    grunt.registerTask('build-ui', ['compile-ui', 'clean:tmp']);

    grunt.registerTask('test', ['mochaTest']);

    grunt.registerTask('coverage', ['instrument', 'copy:coverageTest', 'mochaTest:coverage', 'storeCoverage', 'makeReport']);
    grunt.registerTask('dev', ['build-server', 'build-ui', 'watch']);
    grunt.registerTask('compile', ['compile-server', 'compile-ui']);
    grunt.registerTask('build', ['clean', 'build-server', 'build-ui', 'coverage']);
    grunt.registerTask('package', ['build', 'compress']);

    // TASK: default
    grunt.registerTask('default', ['package']);
};
