
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');


var commonCssFiles = [
  'bower_components/bootstrap/dist/css/bootstrap.min.css'
];

var commonJsFiles = [
  'bower_components/jquery/dist/jquery.min.js',
  'bower_components/bootstrap/dist/js/bootstrap.min.js'
];

var directiveFiles = [
  'app/templates/directive/directive.js',
  'app/templates/directive/**/*.js'
];

var serviceFiles = [
  'app/templates/services/**/*.js',
  'app/templates/services/index.js'
];

var jqueryModules = [
  'bower_components/jquery-slimscroll/jquery.slimscroll.min.js'
];


// Gulp task demo.
gulp.task('demo', function () {
  console.log('This is a Gulp test.');
});

// Let all common js files concat in a file.
// The file is app/dest/common/common.min.js .
gulp.task('commonJs', () => {
  return gulp.src(commonJsFiles)
    .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(concat('common.min.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('app/dest/common'));
});

// Let all common css files concat in a file.
// The file is app/dest/common/common.min.css .
gulp.task('commonCss', () => {
  return gulp.src(commonCssFiles)
    .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(concat('common.min.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('app/dest/common'));
});

/* 将container中的js文件单独压缩到dist中 */
gulp.task('containerJs', () => {
  return gulp.src('app/container/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('app/dest/container'));
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
    .pipe(gulp.dest('app/dest/container'));
});

gulp.task('apDirective', function () {
  return gulp.src(directiveFiles)
    // .pipe(rename({ suffix: '.all' }))
    .pipe(concat('ap.directive.all.js'))
    .pipe(gulp.dest('app/dest/'))

    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('app/dest/'));
});

gulp.task('apService', function () {
  return gulp.src(serviceFiles)
    // .pipe(rename({ suffix: '.all' }))
    .pipe(concat('ap.service.all.js'))
    .pipe(gulp.dest('app/dest/'))

    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('app/dest/'));
});

gulp.task('jqueryModule', function () {
  return gulp.src(jqueryModules)
    .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(concat('jquery.modules.min.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('app/dest/common'));
});

gulp.task('default', [
  'apDirective',
  'apService',
  'commonJs',
  'commonCss',
  'containerJs',
  'containerHtml',
  'jqueryModule'
]);
