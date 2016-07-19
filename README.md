# adminPlan

![alt](https://raw.githubusercontent.com/flyingSprite/adminPlan/master/app/favicon.ico)

## 参考 ##

* Angular-ui-router + Require.js实现按需加载，参考：[angular-require](https://github.com/Treri/angular-require)
* 使用gulp打包require.js依赖[https://segmentfault.com/a/1190000002876583](https://segmentfault.com/a/1190000002876583)

## What admin plan need to do? ##

* Add the knowledge you have learned.
* Add what you feel beautiful things.


## What features must be in v1.0.0? ##

* Support jQuery, bootstrap, fontawesome
* Support JsLint
* Using sass to develop style.
* Using angular to develop framework.
* Pack all public js files in one file.
* Pack all public css files in one file.
* Pack all angular directive files in one file.
* Realize demand loading angular controller js files.

## Architecture Design ##

## Framework Design ##

## Pack stategy ##

### Common utility framework ###

* 公共的组建需要直接在index.html中加载，比如`jQuery`和`Bootstrap`;
* 公共组建包含的`js文件`文件打包在同一个`js文件`中;
* 公共组建包含的`css文件`文件打包在同一个`css文件`中;

### Angular design ###

* Use `angular-ui-route` to build all project.
* Use `angular-translate` to support internationalization.
* Use `angularModule.constant()` [http://www.tuicool.com/articles/3Mbi2y6](http://www.tuicool.com/articles/3Mbi2y6)

### Editor design ###

## Credits ##

* Angular Material - [https://material.angularjs.org/latest/](https://material.angularjs.org/latest/)
* Angular 瀑布流[Angular-masonry](https://github.com/passy/angular-masonry)
* Animate.css - [http://daneden.github.io/animate.css/](http://daneden.github.io/animate.css/)
* jQuery - [http://jquery.com](http://jquery.com)
* Use `jQuery-slimScroll` to design scroll.
* Material Design Icon - [http://zavoloklom.github.io/material-design-iconic-font/icons.html](http://zavoloklom.github.io/material-design-iconic-font/icons.html)
* Moment JS - [http://momentjs.cn/](http://momentjs.cn/)
* Use `codemirror` to edit markdown.




## Modify Design ##

### [Material design icons](https://materialdesignicons.com/) 和 [Font awesome](http://fontawesome.io/) ###

测试版本：

`Material design icons` : 0.1.0
`Font awesome` version : 4.6.0

两种icons都能满足开发基本需求，都提供了完善的使用和教程。

`Material design icons`的缺陷在于一下几点：
* 那道墙的原因，打开icon library站点，是Google的站点，无法正常的访问
* 与文字同在一行排列时，默认情况下，不是垂直居中，位置偏上，需要另外调节
* 使用`Material Angular`、 `Material UI`和原生写法，都有区别


## Console ##
Use [gulp-util](https://www.npmjs.com/package/gulp-util) to print log.
Use [chalk](https://github.com/chalk/chalk) to print log with different color;


## Some Useful ##

Credits

Bootstrap - http://getbootstrap.com
jQuery - http://jquery.com
AngularJs - https://angularjs.org/
Bower - http://bower.io/
GruntJs - http://gruntjs.com
Angular Loading Bar - http://chieffancypants.github.io/angular-loading-bar/
Angular UI Router - https://github.com/angular-ui/ui-router
OC Lazy Load for AngularJs - https://github.com/ocombe/ocLazyLoad
Animate.css - http://daneden.github.io/animate.css/
Auto Size Textarea - http://www.jacklmoore.com/autosize/
Bootgrid - https://github.com/rstaib/jquery-bootgrid
Date Time Picker - http://eonasdan.github.io/bootstrap-datetimepicker/
Bootstrap Select - http://silviomoreto.github.io/bootstrap-select/
Bootstrap Wizard - http://vadimg.com/twitter-bootstrap-wizard-example/
Chosen - http://harvesthq.github.io/chosen/
EasyPieChart - http://rendro.github.io/easy-pie-chart/
Color Picker - http://acko.net/blog/farbtastic-jquery-color-picker-plug-in/
Simple File Input - http://jasny.github.com/bootstrap/javascript/#fileinput
Flot Chart - http://www.flotcharts.org/
Full Calendar - http://fullcalendar.io
Input Mask - http://blog.igorescobar.com
Material Design Icon - http://zavoloklom.github.io/material-design-iconic-font/icons.html
MediaELement JS - http://mediaelementjs.com/
Moment JS - http://momentjs.com/
Malihu Content Scroller - http://manos.malihu.gr/jquery-custom-content-scroller/
NoUiSlider - http://refreshless.com/nouislider/
Simple Weather - http://simpleweatherjs.com/
SparkLine Chart - http://omnipotent.net/jquery.sparkline/
SummerNote - http://summernote.org
Waves - https://github.com/fians/Waves
Material Shdow - https://github.com/mrmlnc/material-shadows
Roboto Font - https://www.google.com/fonts/specimen/Roboto
Shadow Light Font - https://www.google.com/fonts/specimen/Shadows+Into+Light
ng-table - http://ng-table.com/
Bootstrap SweetAlert - http://lipis.github.io/bootstrap-sweetalert/


## LOG ##

* 2016-07-07
> Using require to develop directives.
> Add Eslint in this project.


