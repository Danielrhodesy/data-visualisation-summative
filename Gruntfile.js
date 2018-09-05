module.exports = function (grunt) {
  grunt.initConfig({
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          'index.css': 'index.scss',       // 'destination': 'source'
          'App.css': 'App.scss'
        }
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'src',
          src: ['*.css', '!*.min.css'],
          dest: 'src',
          ext: '.min.css'
        }]
      }
    },
    watch: {
      css: {
        files: ["src/index.css", 
      "src/App.css"],
        tasks: ["grunt-sass", "cssmin"]
      }
    }
  });

  // grunt.loadNpmTasks();
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.registerTask('default', ['sass']);
};
