module.exports = function (grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'expanded',
        },
        files: { // Dictionary of files
          'src/css/index.css': 'src/css/index.scss',
          'src/css/carousel.css': 'src/css/carousel.scss',
          'src/css/help.css': 'src/css/help.scss',
        },
      },
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'src',
          src: ['*.css', '!*.min.css'],
          dest: 'src',
          ext: '.min.css',
        }],
      },
    },
    watch: {
      sass: {
        files: ['src/css/index.scss', 'src/css/app.scss', 'src/css/carousel.scss', 'src/css/help.scss'],
        tasks: ['sass'],
      },
      css: {
        files: ['src/css/index.css',
          'src/css/carousel.css',
          'src/css/help.css'],
        tasks: ['cssmin'],
      },
    },
  });

  // grunt.loadNpmTasks();
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('w', ['watch']);
};
