define(["adminApp","d3"],function(e,t){e.controller("D3LoadSVGController",function(e,l){l.title="D3",l.subTitle="Load SVG";var a=this;a.title="Load SVG file",a.markTemplate="marks/d3/loadSVG.md",a.info="在一个div上添加加载一个SVG文件";var n=t.select("#d3select").append("svg").style("width","100%").style("height","100%").style("color","#777"),i=parseInt(n.style("width").replace("px","")),o=parseInt(n.style("height").replace("px","")),d=n.append("g").attr("transform","translate("+i/2+", "+o/2+")");t.xml("static/svg/d3.svg","image/svg+xml",function(e,t){if(e)throw e;var l=document.importNode(t.documentElement,!0);d.select(function(){this.appendChild(l.cloneNode(!0))})})})});