module.exports = function(grunt) {
  grunt.loadNpmTasks("grunt-vows");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-livescript");
  grunt.loadNpmTasks("grunt-lineending");
  grunt.loadNpmTasks("grunt-verbosity");

  grunt.initConfig({
    clean: {
      lib: 'lib/',
      tmp: ['src/*.js', 'spec/*.js']
    },
    copy: {
      lib: {
        files: [{ expand: true, cwd: 'src/', src: ['*.js'], dest: 'lib/'}]
      }
    },
    livescript: {
      options: {
        bare: true,
        prelude: true
      },
      src: {
        files: [{ expand: true, src: ['src/*.ls'], dest: '.', ext: '.js'}]
      },
      spec: {
        files: [{expand: true, src: ['spec/*-spec.ls'], dest: '.', ext: '.js'}]
      }
    },
    watch: {
      spec: {
        files: ["spec/*-spec.ls", "src/*.ls"]
      }
    },
    vows: {
      options: {
        reporter: "spec",
        executable: "vows"
      },
      all: {
        src: "spec/*.js"
      }
    },
    lineending: {
      all: {
        files: [{
          expand: true,
          src: ['**/*', '!node_modules/**/*', '!tmp/**/*'],
          filter: 'isFile',
          dest: '.'
        }]
      }
    },
    verbosity: {
      all: {
        options: { mode: 'dot' },
        tasks: ['lineending', 'livescript', 'clean']
      }
    },
    pkg: require('./package.json')
  });

  grunt.event.on('watch', function(action, filepath, target) {
    specPath = filepath.replace(/src([\/\\].*)\.ls/, 'spec$1-spec.ls');
    grunt.log.ok('________________________________________');
    grunt.util.spawn({
      cmd: 'lsc',
      args: [specPath],
      opts: {stdio: 'inherit'}
    }, function done() {
      grunt.log.ok('========================================');
    });
  });

  grunt.task.registerTask('build', ['verbosity', 'lineending', 'livescript']);
  grunt.task.registerTask('dist', ['clean:lib', 'test', 'livescript:src', 'copy:lib', 'clean:tmp']);
  grunt.task.registerTask('test', ['clean:tmp', 'build', 'vows', 'clean:tmp']);
  grunt.task.registerTask('w', ['clean:tmp', 'watch']);
  grunt.task.registerTask('default', ['dist']);
}
