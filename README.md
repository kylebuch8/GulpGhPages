#Using Gulp Gh Pages

The gulp-gh-pages module lets you push a directory to your gh-pages branch with minimal effort.

Get things started:
```
npm install && bower install
```

In gulpfile.js, I have a build task which puts a build of my application in a build directory. Then another task deploys the build to my gh-pages branch.

```javascript
var gulp = require('gulp');
var usemin = require('gulp-usemin');
var ghPages = require('gulp-gh-pages');

gulp.task('build', ['usemin', 'copy']);

gulp.task('deploy', function () {
    return gulp.src('./build/**/*')
        .pipe(ghPages());
});
```
