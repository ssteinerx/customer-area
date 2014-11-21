'use strict';
module.exports = function(grunt) {
  // Load all tasks
  require('load-grunt-tasks')(grunt);
  // Show elapsed time
  require('time-grunt')(grunt);

  grunt.initConfig({
    less: {      
      build: {
        files: {
          'style.css': [
            'less/main.less'
          ]
        },
        options: {
          compress: true,
          // LESS source map
          // To enable, set sourceMap to true and update sourceMapRootpath based on your install
          sourceMap: true,
          sourceMapFilename: 'style.css.map',
          sourceMapRootpath: '/content/plugins/customer-area/themes/frontend/default-v4/'
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9', 'android 2.3', 'android 4', 'opera 12']
      },
      build: {
        options: {
          map: {
            prev: ''
          }
        },
        src: 'style.css'
      }
    },
    watch: {
      less: {
        options: {
          livereload: true
        },
        files: [
          'less/*.less',
          'less/**/*.less'
        ],
        tasks: ['less:build', 'autoprefixer:build']
      }
    }
  });

  // Register tasks
  grunt.registerTask('default', [
    'build'
  ]);
  grunt.registerTask('build', [
    'less:build',
    'autoprefixer:build'
  ]);

};
