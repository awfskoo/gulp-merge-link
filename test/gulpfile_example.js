/**
 * Created by adai 
 */
var gulp=require('gulp');
var merge=require('gulp-merge-link');

gulp.task('merge', function () {
    gulp.src('test/fixtures/src.html')
        .pipe(merge({
            'base.css':['*.css','./lib/*.css'],
            'base.js':['lib/jquery.js','header.js']
        }))
        .pipe(gulp.dest('test/expected/tar.html'));
});