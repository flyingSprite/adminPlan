define(['d3', 'angular', 'angular-ui-router'], function (d3) {

  var app = angular.module('app.dashboard.controller', ['ui.router']);
  app.controller('dashboardIndexController', function ($scope, breadcrumb){

    breadcrumb.title = 'Dashboard';
    breadcrumb.subTitle = 'Dashboard Panel';

    var self = this;

    self.info = {
      centerPoint: '在一个div的最中心添加一个点'
    };

    var d3Layout = {
      init: function () {
        this.centerPoint();
      },
      centerPoint: function () {
        var scene = d3.select('#center-point').append('svg').style('width', '100%').style('height', '100%').style('color', '#777');
        var width = parseInt(scene.style('width').replace('px', ''));
        var height = parseInt(scene.style('height').replace('px', ''));

        var g = scene.append('g').attr('transform', 'translate(' + width / 2 + ', ' + height / 2 + ')');

        var center = g.append('circle')
              .attr('cx', 0)
              .attr('cy', 0)
              .attr('r', 5)
              .attr('class', 'node-point');
      }
    };

    d3Layout.init();

  });
});