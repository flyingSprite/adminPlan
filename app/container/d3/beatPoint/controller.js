define(['adminApp', 'd3'], function (adminApp, d3) {

  //var app = angular.module('app.d3', ['ui.router']);
  adminApp.controller('D3BeatPointController', function ($scope, breadcrumb){
    breadcrumb.title = 'D3';
    breadcrumb.subTitle = 'Beat Point';
    var self = this;

    self.title = 'Beat Point';
    self.markTemplate = 'marks/d3/beatPoint.md';
    self.info = '创建一个跳动的点，点击上面的点，会出现意外的效果哦。';

    var scene = d3.select('#center-point').append('svg').style('width', '100%').style('height', '100%').style('color', '#777');
    var width = parseInt(scene.style('width').replace('px', ''));
    var height = parseInt(scene.style('height').replace('px', ''));

    var group = scene.append('g').attr('transform', 'translate(' + width / 2 + ', ' + height / 2 + ')');

    var center = group.append('circle')
          .attr('cx', 0)
          .attr('cy', 0)
          .attr('r', 5)
          .attr('class', 'node-point');

    callStyle();
    function callStyle(){
      center.attr('r', 5);
      center.transition()
          .duration(1000)
          .ease(Math.sqrt)
          .attr('r', 10)
          .style("stroke-opacity", 1e-6)
          .each('end', function () {
            callStyle();
          });
    }
    var i = 0;

    center.on('click', function () {
      particle(center);
      showParticle(center);
    });

    function showParticle(circle){
      setTimeout(function(){
        particle(circle);
      }, 100);
    }

    function particle(circle) {
      group.insert("circle", "rect")
          .attr("cx", circle.attr('cx'))
          .attr("cy", circle.attr('cx'))
          .attr("r", 1e-6)
          .style("stroke", d3.hsl((i = (i + 10) % 360), 1, .5))
          .style("stroke-opacity", 1)
        .transition()
          .duration(2000)
          .ease(Math.sqrt)
          .attr("r", 100)
          .style("stroke-opacity", 1e-6)
          .remove();
      //d3.event.preventDefault();
    }
  });
});
