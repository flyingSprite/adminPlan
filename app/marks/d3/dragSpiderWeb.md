
## 拖曳整个蜘蛛网 ##
在这里，是为了实现拖拽功能

基础的绘制功能，可查看，[Draw Spider Web](/#/d3/drawSpiderWeb)。
然后加入一下代码，便能实现拖拽的功能了：
```javascript
var dx = width / 2, dy = height / 2;
var drag = d3.behavior.drag().on('drag', function (d){
    dx += d3.event.dx;
    dy += d3.event.dy;
    group.attr('transform', 'translate(' + dx  + ', ' + dy + ')');
});
scene.call(drag);
```

其中`scene`表示`svg`对象，而`d3.event.dx`表示偏移的`x`坐标量，`d3.event.dy`偏移的`y`坐标量