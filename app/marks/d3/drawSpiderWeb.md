## 使用`d3`绘制一个虚拟的蜘蛛网 ##

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

绘制一个蜘蛛网所需要的参数：
```javascript
var segments = 12;
var r = width / 2;
var defaultTierR = 40;
var tierR = 30;
var tiers = ( r - defaultTierR) / tierR;
```

绘制蜘蛛网所需要的点：
```javascript
function posititionGenerator (segments, r, defaultTierR, tierR, tiers) {
    // Default posititions
    var posititions = {
        center : {x: 0, y: 0},
        branchs : [],
        nodes: []
    };

    // Get branch top positition
    for (var i = 0; i < segments; i ++) {
        var theta = ((2 * Math.PI) / segments) * i;
        var branchPosi = {
          x: r * Math.cos(theta),
          y: r * Math.sin(theta),
        };
        posititions.branchs.push(branchPosi);
    }

    /**
    * Get node from net.
    *
    *   [
    *       [{}, {}, {}, {}, {}, {}, {}, {}]
    *
    *       this.info.defaultTiers
    *
    *       [{}, {}, {}, {}, {}, {}, {}, {}]
    *   ]
    */
    for (var i = 0; i < tiers; i ++) {
        var tierPosi = [];
        var newTierR = tierR * i + defaultTierR;
        for (var j = 0; j < segments; j ++) {
          var theta = ((2 * Math.PI) / segments) * j;
          var nodePosi = {
            x: newTierR * Math.cos(theta),
            y: newTierR * Math.sin(theta),
          };
          tierPosi.push(nodePosi);
        }
        posititions.nodes.push(tierPosi);
    }
    return posititions;
}
```

绘制蜘蛛网上的支线
```javascript
    function dashedBranchCreator (posititions, segments, tiers) {
      var branchPosititions = posititions.branchs;
      var nodePosititions = posititions.nodes;
      var lines = [];

      for ( var i = 0; i < tiers; i ++ ) {
        for (var pos = 0; pos < segments; pos ++) {
          var prevPositition = (i === 0) ? {x: 0, y: 0}
            : nodePosititions[i - 1][pos];
          var positition = nodePosititions[i][pos];
          var line = dashednetBeelineCreator(prevPositition, positition);
          lines.push(line);
        }
      }

      var lastTier = nodePosititions[nodePosititions.length - 1];
      for (var pos = 0; pos < segments; pos ++) {
        var prevPositition = lastTier[pos];
        var positition = branchPosititions[pos];
        var line = dashednetBeelineCreator(prevPositition, positition);
        lines.push(line);
      }
    }

    function dashednetBeelineCreator(prevPositition, positition) {
      var line = {
        one: prevPositition,
        two: positition,
        path: group.append('polyline')
                .attr('points', [[prevPositition.x, prevPositition.y], 
                                 [positition.x, positition.y]])
      };
      return line;
    }

```

绘制各层的连线，再次用用到`dashednetBeelineCreator()`方法

```javascript
function dashedTierCreator(posititions) {
  var nodePosititions = posititions.nodes;
  var lines = [];
  for(var i = 0; i < nodePosititions.length; i ++){
    var tierPosititions = nodePosititions[i];
    var prevPositition = tierPosititions[0];
    var isFisrt = true;
    //for (var positition in tierPosititions) {
    for(var j = 0; j < tierPosititions.length; j ++){
      var positition = tierPosititions[j];
      if (!isFisrt) {
        var line = dashednetBeelineCreator(prevPositition, positition);
        prevPositition = positition;
        lines.push(line);
      } else {
        isFisrt = false;
      }
    }
    var line = dashednetBeelineCreator(tierPosititions[0], tierPosititions[tierPosititions.length - 1]);
  }
}
```

绘制蜘蛛网上的各个节点

```javascript
function dashedPointCreator (posititions) {
  var nodePosititions = posititions.nodes;
  var allPosititions = [];
  for(var i = 0; i < nodePosititions.length; i ++ ){
    allPosititions = allPosititions.concat(nodePosititions[i]);
  }
  var nodes = [];
  for(var i = 0; i < allPosititions.length; i ++ ){
    var node = dashednetNodeCreator(allPosititions[i]);
    nodes.push(node);
  }
}

function dashednetNodeCreator (positition) {
  var node = {
    positition: positition,
    point: group.append('circle')
      .attr('class', 'node-dashednet')
      .attr('cx', positition.x)
      .attr('cy', positition.y)
      .attr('r', 5)
  };
  return node;
}
```

调用以上方法，绘制出蜘蛛网：
```javascript
var posititions = posititionGenerator(segments, r, defaultTierR, tierR, tiers);
dashedBranchCreator(posititions, segments, tiers);
dashedTierCreator(posititions);
dashedPointCreator(posititions);
```

