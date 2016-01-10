
## 使用`d3`创建一个中心点 ##

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