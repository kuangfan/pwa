var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('webserver', function () {
  connect.server({
    livereload: true,
    host: '0.0.0.0',
    port: 2333
  });
});

gulp.task('default', ['webserver']);
