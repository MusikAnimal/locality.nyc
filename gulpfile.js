'use strict';

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const argv = require('yargs').argv;

const resources = [
  './javascripts/vendor/jquery-2.1.1.min.js',
  './nyc-zone-data/manhattan.js',
  './nyc-zone-data/brooklyn.js',
  './nyc-zone-data/queens.js',
  './nyc-zone-data/thebronx.js',
  './nyc-zone-data/statenisland.js',
  './nyc-zone-data/boroughs.js',
  './javascripts/boroughBoxes.js',
  './javascripts/consoleArt.js',
  './javascripts/controls.js',
  './javascripts/form.js',
  './javascripts/main.js',
  './javascripts/map.js',
  './javascripts/util.js',
  './javascripts/zoner.js',
  './javascripts/templates.js',
];

gulp.task('eslint', () => {
  return gulp.src(resources)
    .pipe(plugins.eslint())
    .pipe(plugins.eslint.format())
    .pipe(plugins.eslint.failAfterError());
});

gulp.task('js', () => {
  return gulp.src(resources)
    .pipe(plugins.babel({
      presets: ['@babel/env']
    }))
    .pipe(plugins.concat('application.js'))
    .pipe(gulp.dest('.'));
});

gulp.task('js-compress', () => {
  return gulp.src(resources)
    .pipe(plugins.babel({
      presets: ['@babel/env']
    }))
    .pipe(plugins.concat('application.js'))
    .pipe(plugins.uglifyEs.default())
    .pipe(gulp.dest('.'));
});

gulp.task('sass', () => {
  return gulp.src('./sass/*.scss')
    .pipe(plugins.sass({outputStyle: 'compressed'}).on('error', plugins.sass.logError))
    .pipe(gulp.dest('.'));
});

gulp.task('default', gulp.parallel('js', 'sass'));

// gulp.watch(resources, gulp.parallel('js'));
// gulp.watch('sass/', gulp.parallel('sass'));

gulp.task('production', gulp.parallel('js-compress', 'sass'));
