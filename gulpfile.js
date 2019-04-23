'use strict';

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

const resources = [
	'./javascripts/vendor/jquery-2.1.1.min.js',
	'./nyc-zone-data/boroughedNeighborhoods.js',
	'./nyc-zone-data/neighborhoods.js',
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

gulp.task('js', () => {
	return gulp.src(resources)
		.pipe(plugins.concat('application.js'))
		.pipe(gulp.dest('.'));
});

gulp.task('js-compress', () => {
	return gulp.src(resources)
		.pipe(plugins.concat('application.js'))
		.pipe(plugins.uglify())
		.pipe(gulp.dest('.'));
});

gulp.task('sass', () => {
	return gulp.src('./sass/*.scss')
		.pipe(plugins.sass({outputStyle: 'compressed'}).on('error', plugins.sass.logError))
		.pipe(gulp.dest('.'));
});

gulp.task('default', gulp.parallel('js', 'sass'));
gulp.task('production', gulp.parallel('js-compress', 'sass'));
