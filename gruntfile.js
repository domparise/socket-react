module.exports = function (grunt) { 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        CLIENT: 'client',
        CSS: '<%= CLIENT %>/public/css',
        JS: '<%= CLIENT %>/public/js',
        browserify: {
            options: {
                transform:  [ require('grunt-react').browserify ],
                compress: true
            },
            client: {
                files: {
                    '<%= JS %>/index.min.js': ['<%= CLIENT %>/index.js']
                }
            }
        },
        stylus: {
            options: {
                compress: true
            },
            client: {
                files: {
                    '<%= CSS %>/index.min.css': ['<%= CLIENT %>/style/index.styl']
                }
            }
        },
        nodemon: {
            dev: {
                script: 'index.js'
            }
        },
        watch: {
            stylus: {
                files: ['client/style/*.styl'],
                tasks: ['stylus:client']
            },
            browserify: {
                files: ['client/*.js','client/components/*.jsx'],
                tasks: ['browserify:client']
            }
        },
        concurrent: {
            tasks: ['watch','nodemon:dev'],
            options: {
                logConcurrentOutput: true
            }
        }
    })
    
    grunt.loadNpmTasks('grunt-browserify')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-contrib-stylus')
    grunt.loadNpmTasks('grunt-nodemon')
    grunt.loadNpmTasks('grunt-concurrent')
    grunt.loadNpmTasks('grunt-react')
    grunt.registerTask('compile', ['stylus:client','browserify:client'])
    grunt.registerTask('default', ['compile','concurrent'])
}