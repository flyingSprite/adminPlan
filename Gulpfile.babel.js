import gulp from 'gulp';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import browserify from 'browserify';

gulp.task('scripts-all', () => {
    return gulp.src('app/container/**/*.js')
    .pipe(babel({ presets: ['es2015', 'stage-0'] }))
    // .pipe(sourcemaps.init())
    .pipe(browserify({
        insertGlobals : true,
        debug : !gulp.env.production
    }))
    .pipe(uglify())
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/'));
});