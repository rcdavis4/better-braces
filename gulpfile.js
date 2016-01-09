var gulp        = require('gulp'),
    browserSync = require('browser-sync').create(),
    reload      = browserSync.reload,
		stylus			= require('gulp-stylus'),
		rupture			= require('rupture'),
		jeet				= require('jeet'),
		nib					= require('nib'),
		uglify 			= require('gulp-uglify'),
		minifyCss 	= require('gulp-minify-css'),
		autoprefix	= require('autoprefixer-stylus'),
		concat 			= require('gulp-concat'),
		concatCss 	= require('gulp-concat-css'),
		rename			= require('gulp-rename');
		


// BROWSER SYNC RELOAD
gulp.task('serve', function() {
  browserSync.init( {
    server: {
      baseDir: "./",
      // directory: true
    },
    browser: "google chrome"

  });

  gulp.watch('*.html').on('change', browserSync.reload);
  gulp.watch('css/*.css').on('change', browserSync.reload);
	gulp.watch('js/*.js').on('change', browserSync.reload);

});


// COMPILE STYLUS
gulp.task('styles', function() {
	gulp.src('css/dev/*.styl')
		.pipe(stylus({
			use: [rupture(), jeet(), nib(), autoprefix()]
		}))
		.pipe(gulp.dest('css/'));
});


// WATCH STYLUS
gulp.task('watch:styl', function() {
	gulp.watch('css/dev/*.styl', ['styles']);
});


// UGLIFY JS
gulp.task('minifyjs', function () {
  return gulp.src('js/*.js')
    .pipe(uglify())
		.pipe(rename({
    	extname: '.min.js'
   	}))
    .pipe(gulp.dest('js/min/'));
});


// CONCAT JS
gulp.task('concatjs', function() {
  return gulp.src('js/min/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('_dist/js'));
});


// MINIFY CSS
gulp.task('minifycss', function() {
  return gulp.src('css/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
		.pipe(rename({
    	extname: '.min.css'
   	}))
    .pipe(gulp.dest('css/min/'));
});


// CONCAT CSS
gulp.task('concatcss', function () {
  return gulp.src('css/min/*.css')
    .pipe(concatCss("all.css"))
    .pipe(gulp.dest('_dist/css'));
});





// DEFAULT TASKS
gulp.task('default', ['serve', 'styles', 'watch:styl']);


// MINIFY/UGLIFY CSS/JS
gulp.task('minify', ['minifyjs', 'minifycss']);


// CONCAT CSS/JS
gulp.task('concatenate', ['concatjs', 'concatcss']);

