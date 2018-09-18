module.exports = function (grunt) {
  grunt.initConfig({
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          'src/index.css': 'src/index.scss',  // 'destination': 'source
          'src/components/carousel/carousel.css': 'src/components/carousel/carousel.scss',
          'src/components/help/map.css': 'src/components/help/map.scss'
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
      "src/App.css",
      "src/components/carousel/carousel.css",
    "src/components/help/map.css"],
        tasks: ["cssmin"]
      },
      sass: {
        files: ["src/index.scss", "src/App.scss","src/components/carousel/carousel.scss", "src/components/help/map.scss"],
        tasks: ["sass"]
      }
    }
  });

  // grunt.loadNpmTasks();
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.registerTask('w', ['watch']);
};
