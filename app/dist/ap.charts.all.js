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
            averages.unshift([item.timestamp, item.average]);
            maximums.unshift([item.timestamp, item.maximum]);
            minimums.unshift([item.timestamp, item.minimum]);
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
/**
 * Sand-Signika theme for Highcharts JS
 * @author Torstein Honsi
 */

define('highcharts-theme', function() {
  // Load the fonts
  Highcharts.createElement('link', {
    href: 'https://fonts.googleapis.com/css?family=Signika:400,700',
    rel: 'stylesheet',
    type: 'text/css'
  }, null, document.getElementsByTagName('head')[0]);
  // Add the background image to the container
  Highcharts.wrap(Highcharts.Chart.prototype, 'getContainer', function (proceed) {
    proceed.call(this);
    this.container.style.background = 'url(http://www.highcharts.com/samples/graphics/sand.png)';
  });


  Highcharts.theme = {
    colors: ['#f45b5b', '#8085e9', '#8d4654', '#7798BF', '#aaeeee', '#ff0066', '#eeaaee',
        '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
    chart: {
      backgroundColor: null,
      style: {
        fontFamily: 'Signika, serif'
      }
    },
    title: {
      style: {
        color: 'black',
        fontSize: '16px',
        fontWeight: 'bold'
      }
    },
    subtitle: {
      style: {
        color: 'black'
      }
    },
    tooltip: {
      borderWidth: 0
    },
    legend: {
      itemStyle: {
        fontWeight: 'bold',
        fontSize: '13px'
      }
    },
    xAxis: {
      labels: {
        style: {
          color: '#6e6e70'
        }
      }
    },
    yAxis: {
      labels: {
        style: {
          color: '#6e6e70'
        }
      }
    },
    plotOptions: {
      series: {
        shadow: true
      },
      candlestick: {
        lineColor: '#404048'
      },
      map: {
        shadow: false
      }
    },
    // Highstock specific
    navigator: {
      xAxis: {
        gridLineColor: '#D0D0D8'
      }
    } ,
    rangeSelector: {
      buttonTheme: {
        fill: 'white',
        stroke: '#C0C0C8',
        'stroke-width': 1,
        states: {
          select: {
            fill: '#D0D0D8'
          }
        }
      }
    },
    scrollbar: {
      trackBorderColor: '#C0C0C8'
    },
    // General
    background2: '#E0E0E8'
  };

  // Apply the theme
  Highcharts.setOptions(Highcharts.theme);
});


require([
  'chart-cup-monitor',
  'highcharts-theme'
]);
