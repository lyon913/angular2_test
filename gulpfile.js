var gulp = require('gulp');
var ts = require('gulp-typescript');
var del = require('del')

var tsProject = ts.createProject('tsconfig.json');

gulp.task('build',['ts','html','resource']);

gulp.task('clean',function(){
    del(['dist/*']);
});

gulp.task('ts',['clean'], function () {
    gulp.src('src/**/*.ts')
        .pipe(ts(tsProject))
        .js
        .pipe(gulp.dest('dist'));
});

gulp.task('html',['clean'], function () {
    gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist'));
});

//copy js lib,css,images
gulp.task('resource',['clean'], function () {
    gulp.src('src/js/**/*.*')
        .pipe(gulp.dest('dist/js'));
    gulp.src('src/images/**/*.*')
        .pipe(gulp.dest('dist/images'));
    gulp.src('src/styles/**/*.*')
        .pipe(gulp.dest('dist/styles'));
});

//watch code change
gulp.task('watch', function () {
    gulp.watch('src/**/*.ts',['ts']);
    gulp.watch('src/**/*.html',['html']);
});