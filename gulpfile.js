const gulp = require('gulp')
const postcss = require('gulp-postcss')
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const sass = require('gulp-sass')(require('sass'))
const terser = require('gulp-terser')
const imagemin = require('gulp-imagemin')
const imagewebp = require('gulp-webp')

// scss
gulp.task('scss', function () {
	const processors = [tailwindcss, autoprefixer, cssnano]
	return gulp
		.src('./scss/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss(processors))
		.pipe(gulp.dest('./css'))
})

// // JS mimimize
gulp.task('minJS', function () {
	return gulp.src('./js/*.js').pipe(terser()).pipe(gulp.dest('./js/js-min'))
})

// Optimize images from assets/
gulp.task('optimizeImgs', function () {
	return gulp
		.src('assets/*.{jpg,png}')
		.pipe(imagemin({ optimizationLevel: 3, progressive: true }))
		.pipe(gulp.dest('assets/optimized-imgs'))
})

// Grab assets/optimized-imgs and turn them to webp
gulp.task('webp', function () {
	return gulp
		.src('assets/optimized-imgs/*.{jpg,png}')
		.pipe(imagewebp())
		.pipe(gulp.dest('assets/webp'))
})

// Gulp run watch
gulp.task('watch', function () {
	gulp.watch('./**/*.scss', gulp.series('scss')),
		gulp.watch('./js/*.js', gulp.series('minJS'))
})
