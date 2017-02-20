/*JS VARIABLES*/
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const uglify      = require('gulp-uglify');
const rename = require('gulp-rename');
const babel = require('gulp-babel');

/*STYLE VARIABLES*/
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const minifycss = require('gulp-clean-css');
const concat = require('gulp-concat');

/* PATH VARIABLES */

//JS
const jsSrc = 'js/dev/*.js';
//const lba = 'js/dev/Lightbox-anything/lightboxAnything.js';
const vendor_wpss = 'js/Vendors/wordpress-social-share/wpss.legacy.js';
const vendor_scrollMagicJS = 'js/Vendors/scrollmagic/ScrollMagic.min.js';
const vendor_conditionizr = 'js/Vendors/conditionizr/dist/conditionizr.min.js';
const vendor_slick = 'js/Vendors/slick/slick/slick.min.js';
const vendorStyle_slick = 'js/Vendors/slick/slick/slick.css';
const jsDist = 'js';
const vendor_jsDist = 'js/Vendors';

//STYLES
const scssSrc = 'scss/**/*.{scss,sass}';
const scssGlobalSrc = 'scss/base/global.scss';
const cssDist = 'css/';

/*
UGLIFY JAVASCRIPT -NOT WORKING PROPERLY-
========================================
*/

gulp.task('scripts',()=>{
    return gulp.src([jsSrc])
        .pipe(sourcemaps.init())
        .pipe(concat('theme-scripts.js'))
        .pipe(babel({
            presets:['es2015']
        }))
        .pipe(gulp.dest(jsDist)) //For debugging purposes
        .pipe(uglify({preserveComments: true, compress: true, mangle: true}).on('error',function(e){console.log('\x07',e.message);return this.end();}))
        .pipe(rename({ extname: '.legacy.min.js' }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(jsDist));
});
gulp.task('vendorScripts',()=>{
    return gulp.src([vendor_wpss, vendor_scrollMagicJS, vendor_conditionizr])
        .pipe(sourcemaps.init())
        .pipe(concat('theme-vendors.js'))
        .pipe(gulp.dest(vendor_jsDist)) //For debugging purposes
        .pipe(uglify({preserveComments: true, compress: true, mangle: true}).on('error',function(e){console.log('\x07',e.message);return this.end();}))
        .pipe(rename({ extname: '.min.js' }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(vendor_jsDist));
});

gulp.task('styles', () =>
    gulp.src(scssGlobalSrc)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error',sass.logError))
        .pipe(autoprefixer('last 4 version', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4')) // Adds browser prefixes (eg. -webkit, -moz, etc.)
        //.pipe(concat('styles.min.css'))
        .pipe(minifycss({compatibility: 'ie8'},{debug:true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(rename({extname:'.min.css'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(cssDist))
);

gulp.task('vendorStyles', () =>
    gulp.src([vendorStyle_slick])
        .pipe(sourcemaps.init())
        .pipe(concat('vendorStyles.css'))
        .pipe(autoprefixer('last 4 version', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4')) // Adds browser prefixes (eg. -webkit, -moz, etc.)
        //.pipe(concat('styles.min.css'))
        .pipe(minifycss({compatibility: 'ie8'},{debug:true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(rename({extname:'.min.css'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(cssDist))
);


/*
WATCH
=====
*/
gulp.task('js-watch', ['scripts','vendorScripts']);
gulp.task('watch', function() {
  
  gulp.watch(scssSrc, ['styles','vendorStyles']);
  gulp.watch(jsSrc, ['js-watch']);

});