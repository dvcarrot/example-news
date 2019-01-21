var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var server = require('browser-sync');

gulp.task('build:scripts', function () {
    return gulp.src('src/scripts/**/*')
        .pipe($.concat('site.js'))
        .pipe(gulp.dest('dist/scripts'))
});

gulp.task('build:styles', function () {
    return gulp.src(['src/styles/*', '!src/styles/_*'])
        .pipe($.sass())
        .pipe(gulp.dest('dist/styles'))
});

gulp.task('build:views', function () {
    return gulp.src('src/views/pages/*')
        .pipe($.pug())
        .pipe(gulp.dest('dist/'))
});

gulp.task('build:assets', function () {
    return gulp.src('src/assets/**/*')
        .pipe($.newer('dist/assets'))
        .pipe(gulp.dest('dist/assets'))
});

gulp.task('build:icons', function () {
    return gulp.src('src/assets/icons')
        .pipe(gulp.dest('dist/assets'))
        .pipe($.run('icon-font-generator src/assets/icons/*.svg -o dist/assets/icons'))
});

gulp.task('build', gulp.parallel('build:scripts', 'build:styles', 'build:views', 'build:assets', 'build:icons'));

gulp.task('vendor:scripts', function () {
    return gulp.src(['node_modules/tiny-slider/dist/tiny-slider.js'])
        .pipe($.concat('vendor.js'))
        .pipe(gulp.dest('dist/scripts'))
});

gulp.task('vendor:styles', function () {
    var vendorCss = [
        'node_modules/normalize.css/normalize.css',
        'node_modules/tiny-slider/dist/tiny-slider.css'
    ];
    return gulp.src(vendorCss)
        .pipe($.concat('vendor.css'))
        .pipe(gulp.dest('dist/styles'))
});

gulp.task('vendor', gulp.parallel('vendor:scripts', 'vendor:styles'));

gulp.task('watch:styles', function () {
    return gulp.watch('src/styles/**/*', gulp.parallel('build:styles'));
});

gulp.task('watch:scripts', function () {
    return gulp.watch('src/scripts/**/*', gulp.parallel('build:scripts'));
});

gulp.task('watch:views', function () {
    return gulp.watch('src/views/**/*', gulp.parallel('build:views'));
});

gulp.task('watch:assets', function () {
    return gulp.watch('src/assets/**/*', gulp.parallel('build:assets'));
});

gulp.task('watch', gulp.parallel('watch:scripts', 'watch:styles', 'watch:assets', 'watch:views'));

gulp.task('serve', function () {
    server.init({port: 3001, server: "./dist", notify: false, open: true, ui: false});
    return gulp.watch('dist/**/*').on('change', function (file) {
        server.reload(file)
    });
});

gulp.task('start', gulp.parallel(gulp.series('vendor', 'build', 'serve'), 'watch'));
