
## 使用`d3`创建一个跳动的点 ##

使用`d3`创建自适应的`svg`对象，并创建一个`<g>`对象:
```javascript
var scene = d3.select('#center-point').append('svg')
    .style('width', '100%')
    .style('height', '100%')
    .style('color', '#777');
var width = parseInt(scene.style('width').replace('px', ''));
var height = parseInt(scene.style('height').replace('px', ''));

var group = scene.append('g')
    .attr('transform', 'translate(' + width / 2 + ', ' + height / 2 + ')');
```

使用`circle`创建一个中心点：

```javascript
var center = group.append('circle')
    .attr('cx', 0)
    .attr('cy', 0)
    .attr('r', 5)
    .attr('class', 'node-point');
```

使这个中心点动起来
```javascript
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
```

点击这个点，出现一个不断放大的圆圈
```javascript
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
          .attr("cy", circle.attr('cy'))
          .attr("r", 1e-6)
          .style("stroke", d3.hsl((i = (i + 10) % 360), 1, .5))
          .style("stroke-opacity", 1)
        .transition()
          .duration(2000)
          .ease(Math.sqrt)
          .attr("r", 100)
          .style("stroke-opacity", 1e-6)
          .remove();
    }
```