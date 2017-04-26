'use strict';

const gulp = require('gulp');
const ts = require('gulp-typescript');
const less = require('gulp-less');
const tsProject = ts.createProject('tsconfig.json');
const sequence = require('run-sequence');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');

gulp.task('build-js', () => {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(uglify())
        .pipe(gulp.dest('./build/chrome'));
});

gulp.task('build-css', () => {
    return gulp.src('./src/*.less')
        .pipe(less())
        .pipe(cleanCSS())
        .pipe(gulp.dest('./build/chrome'));
});

gulp.task('add-favicons', () => {
    return gulp.src('./assets/*.png')
        .pipe(gulp.dest('./build/chrome/'));
});

gulp.task('add-chrome-manifest', () => {
    return gulp.src('./browsers/chrome/manifest.json')
        .pipe(gulp.dest('./build/chrome'));
});

gulp.task('add-firefox-manifest', () => {
    return gulp.src('./browsers/firefox/manifest.json')
           .pipe(gulp.dest('./build/firefox'));
});

gulp.task('build-chrome', () => {
    sequence('add-favicons', 'add-chrome-manifest', 'build-css', 'build-js');
});

gulp.task('watch', () => {
    gulp.watch('./src/**/*.ts', ['build-js']);
    gulp.watch('./src/**/*.less', ['build-css']);
});