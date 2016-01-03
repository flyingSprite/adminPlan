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
        this.loadSvg();
      },
      centerPoint: function () {
        this.createCenterPoint('center-point');
      },
      loadSvg: function () {
        // var scene = this.createScene('load-svg-file');
        // console.log("xxvzxcv");
        // scene.append("svg")
        //   .attr("data", "static/svg/d3.svg")
        //   .attr("width", 90)
        //   .attr("height", 90)
        //   .attr("type", "image/svg+xml");
        var that = this;
        d3.xml("static/svg/d3.svg", "image/svg+xml", function(error, xml) {
          if (error) throw error;

          var importedNode = document.importNode(xml.documentElement, true);

          var g = that.createG('load-svg-file')
            .each(function (x, y) {
              this.appendChild(importedNode.cloneNode(true));
            });

        });
      },
      createScene: function (id) {
        return d3.select('#' + id).append('svg').style('width', '100%').style('height', '100%').style('color', '#777');
      },
      getSceneWidth: function (scene){
        return parseInt(scene.style('width').replace('px', ''));
      },
      getSceneHeight: function (scene){
        return parseInt(scene.style('height').replace('px', ''));
      },
      createG: function (id) {
        var scene = this.createScene(id);
        var width = this.getSceneWidth(scene);
        var height = this.getSceneHeight(scene);

        return scene.append('g')
          .attr('width', width)
          .attr('height', height)
          .attr('transform', 'translate(' + width / 2 + ', ' + height / 2 + ')scale(0.3)');
      },
      createCenterPoint: function (id) {
        var scene = this.createScene(id);
        var width = this.getSceneWidth(scene);
        var height = this.getSceneHeight(scene);

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