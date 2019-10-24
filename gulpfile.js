// gulpfile.js , v4
const gulp = require('gulp');
const babel = require('gulp-babel');
const ts = require('gulp-typescript');
const webpack = require('webpack-stream');




// gulp Function
function ts_build(){
  var tsconfig = require("./tsconfig.json");
  return gulp.src('src/**/*.ts')
    .pipe(ts(tsconfig.compilerOptions))
    .pipe(babel())
    .pipe(gulp.dest('src/js'));
}

function ts_watch(){
  return gulp.watch("src/**/*.ts").on('change', function(path, stats) {
    console.log(`File ${path} was changed`);
  });
}

gulp.task("default",gulp.series(ts_build,ts_watch));

gulp.task("ts:build",ts_build);

// TEST
// gulp.task('babel', function() {
//   var tsconfig = require("./tsconfig.json");
//   return gulp.src('src/**/*.ts')
//     .pipe(ts(tsconfig.compilerOptions))
//     .pipe(babel())
//     .pipe(gulp.dest('out'));
// });

// gulp.task("webpack",function(){
//   return gulp.src("out/**/student.js")
//     .pipe(webpack({output: {
//                  filename: 'App.bundle.js'
//              }}))
//     .pipe(gulp.dest("dist"));
// });