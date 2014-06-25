//TODO: Migrate gulp and grant until sailsjs use gulp

// If you would like to use ES6, try google-traceur.
// Note: import will require requirejs(AMD) if it is used in client side.
var gulp = require('gulp');
var traceur = require('gulp-traceur');

gulp.task('default', function() {
  return gulp.src('.tmp/public/scripts/**/*.js')
    .pipe(traceur({
      sourceMap: true
    }))
    .pipe(gulp.dest('.tmp/public/scripts'));
});
