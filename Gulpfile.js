const gulp = require('gulp')
const svgmin = require('gulp-svgmin');
const svgSymbols = require('gulp-svg-symbols')

gulp.task('sprites', function() {
  return gulp
    .src('sprites/*.svg')
    .pipe(svgmin())
    .pipe(svgSymbols())
    .pipe(gulp.dest('output'))
})
