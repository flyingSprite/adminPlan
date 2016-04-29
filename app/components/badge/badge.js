define(['adminApp'], function (adminApp) {
  /**
   * directive 在使用隔离 scope 的时候，提供了三种方法同隔离之外的地方交互。这三种分别是
   * @ 绑定一个局部 scope 属性到当前 dom 节点的属性值。结果总是一个字符串，因为 dom 属性是字符串。
   * & 提供一种方式执行一个表达式在父 scope 的上下文中。如果没有指定 attr 名称，则属性名称为相同的本地名称。
   * = 通过 directive 的 attr 属性的值在局部 scope 的属性和父 scope 属性名之间建立双向绑定。
   */
  adminApp.directive('apBadge', function () {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        badgeData: '='
      },
      template: '<div ng-bind-html="markdownHtml"></div>',
      controller: function ($scope) {
      }
    }
  });
});