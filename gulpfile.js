var gulp = require('gulp');
var concat = require("gulp-concat");
var annotate = require("gulp-ng-annotate");
var sassimport = require("gulp-sass");
var paths = {
   jsSource: ['public/app/**/*.js'],
   sassSource: ['public/scss/**/*.scss']
};

gulp.task('scss', function() {
   gulp.src(paths.sassSource)
       .pipe(concat('bundle.css'))
       .pipe(sassimport())
       .pipe(gulp.dest('./public/dist'));
});

gulp.task('js', function() {
   gulp.src(paths.jsSource)
       .pipe(annotate())
       .pipe(concat('bundle.js'))
       .pipe(gulp.dest('./public/dist'));
});

gulp.task('watch', function() {
   gulp.watch(paths.jsSource, ['js']);
   gulp.watch(paths.sassSource, ['scss']);
});

gulp.task('default', ['js', 'scss', 'watch']);

// , 'serve'
// Put the above back in the array of gulp.task if you want gulp to run nodemon.