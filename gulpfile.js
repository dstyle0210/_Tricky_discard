// gulpfile.js
const gulp = require('gulp');
const babel = require('gulp-babel');
const ts = require('gulp-typescript');


gulp.task('test', function() {
  var tsconfig = require("./tsconfig.json");
  return gulp.src('src/**/*.ts')
    .pipe(ts(tsconfig.compilerOptions))
    .pipe(babel())
    .pipe(gulp.dest('out'));
});


