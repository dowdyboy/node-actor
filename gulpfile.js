var gulp = require('gulp');
var uglify = require('gulp-uglify');
var del = require('del');

gulp.task('build', function() {
    gulp.src(['./dist/**/*','!./dist/**/*.js','!./dist/**/*.map']).pipe(gulp.dest('build/'));
    gulp.src('./dist/**/*.js').pipe(uglify()).pipe(gulp.dest('build/'));
});

gulp.task('tsc',function(){
    gulp.src(['./src/**/*','!./src/**/*.ts']).pipe(gulp.dest('dist/'));
});

gulp.task('clean',function(){
    del(['dist/','build/']);
});