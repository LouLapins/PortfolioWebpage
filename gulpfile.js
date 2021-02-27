let gulp = require('gulp');
let scss = require('gulp-sass');
let csso = require('gulp-csso');

gulp.task('default', function() {
    return gulp.src('scss/*.scss')
        .pipe(scss())
        .pipe(gulp.dest('css'));
});

gulp.task('prod', function() {
    return gulp.src('scss/*.scss')
        .pipe(scss())
        .pipe(gulp.dest('css'))
        .pipe(csso())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch('scss/*main.scss', gulp.series(['default']))
})