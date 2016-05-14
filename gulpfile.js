
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');

gulp.task('demo', function () {
  console.log('This is a Gulp test.');
});

/* 将container中的js文件单独压缩到dist中 */
gulp.task('container-js', () => {
  return gulp.src('app/container/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('app/dest/container'));
});

gulp.task('container-html', function () {
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

gulp.task('default', ['container-js', 'container-html']);
