
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var concat = require("gulp-concat");
var sourcemaps = require('gulp-sourcemaps');

var commonJsFiles = [
  'bower_components/jquery/dist/jquery.min.js',
  'bower_components/bootstrap/dist/js/bootstrap.min.js'
];
var commonCssFiles = [
  'bower_components/bootstrap/dist/css/bootstrap.min.css'
];

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

gulp.task('default', ['commonJs', 'commonCss', 'containerJs', 'containerHtml']);
