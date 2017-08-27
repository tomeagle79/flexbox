'use strict'

var gulp = require('gulp');
// var less = require('gulp-less');
var browserSync = require('browser-sync').create();
 

// Less

// gulp.task('less', function () {
//   	gulp.src('less/*.less')
//   		.pipe(less())
//   		.pipe(gulp.dest('./css'))
//   		.pipe(browserSync.reload({stream: true}))
// });

// Browser sync

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    // gulp.watch('./less/**/*.less', ['less']);
    gulp.watch('./css/**/*.css').on('change', browserSync.reload);
    gulp.watch('./**/*.html').on('change', browserSync.reload);

});

gulp.task('default', ['browser-sync']);
