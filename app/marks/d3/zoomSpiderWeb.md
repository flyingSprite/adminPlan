
## 拖曳整个蜘蛛网 ##
在这里，是为了实现拖拽功能

基础的绘制功能，可查看，[Drag Spider Web](/#/d3/dragSpiderWeb)。
然后加入一下代码，便能实现拖拽的功能了：
```javascript
// 实现放大缩小功能
var zoom = d3.behavior.zoom()
    .scaleExtent([0.1, 10])
    .on('zoom', function (){
        group.attr('transform',
          'translate(' + dx  + ', ' + dy + ')scale(' + d3.event.scale + ')');
    });
scene.call(zoom);
```

其中`scene`表示`svg`对象，而`d3.event.scale`表示缩放的比例，
`scaleExtent([0.1, 10])`表示最小和最大的缩放比例