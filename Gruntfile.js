module.exports = function (grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'expanded',
        },
        files: { // Dictionary of files
          'src/css/index.css': 'src/css/index.scss',
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
        files: ['src/css/index.scss'],
        tasks: ['sass'],
      },
      css: {
        files: ['src/css/index.css'],
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
