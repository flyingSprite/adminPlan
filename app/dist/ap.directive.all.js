
// var apDirective = angular.module('ap.directive', []);

require([
  'angular-slimscroll',
  'date-picker-attr',
  'horizontal',
  'item',
  'item-info',
  'item-news',
  'label-wrapper',
  'layout-card',
  'layout-box',
  'layout-header',
  'layout-progress',
  'media-video',
  'pagination'
]);


'use strict';

define('angular-slimscroll', ['adminApp'], function(adminApp) {

  adminApp
  /**
   here: http://www.tuicool.com/articles/3Mbi2y6
   angular.constant() for inject the apply js file.
   */
  .constant('jquerySlimscroll', [
    {
      name: 'jquerySlimscroll',
      module: true,
      files: [
        'bower_components/jquery-slimscroll/jquery.slimscroll.min.js'
      ]
    }
  ])
  .directive('apSlimscroll', function () {
    return {
      restrict: 'ACE',
      scope: {
        content: '@'
      },
      transclude: true,
      template: '<div class="ap-slimscroll-content" ng-transclude><div>',
      link: ['$scope', 'element',
        function ($scope, element) {
          var $ = window.$;
          $(element).slimscroll({
            height: 'auto'
          });
        }
      ],
      controller: ['$scope', function() {
      }]
    };
  });
});

'use strict';

define('date-picker-attr', ['adminApp'], function(adminApp) {
  //https://docs.angularjs.org/api/ng/service/$parse
  adminApp.directive('datePickerAttr', ['$parse', function () {
    return {
      require: '?ngModel',
      restrict: 'A',
      scope: {
        ngModel: '='
      },
      controller: ['$scope', function() {
      }],
      link: function($scope, element, attr, ngModel){
        // Specify how UI should be updated
        ngModel.$render = function() {
          element.val(ngModel.$viewValue || '');
        };
        // Listen for change events to enable binding
        element.on('blur keyup change', function() {
          $scope.$apply(read);
        });
        read(); // initialize
        // Write data to the model
        function read() {
          var val = element.val();
          ngModel.$setViewValue(val);
        }
        $(element).datetimepicker({
          format: 'YYYY-MM-DD hh:mm:ss'
        });
        // element.upload({
        //   success: function(data) {
        //     $parse(attr['ngModel']).assign($scope, data);
        //     $scope.$apply();
        //   },
        // });
      }
    };
  }]);
});
'use strict';

define('horizontal', ['adminApp'], function(adminApp) {

  adminApp.directive('apHorizontal', function () {
    return {
      restrict: 'ACE',
      scope: {
        img: '@',
        content: '@'
      },
      // template: '<div ng-bind-html="markdownHtml"></div>',
      templateUrl: 'templates/directive/horizontal/index.html',
      controller: ['$scope', function () {
      }]
    };
  });
});



'use strict';

define('item', ['adminApp'], function(adminApp) {

  adminApp.directive('apItemArticle', function () {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        url: '@',
        content: '@',
        img: '@',
        author: '@',
        date: '@',
        comment: '@',
        authorUrl: '@'
      },
      templateUrl: '/templates/directive/item/index.html',
      controller: ['$scope', function() {
        // console.log('test => ', $scope.img);
      }]
    };
  });
});
'use strict';

define('item-info', ['adminApp'], function(adminApp) {

  adminApp.directive('apItemInfo', function () {
    return {
      restrict: 'E',
      scope: {
        content: '@',
        date: '@'
      },
      template: '<div class="item-info item-info-light">'
        + '<Strong class="item-info-title">{{date}}</Strong>'
        + '<span>{{content}}</span>'
        + '</div>',
      controller: ['$scope', function($scope) {
        // console.log('test => ', $scope.img);
        if (!$scope.date) {
          $scope.date = '2016-07-01';
        }
        if ($scope.content) {
          $scope.content = 'Default content';
        }
      }]
    };
  });
});
'use strict';

define('item-news', ['adminApp'], function(adminApp) {

  adminApp.directive('apItemNews', function () {
    return {
      restrict: 'E',
      scope: {
        website: '@',
        websiteUrl: '@',
        name: '@',
        date: '@',
        newsHref: '@'
      },
      template: '<div class="item-news">'
        + '<div>'
        + '  <span class="label label-primary">'
        + '    <a class="site-link" href="{{ websiteUrl }}" target="_black">{{ website }}</a>'
        + '  </span>'
        + '  <div class="pull-right">'
        + '    <i class="fa fa-clock-o" aria-hidden="true"></i>&nbsp;{{ date }}'
        + '  </div>'
        + '</div>'
        + '<div class="title">'
        + '  <a href="{{ newsHref }}" target="_black">{{ name }}</a>'
        + '</div>'
        + '</div>',
      controller: ['$scope', function() {
      }]
    };
  });
});


'use strict';

/**
 * MUST use plugin.js
 */
define('layout-box', ['adminApp'], function(adminApp) {

  adminApp.directive('apBox', function () {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        subTitle: '@',
        defaultHidden: '@',
        showEdit: '@',
        editAction: '&',
        collapse: '@',
        close: '@'
      },
      template:
        '<div class="x_panel tile">' +
          '<div class="x_title">' +
            '<h2>{{title}}<small>{{subTitle}}</small></h2>' +
            '<ul class="nav navbar-right panel_toolbox">' +
              '<li ng-show="collapse"><a class="collapse-link"><i class="fa fa-chevron-up"></i></a></li>' +
              '<li ng-show="toShowEdit"><a ng-click="editAction()"><i class="fa fa-edit"></i></a></li>' +
              '<li ng-show="false" class="dropdown">' +
                '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>' +
                '<ul class="dropdown-menu" role="menu">' +
                  '<li><a href="#">Test 1</a></li>' +
                  '<li><a href="#">Test 2</a></li>' +
                '</ul>' +
              '</li>' +
              '<li ng-show="close"><a class="close-link"><i class="fa fa-close"></i></a></li>' +
            '</ul>' +
            '<div class="clearfix"></div>' +
          '</div>' +
          '<div class="x_content" ng-transclude></div>' +
        '</div>',
      transclude: true,
      controller: ['$scope', function($scope) {
        $scope.title = (!$scope.title || $scope.title === '')
            ? 'Title'
            : $scope.title;
        $scope.setting = (!!$scope.settingOptions);
        $scope.toShowEdit = $scope.showEdit === 'true';

        $scope.$watch('showEdit', function() {
          // console.log($scope.showEdit);
          $scope.toShowEdit = $scope.showEdit === 'true';
        });
      }],
      link: function($scope, element) {
        var $$element = $(element),
          $$panel = $$element.find('.x_panel'),
          $$collapse = $$element.find('.collapse-link'),
          $$content = $$element.find('.x_content'),
          $$icon = $$collapse.find('i');

        // If default hidden, to hide the x_content
        if ($scope.defaultHidden) {
          $$content.slideToggle(0, function(){
            $$panel.removeAttr('style');
          });
          $$icon.toggleClass('fa-chevron-up fa-chevron-down');
        }

        // When click collapse-link a
        $$element.on('click', '.collapse-link', function() {
          if ($$panel.attr('style')) {
            $$content.slideToggle(200, function(){
              $$panel.removeAttr('style');
            });
          } else {
            $$content.slideToggle(200);
            $$panel.css('height', 'auto');
          }
          $$icon.toggleClass('fa-chevron-up fa-chevron-down');
        });

        // Close the box
        $$element.on('click', '.close-link', function() {
          $$panel.remove();
        });
      }
    };
  });
});


/**
 * Design Card
 *
 * @author Quesle
 * @github Quesle
 * @email zrwuxian@126.com
 */
define('layout-card', ['adminApp'], function(adminApp) {
  adminApp.directive('apComponent', function () {
    return {
      restrict: 'E',
      scope: {
        componentName: '@',
        className: '@',
        code: '@'
      },
      transclude: true,
      template: '<div class="row">'
      + '<div class="col-lg-12 col-md-12 col-sm-12 field-line">'
      + '<div class="col-lg-2 col-md-2 col-sm-2"><strong>Component:</strong></div>'
      + '<div class="col-lg-10 col-md-10 col-sm-10">{{componentName}}</div></div>'
      + '<div class="col-lg-12 col-md-12 col-sm-12 field-line">'
      + '<div class="col-lg-2 col-md-2 col-sm-2"><strong>Class Name:</strong></div>'
      + '<div class="col-lg-10 col-md-10 col-sm-10">{{className}}</div></div>'
      + '<div class="col-lg-12 col-md-12 col-sm-12 field-line">'
      + '<div class="col-lg-2 col-md-2 col-sm-2"><strong>Code:</strong></div>'
      + '<div class="col-lg-10 col-md-10 col-sm-10">{{code}}</div></div>'
      + '</div>'
    };
  })
  .directive('apCard', function () {
    return {
      restrict: 'E',
      scope: {},
      transclude: true,
      template: '<div class="card-sample normal-font" ng-transclude></div>'
    };
  })
  .directive('apCardRadius', function() {
    return {
      restrict: 'E',
      scope: {},
      transclude: true,
      template: '<div class="card-sample-radius" ng-transclude></div>'
    };
  });
});


define('layout-header', ['adminApp'], function(adminApp) {
  adminApp.directive('apHeaderNormal', function() {
    return {
      restrict: 'E',
      scope: {
        title: '@'
      },
      transclude: true,
      template: '<div class="header-normal">{{title}}</div>'
    };
  });
});


define('layout-progress', ['adminApp'], function(adminApp) {
  adminApp.directive('apProgress', function() {
    return {
      restrict: 'E',
      scope: {
        progress: '='
      },
      template: '<div class="progress">'
      + '<div class="progress-bar" role="progressbar" aria-valuenow="{{progress}}" aria-valuemin="0" aria-valuemax="100" style="width: {{progress}}%;">'
      + '{{progress}}%</div>'
      + '</div>'
    };
  });
});


define('layout-tab', ['adminApp', function(adminApp) {
  adminApp.directive('apTabContext', function() {
    return {
      restrict: 'E',
      scope: {},
      transclude: true,
      template: ''
    };
  })
  .directive('apTab', function() {
    return {
      restrict: 'E',
      scope: {},
      transclude: true,
      template: ''
    };
  });
}]);



'use strict';

/**
 * MUST use plugin.js
 */
define('media-video', ['adminApp'], function(adminApp) {

  adminApp.directive('apVideo', function () {
    return {
      restrict: 'E',
      scope: {
        src: '@'
      },
      template:'<div class="video-wrapper"><video id="video-demo" width="300" height="300"></video></div>',
      transclude: true,
      controller: [function() {
      }]
    };
  });
});

'use strict';

define('pagination', ['adminApp'], function(adminApp) {
  adminApp.directive('apPaginate', function () {
    return {
      restrict: 'ACE',
      scope: {
        total: '@',
        page: '@',
        size: '@',
        click: '='
      },
      // template: '<div ng-bind-html="markdownHtml"></div>',
      templateUrl: 'templates/directive/pagination/index.html',
      controller: ['$scope', function ($scope) {
        $scope.currentPage = $scope.page;
        $scope.totalPages = $scope.size;

        $scope.toPage = function (num) {
          click(num);
        };

        $scope.prevPage = function () {
          var currentPage = $scope.currentPage - 1;
          currentPage = currentPage < 1 ? 1 : currentPage;
          click(currentPage);
        };

        $scope.nextPage = function () {
          var currentPage = parseInt($scope.currentPage) + 1;
          currentPage = currentPage > $scope.totalPages ? $scope.totalPages : currentPage;
          click(currentPage);
        };

        $scope.getNumber = function () {
          var totalPages = parseInt($scope.totalPages);
          var currentPage = parseInt($scope.currentPage);
          var arr = [];
          if (totalPages <= 9) {
            return addArray(arr, 1, totalPages);
          } else {
            if ( currentPage <= 4) {
              addArray(arr, 1, currentPage + 1);
              arr.push('...');
              addArray(arr, totalPages - 1, totalPages);
            }

            else if (currentPage > totalPages - 4){
              addArray(arr, 1, 2);
              arr.push('...');
              addArray(arr, currentPage - 1, totalPages);
            }
            else {
              addArray(arr, 1, 2);
              arr.push('...');
              addArray(arr, currentPage - 1, currentPage + 1);
              arr.push('...');
              addArray(arr, totalPages - 1, totalPages);
            }
            return arr;
          }
        };

        $scope.$watch(function () { return $scope.page; }, function() {
          initPager();
        });

        $scope.$watch(function () { return $scope.total; }, function() {
          initPager();
        });

        $scope.$watch(function () { return $scope.size; }, function() {
          initPager();
        });

        function initPager() {
          var total = $scope.total;
          var size = $scope.size;
          $scope.currentPage = $scope.page;
          $scope.totalPages = total % size > 0 ? parseInt(total / size) + 1 : total / size;
        }

        function click(pageNumber) {
          if ($scope.click) {
            $scope.click(pageNumber);
          }
        }

        function addArray(arr, start, end) {
          for (start; start <= end; start ++) {
            arr.push(start);
          }
          return arr;
        }
      }]
    };
  });
});

'use strict';

define('label-wrapper', ['adminApp'], function(adminApp) {

  adminApp.directive('apLabelWrapper', function () {
    return {
      restrict: 'E',
      scope: {
        label: '@',
        for: '@'
      },
      template: '<div class="form-group">'
        + '  <div class="col-md-2 col-sm-3 col-xs-4">'
        + '    <label class="control-label" for="{{ for }}"'
        + '           style="line-height: 30px">{{ label }}</label>'
        + '  </div>'
        + '  <div class="col-md-10 col-sm-9 col-xs-8" ng-transclude></div>'
        + '</div>',
      transclude: true,
      controller: ['$scope', function($scope) {
        if ($scope.label === undefined || $scope.label === '') {
          $scope.label = 'Default label';
          // console.warn('Please set ap-label-wrapper element label argument value.');
        }
      }]
    };
  });
});
