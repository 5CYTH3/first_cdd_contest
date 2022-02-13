// I was obliged to use CommonJS syntax instead of ES because gulp doesn't support ES Module syntax

const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const poscss = require('gulp-postcss');
const cssnano = require('cssnano');
const browserSync = require('browser-sync');
const htmlMin = require('gulp-html-minifier')
const imagemin = require('gulp-imagemin')

const bs = browserSync.create();

// SASS Task
const scssTask = () => {
    return src('scss/main.scss', { sourcemaps: true })
        .pipe(sass())
        .pipe(poscss([cssnano()]))
        .pipe(dest('build', { sourcemaps: '.' }))
}

// HTML minifier task
const htmlTask = () => {
    return src('./*.html')
        .pipe(htmlMin({ collapseWhitespace: true }))
        .pipe(dest('build'))
}

// Image minifying task
const imgTask = () => {
    return src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
}

// Serve BrowserSync
const serveBrowserSync = (cb) => {
    bs.init({
        server: {
            baseDir: 'build'
        }
    });
    cb();
}

// Reload BrowserSync
const reloadBrowserSync = (cb) => {
    bs.reload()
    cb();
}

// Task Watcher
const watchTask = () => {
    watch('./build/*.html', reloadBrowserSync)
    watch(['./scss/**/*.scss'], series(scssTask, htmlTask, reloadBrowserSync));
}


// Default gulp task (workflow)
exports.default = series(
    scssTask,
    htmlTask,
    imgTask,
    serveBrowserSync,
    watchTask
);
