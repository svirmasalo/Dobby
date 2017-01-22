/*JS VARIABLES*/
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var uglify      = require('gulp-uglify');
var rename = require('gulp-rename');

/*STYLE VARIABLES*/
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-clean-css');
var concat = require('gulp-concat');

/* PATH VARIABLES */

//JS
var jsSrc = 'js/dev/*.js';
var jsDist = 'js';

//STYLES
var scssSrc = 'scss/**/*.{scss,sass}';
var scssGlobalSrc = 'scss/config/globa.scss';
var cssDist = 'css';

/*
UGLIFY JAVASCRIPT -NOT WORKING PROPERLY-
========================================
*/

gulp.task('uglify',function(){
	return gulp.src([jsSrc])
		.pipe(sourcemaps.init())
        .pipe(concat('all.min.js'))
		.pipe(uglify({preserveComments: false, compress: true, mangle: true}).on('error',function(e){console.log('\x07',e.message);return this.end();}))
		//.pipe(rename({ extname: '.min.js' }))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(jsDist));
});

/*
PREFIX. CONCAT AND MINIFY STYLES
================================
*/

gulp.task('styles', () =>
    gulp.src(scssGlobalSrc)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error',sass.logError))
		.pipe(autoprefixer('last 3 version', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4')) // Adds browser prefixes (eg. -webkit, -moz, etc.)
        //.pipe(concat('styles.min.css'))
        .pipe(minifycss({compatibility: 'ie8'},{debug:true}, function(details) {
        	console.log(details.name + ': ' + details.stats.originalSize);
        	console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(cssDist))
);

/*
WATCH
=====
*/
gulp.task('js-watch', ['uglify']);
gulp.task('watch', function() {

  gulp.watch(scssSrc, ['styles']);
  gulp.watch(jsSrc, ['js-watch']);

});