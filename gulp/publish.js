var gulp = require('gulp');
var inlineNg2Template = require('gulp-inline-ng2-template');
var del = require('del');

var push_description = 'inline angularX templates preparing them to build';
gulp.task('inline-build-templates', push_description, ['clean'], () => {
  return gulp
    .src(['./src/app/lib/**/*.ts', '!./src/app/lib/**/**.spec.ts'])
    .pipe(
      inlineNg2Template({
        target: 'es5',
        useRelativePaths: true
      })
    )
    .pipe(gulp.dest('./build'));
});

var clean_description = 'clean build and lib folders';
gulp.task('clean', clean_description, () => {
  return del([
    'build/**/*.*', 'lib/**/*.*'
  ]);
});
