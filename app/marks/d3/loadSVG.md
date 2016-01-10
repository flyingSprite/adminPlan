
## 使用`d3`加载一个`SVG`文件 ##

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

将在`svg`文件，并放到`group`中:
```javascript
d3.xml("static/svg/d3.svg", "image/svg+xml", function(error, xml) {
    if (error) throw error;
    var importedNode = document.importNode(xml.documentElement, true);
    group.select(function () {
        this.appendChild(importedNode.cloneNode(true));
    });
});
```