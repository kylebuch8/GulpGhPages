var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var uglify      = require('gulp-uglify');
var usemin      = require('gulp-usemin');
var ghPages     = require('gulp-gh-pages');

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });

    gulp.watch(["app/**/*.html", "app/**/*.js"]).on("change", browserSync.reload);
});

gulp.task('build', function () {
    return gulp.src('app/index.html')
        .pipe(usemin({
            vendorjs: [uglify()],
            js: [uglify()]
        }))
        .pipe(gulp.dest('build/'));
});

gulp.task('deploy', function () {
    return gulp.src('build/**/*')
        .pipe(ghPages());
});

gulp.task('default', ['serve']);
