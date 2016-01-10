define(['adminApp', 'd3'], function (adminApp, d3) {

  //var app = angular.module('app.d3', ['ui.router']);
  adminApp.controller('D3LoadSVGController', function ($scope, breadcrumb){
    breadcrumb.title = 'D3';
    breadcrumb.subTitle = 'Load SVG';
    var self = this;

    self.title = 'Load SVG file';
    self.markTemplate = 'marks/d3/loadSVG.md';
    self.info = '在一个div上添加加载一个SVG文件';

    var scene = d3.select('#d3select').append('svg').style('width', '100%').style('height', '100%').style('color', '#777');
    var width = parseInt(scene.style('width').replace('px', ''));
    var height = parseInt(scene.style('height').replace('px', ''));

    var g = scene.append('g').attr('transform', 'translate(' + width / 2 + ', ' + height / 2 + ')');

    d3.xml("static/svg/d3.svg", "image/svg+xml", function(error, xml) {
      if (error) throw error;

      var importedNode = document.importNode(xml.documentElement, true);
      g.select(function () {
        this.appendChild(importedNode.cloneNode(true));
      });
    });
  });
});
