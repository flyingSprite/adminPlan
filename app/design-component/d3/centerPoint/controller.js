define(['adminApp', 'd3'], function (adminApp, d3) {

  //var app = angular.module('app.d3', ['ui.router']);
  adminApp.controller('D3CenterPointController', function ($scope, breadcrumb){
    breadcrumb.title = 'D3';
    breadcrumb.subTitle = 'Center Point';
    var self = this;

    self.title = 'Center Point';
    self.markTemplate = 'marks/d3/centerPoint.md';
    self.info = '在一个Div的最中心添加一个点。';

    var scene = d3.select('#center-point').append('svg').style('width', '100%').style('height', '100%').style('color', '#777');
    var width = parseInt(scene.style('width').replace('px', ''));
    var height = parseInt(scene.style('height').replace('px', ''));

    var g = scene.append('g').attr('transform', 'translate(' + width / 2 + ', ' + height / 2 + ')');

    var center = g.append('circle')
          .attr('cx', 0)
          .attr('cy', 0)
          .attr('r', 5)
          .attr('class', 'node-point');
  });
});
