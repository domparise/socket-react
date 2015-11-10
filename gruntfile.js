module.exports = function (grunt) { 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        browserify: {
            options: {
                transform:  [ require('grunt-react').browserify ],
                compress: true
            },
            client: {
                files: {
                    'public/js/index.min.js': ['client/index.js']
                }
            }
        },
        nodemon: {
            dev: {
                script: 'index.js'
            }
        },
        watch: {
            browserify: {
                files: ['client/*.js','client/*.jsx'],
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
    grunt.loadNpmTasks('grunt-nodemon')
    grunt.loadNpmTasks('grunt-concurrent')
    grunt.loadNpmTasks('grunt-react')
    grunt.registerTask('compile', ['browserify:client'])
    grunt.registerTask('default', ['compile','concurrent'])
}