// gulpfile.js , v4
const {watch , dest , src , series , parallel , lastRun}  = require('gulp');
const babel = require('gulp-babel');
const ts = require('gulp-typescript');
const webpack = require('webpack-stream');
const tsconfig = require("./tsconfig.json");

// gulp Function
function ts_build(){
  return src('src/**/*.ts',{ since: lastRun(ts_build) })
    .pipe(ts(tsconfig.compilerOptions))
    .pipe(babel())
    .pipe(dest('src/js'));
}

function ts_watch(){
  return watch("src/**/*.ts",ts_build);
}
function webpack_build(){
  return src("src/js/core/*.js")
    .pipe(webpack({
      mode: 'development',
      output: {
        filename: 'tricky.core.js'
      }
    }))
    .pipe(dest("dist"));
}

// gulp API
exports.default = series(ts_build,ts_watch);
exports.build = ts_build;
exports.webpack = series(ts_build,webpack_build);



// gulp.task("default",gulp.series(ts_build,ts_watch));

// gulp.task("ts:build",ts_build);

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