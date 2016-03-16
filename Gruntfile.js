module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options:{
           style:'nested'
          // style:'compact'
          // style:'compressed'
          // style:'expanded'
        },
        files: {
          'css/main.css' : 'main.scss'
        }
      }
    },
    autoprefixer:{
      dist:{
        files:{
          'css/main.css':'css/main.css'
        }
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass', 'autoprefixer']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.registerTask('default',['watch']);
};