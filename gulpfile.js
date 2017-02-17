
var gulp = require('gulp');
var gutil = require('gulp-util');
var chalk = require('chalk');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var eslint = require('gulp-eslint');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');

var jsFile = {
  main: [
    'app/library/adminApp.js',
    'app/library/app.js',
    'app/library/bootstrap.js',
    'app/library/ngRoute.js',
    'app/library/main.js'
  ],
  libCommonJs: [
    'bower_components/jquery/dist/jquery.min.js',
    'bower_components/bootstrap/dist/js/bootstrap.min.js',
    'bower_components/moment/min/moment.min.js',
    'bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
    'bower_components/notifyjs/dist/notify.js'
  ],
  libCommonCss: [
    'bower_components/bootstrap/dist/css/bootstrap.min.css',
    'bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
    'bower_components/font-awesome/css/font-awesome.min.css'
  ],
  libAngularJs: [
    'bower_components/angular/angular.min.js',
    'bower_components/angular-ui-router/release/angular-ui-router.min.js',
    'bower_components/angular-translate/angular-translate.min.js',
    'bower_components/oclazyload/dist/ocLazyLoad.require.min.js'
  ],
  directives: [
    'app/templates/directive/directive.js',
    'app/templates/directive/**/*.js'
  ],
  services: [
    'app/templates/services/**/*.js',
    'app/templates/services/index.js'
  ]
};

function minJs(filename, dir, files) {
  return gulp.src(files)
    .pipe(concat(filename))
    .pipe(gulp.dest(dir))
    .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(dir));
}

function minCss(filename, dir, files) {
  return gulp.src(files)
    .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(concat(filename))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(dir));
}

function minPackage(filename, dir, files) {
  return gulp.src(files)
    // .pipe(rename({ suffix: '.all' }))
    .pipe(concat(filename))
    .pipe(gulp.dest(dir))
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(dir));
}

gulp.task('main', function () {
  return minJs('main.min.js', 'app', jsFile.main);
});
gulp.task('angular', function () {
  return minJs('lib.angular.min.js', 'app/dist/lib', jsFile.libAngularJs);
});
gulp.task('commonJs', function () {
  return minJs('lib.common.min.js', 'app/dist/lib', jsFile.libCommonJs);
});

gulp.task('commonCss', function() {
  return minCss('lib.common.min.css', 'app/dist/lib', jsFile.libCommonCss);
});

gulp.task('package', function() {
  var packages = jsFile.services.concat(jsFile.directives);
  return minPackage('lib.dev.js', 'app/dist/lib', packages);
});

gulp.task('chart', function() {
  var files = ['app/templates/charts/**/*.js'];
  return minPackage('lib.charts.js', 'app/dist/lib', files);
});


gulp.task('lib', ['main', 'angular', 'commonJs', 'commonCss', 'package', 'chart']);

// var directiveFiles = [
//   'app/templates/directive/directive.js',
//   'app/templates/directive/**/*.js'
// ];
//
// var serviceFiles = [
//   'app/templates/services/**/*.js',
//   'app/templates/services/index.js'
// ];

var jqueryModules = [ 'bower_components/jquery-slimscroll/jquery.slimscroll.min.js' ];

// Gulp task demo
gulp.task('demo', function () {
  console.log('This is a Gulp test.');
});

gulp.task('mainCss', function() {
  var csses = [
    'app/static/style/solutions.css',
    'app/static/style/index.css',
    'app/static/style/main.css',
  ];
  return gulp.src(csses)
    .pipe(minifyCss())
    .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(concat('main.min.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('app/dist/common'));
});

/* 将container中的js文件单独压缩到dist中 */
gulp.task('containerJs', function() {
  return gulp.src('app/container/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('app/dist/container'));
});

gulp.task('containerHtml', function () {
  var options = {
    removeComments: true,//清除HTML注释
    collapseWhitespace: true,//压缩HTML
    collapseBooleanAttributes: false,//省略布尔属性的值 <input checked="true"/> ==> <input />
    removeEmptyAttributes: false,//删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttributes: false,//删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: false,//删除<style>和<link>的type="text/css"
    minifyJS: false,//压缩页面JS
    minifyCSS: false//压缩页面CSS
  };
  return gulp.src('app/container/**/*.html')
    .pipe(htmlmin(options))
    .pipe(gulp.dest('app/dist/container'));
});

// gulp.task('apDirective', function () {
//   return gulp.src(directiveFiles)
//     // .pipe(rename({ suffix: '.all' }))
//     .pipe(concat('ap.directive.all.js'))
//     .pipe(gulp.dest('app/dist/'))
//     .pipe(rename({ suffix: '.min' }))
//     .pipe(sourcemaps.init({loadMaps: true}))
//       .pipe(uglify())
//     .pipe(sourcemaps.write('./'))
//     .pipe(gulp.dest('app/dist/'));
// });

// gulp.task('apService', function () {
//   return gulp.src(serviceFiles)
//     // .pipe(rename({ suffix: '.all' }))
//     .pipe(concat('ap.service.all.js'))
//     .pipe(gulp.dest('app/dist/'))
//
//     .pipe(rename({ suffix: '.min' }))
//     .pipe(sourcemaps.init({loadMaps: true}))
//       .pipe(uglify())
//     .pipe(sourcemaps.write('./'))
//     .pipe(gulp.dest('app/dist/'));
// });

// gulp.task('apCharts', function () {
//   return gulp.src(['app/templates/charts/**/*.js'])
//     .pipe(concat('ap.charts.all.js'))
//     .pipe(gulp.dest('app/dist/'))
//
//     .pipe(rename({ suffix: '.min' }))
//     .pipe(sourcemaps.init({loadMaps: true}))
//       .pipe(uglify())
//     .pipe(sourcemaps.write('./'))
//     .pipe(gulp.dest('app/dist/'));
// });

gulp.task('jqueryModule', function () {
  return gulp.src(jqueryModules)
    .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(concat('jquery.modules.min.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('app/dist/common'));
});

/**
 * Use Eslint to check the code.
 */
gulp.task('eslint-templates', function() {
  gulp.src(['app/templates/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(eslint.result(function(results) {
      gutil.log('Eslint:',
        chalk.red(results.warningCount),
        '/',
        chalk.red(results.errorCount),
        chalk.underline.dim(results.filePath)
      );
    }));
});

gulp.task('require', function () {
  return gulp.src(['bower_components/requirejs/require.js'])
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('app/dist/'));
});

gulp.task('eslint-container', function() {
  gulp.src(['app/container/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(eslint.result(function(results) {
      gutil.log('Eslint:',
        chalk.red(results.warningCount),
        '/',
        chalk.red(results.errorCount),
        chalk.underline.dim(results.filePath)
      );
    }));
});

gulp.task('sass', function() {
  return gulp.src('./app/static/style/sass/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(minifyCss())
  .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(concat('main.min.css'))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('app/dist/'));
});

gulp.task('sass-watch', function() {
  gulp.watch('app/static/style/sass/**/*.scss', ['sass']);
});

gulp.task('eslint', ['eslint-templates', 'eslint-container']);

gulp.task('watch', function() {
  gulp.watch('app/templates/**/*.js', ['eslint', 'apDirective', 'apService', 'apCharts']);
  gulp.watch('app/container/**/*.js', ['eslint-container']);
});

gulp.task('dist', [
  'require',
  'angular',
  'apDirective',
  'apCharts',
  'apService',
  'commonJs',
  'commonCss',
  'containerJs',
  'containerHtml',
  'mainCss',
  'jqueryModule',
  'eslint',
  'sass'
]);

gulp.task('build', ['dist']);

gulp.task('default', [
  'dist',
  'watch'
]);
