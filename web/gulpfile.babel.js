// Libraries
import gulp from 'gulp';
import browserSync from 'browser-sync';
import webpack from 'webpack-stream';
import htmlmin from 'gulp-htmlmin';
import newer from 'gulp-newer';
import sourcemaps from 'gulp-sourcemaps';
import sass from 'gulp-sass';
import size from 'gulp-size';
import cssnano from 'gulp-cssnano';
import autoprefixer from 'gulp-autoprefixer';
import rename from 'gulp-rename';
import babel from 'gulp-babel';
import del from 'del';
import runSequence from 'run-sequence';
import shell from 'gulp-shell';

// Constants
const reload = browserSync.reload;

// // Bundle all javascript files
// gulp.task('webpack', () => {
//   return gulp.src('timetracker/static/timetracker/js/main.js')
//     .pipe(webpack(require('./webpack.config.js')))
//     .pipe(gulp.dest('timetracker/static/timetracker/js/'));
// });

/**
 * Compile and automatically prefix stylesheets
 */
gulp.task('styles', () => {
  const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
  ];

  // For best performance, don't add Sass partials to `gulp.src`
  return gulp.src([
    'timetracker/static/timetracker/scss/*.scss'
  ])
  .pipe(newer('timetracker/static/timetracker/css'))
  .pipe(sourcemaps.init())
  .pipe(sass({precision: 10}).on('error', sass.logError))
  .pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
  // // Concatenate and minify styles
  .pipe(cssnano())
  .pipe(size({title: 'styles'}))
  .pipe(sourcemaps.write('./'))
  .pipe(rename('styles.min.css'))
  .pipe(gulp.dest('timetracker/static/timetracker/css'))
  .pipe(gulp.dest('static/timetracker/css'));
});


/**
 * Collectstatic files
 */
gulp.task('collectstatic', shell.task([
  'docker-compose run web python manage.py collectstatic --noinput'
  ]
));

/**
 * Run webpack command to bundle files
 */
gulp.task('webpack', shell.task([
  'webpack']));

// Watch files for changes
gulp.task('serve', ['styles'], () => {
  browserSync({
      logPrefix: 'Timetracker',
      notify: true,
      port: 8081,
      proxy: "localhost:8080",
  });

  gulp.watch(['timetracker/static/timetracker/scss/*.scss'], ['styles', reload]);
  gulp.watch(['timetracker/static/timetracker/js/**/*.jsx'], ['webpack', reload]);
  gulp.watch(['timetracker/templates/timetracker/*.html']).on('change', reload);
});
