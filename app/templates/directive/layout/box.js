
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
        settingOptions: '@',
        collapse: '@',
        close: '@'
      },
      template:
          '<div class="x_panel tile">'
        + '  <div class="x_title">'
        + '    <h2>{{title}}<small>{{subTitle}}</small></h2>'
        + '    <ul class="nav navbar-right panel_toolbox">'
        + '      <li ng-show="collapse"><a class="collapse-link"><i class="fa fa-chevron-up"></i></a></li>'
        + '      <li ng-show="setting" class="dropdown">'
        + '        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>'
        + '        <ul class="dropdown-menu" role="menu">'
        + '          <li><a href="#">Settings 1</a>'
        + '          </li>'
        + '          <li><a href="#">Settings 2</a>'
        + '          </li>'
        + '        </ul>'
        + '      </li>'
        + '      <li ng-show="close"><a class="close-link"><i class="fa fa-close"></i></a></li>'
        + '    </ul>'
        + '    <div class="clearfix"></div>'
        + '  </div>'
        + '  <div class="x_content" ng-transclude>'
        + '    xxxxxxx'
        + '  </div>'
        + '</div>',
      transclude: true,
      controller: ['$scope', function($scope) {
        $scope.title = (!$scope.title || $scope.title === '')
            ? 'Title'
            : $scope.title;
        $scope.setting = (!!$scope.settingOptions);
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
