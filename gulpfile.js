import pkg from 'gulp';
const { src, dest, watch, series } = pkg;
import gsass from 'gulp-sass';
import sass from 'sass';
import postcss from 'gulp-postcss';
import cssnano from 'cssnano';
import browserSync from 'browser-sync';
import htmlMin from 'gulp-html-minifier';
import imagemin from 'gulp-imagemin';

const sassEngine = gsass(sass);

const bs = browserSync.create();

// SASS Task
const scssTask = () => {
    return src('scss/main.scss', { sourcemaps: true })
        .pipe(sassEngine())
        .pipe(postcss([cssnano()]))
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
    return src('res/*')
        .pipe(imagemin())
        .pipe(dest('build/res/', { sourcemaps: '.' }))
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
export default series(
    scssTask,
    htmlTask,
    imgTask,
    serveBrowserSync,
    watchTask
);
