const gulp  = require('gulp');

/**
  Our gulp tasks live in their own files,
  for the sake of clarity.
 */
require('require-dir')('./gulp-tasks');



/*
  Watch folders for changess
*/
gulp.task("watch", function() {
  gulp.watch('./src/scss/**/*.scss', gulp.parallel('css'));
});


/*
  Let's build this sucker.
*/
gulp.task('build', gulp.parallel(
  'css'
));

/*
  Build and watch things during dev
*/
gulp.task('dev', gulp.series(
  'build',
  'watch'
));







