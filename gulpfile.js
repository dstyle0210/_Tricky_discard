// gulpfile.js
const gulp = require('gulp');
const babel = require('gulp-babel');
const ts = require('gulp-typescript');
const webpack = require('webpack-stream');


gulp.task('babel', function() {
  var tsconfig = require("./tsconfig.json");
  return gulp.src('src/**/*.ts')
    .pipe(ts(tsconfig.compilerOptions))
    .pipe(babel())
    .pipe(gulp.dest('out'));
});

gulp.task("webpack",function(){
  return gulp.src("out/**/student.js")
    .pipe(webpack({output: {
                 filename: 'App.bundle.js'
             }}))
    .pipe(gulp.dest("dist"));
});