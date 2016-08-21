'use strict';

define('chart-cup-monitor', ['adminApp'], function(adminApp) {

  adminApp.directive('chartCpuMonitor', function () {
    return {
      restrict: 'A',
      scope: {
        chartId: '@'
      },
      controller: ['$scope', 'api', function($scope, api) {
        api.lastTenCpuMonitor(function(data) {
          var averages = [], maximums = [], minimums = [];
          angular.forEach(data, function(item) {
            averages.push([item.timestamp, item.average]);
            maximums.push([item.timestamp, item.maximum]);
            minimums.push([item.timestamp, item.minimum]);
          });
          success(averages, maximums, minimums);
        });
        function success(averages, maximums, minimums) {
          $('#' + $scope.chartId).highcharts({
            credits: {enabled: false},
            title: { text: null },
            subtitle: { text: null },
            xAxis: {
              type: 'datetime',
              dateTimeLabelFormats: { second: '%Y-%b-%e %H:%M:%S.%L' }
            },
            yAxis: {
              title: {
                text: 'Temperature (%)'
              }
            },
            tooltip: {
              valueSuffix: '%'
            },
            legend: {
              align: 'left',
              verticalAlign: 'bottom',
              borderWidth: 0
            },
            series: [{
              name: 'Average',
              data: averages
            }, {
              name: 'Maximum',
              data: maximums
            }, {
              name: 'Minimum',
              data: minimums
            }]
          });
        }
      }]
    };
  });
});