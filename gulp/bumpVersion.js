"use strict";
/*V24/11/2017 16:50*/
/**
 * IF YOU'RE A OLD GULPFILE WIDOW
 * CHECK SNIPPET: https://bitbucket.org/snippets/tigredonorte/jepeGX
 */
var gulp = require("gulp");
var bump = require('gulp-bump');
var exec = require('child_process').exec;
var filter = require('gulp-filter');
var gutil = require("gulp-util");
var tagVersion = require('gulp-tag-version');
var args = require("./functions/getArgs.js");
var importance = args['i'] ? args['i']: 'patch';

/**
 *
 * GULP push-version
 *
 */
var push_description = 'increment version on package.json, commit and push changes';
gulp.task('push-version', push_description, ['bump-version'], function (cb) {
  var message = '';
  if (!importance || importance == "") {
    importance = "patch";
  }
  message = "Increments " + importance + " version";
  return exec('git add -A && git commit -m "' + message + '" && git push origin --no-verify');
});


/**
 *
 * Gulp bump-version
 *
 */
var bump_description = 'increment version on package.json';
var comandoptions = {
  options: {
    'importance': "\n\t - MAJOR (\"major\") version when you make incompatible API changes (1.0.0)" +
      "\n\t - MINOR (\"minor\") version when you add functionality in a backwards-compatible manner (0.1.0)" +
      "\n\t - PATCH (\"patch\") version when you make backwards-compatible bug fixes. (0.0.2)" +
      "\n\t - PRERELEASE (\"prerelease\") a pre-release version (0.0.1-2)"
  }
};
gulp.task('bump-version', bump_description, ['diff:package'], function (cb) {
  return Promise.all([ inc('./'),  ]);
}, comandoptions);

function inc(folder) {
  return gulp.src(folder + 'package.json')
    .pipe(bump({
      type: importance
    }))
    .pipe(gulp.dest(folder))
    .pipe(filter('package.json'))
    .pipe(tagVersion())
}
/**
 *
 * Gulp diff:package
 *
 */
var diff_description = 'check if package.json file has no diffs.';
gulp.task('diff:package', diff_description, function (cb) {
  return exec('git diff package.json',
    function (err, stdout, stderr) {
      if (err) {
        gutil.log(stderr);
        return cb(err);
      }
      if (stdout !== '') {
        gutil.log('We have found some diff on your package.json:')
        gutil.log(stdout);
        gutil.log('Please, commit then before bump the package version!');
        return cb('Task bump-version failed: package.json have uncommited changes');
      }
      cb();
    }
  );
});
