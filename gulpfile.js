// Gulpfile
const gulp = require('gulp')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const serve = require('gulp-serve')



// 1. Comopile scss files
gulp.task('sass', function () {
  return gulp.src('./css/**/*.scss')
    .pipe(sass().on('error', sass.logError))

    .pipe(sass({ outputStyle: 'compact'}).on('error', sass.logError))

    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./css/**/*.scss', ['sass']);
});


gulp.task('css', function () {
    return gulp.src('./src/*.css')
        .pipe(postcss())
        .pipe(gulp.dest('./dest'));
});
