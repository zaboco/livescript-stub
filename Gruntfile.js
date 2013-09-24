module.exports = function(grunt) {
  grunt.loadNpmTasks("grunt-vows");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-livescript");

  grunt.initConfig({
    clean: {
      lib: 'lib/',
      spec: ['src/*.js', 'spec/*.js']
    },

    copy: {
      lib: {
        files: [{ expand: true, cwd: 'src/', src: ['*.js'], dest: 'lib/'}]
      }
    },

    livescript: {
      options: {
        bare: true
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

  grunt.task.registerTask('dist', ['clean:lib', 'livescript:src', 'copy:lib', 'clean:spec']);
  grunt.task.registerTask('test', ['clean:spec', 'livescript', 'vows', 'clean:spec']);
  grunt.task.registerTask('default', ['dist']);
}