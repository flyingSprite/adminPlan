define(["adminApp","config"],function(t,e){var l=e.rootPath+"container/ngTemplate.html",r=e.rootPath+"container/dashboard/",o=e.rootPath+"container/card/",a=e.rootPath+"container/crawl/",n=e.rootPath+"container/design/",i=e.rootPath+"container/docs/",c=e.rootPath+"container/media/",d=e.rootPath+"container/monitor/",m=e.rootPath+"container/task/",s="main.dashboard.",p="main.card.",u="main.crawl.",h="main.design.",U="main.docs.",C="main.media.",f="main.monitor.",b="main.task.",w=[{title:"Dashboard Index",name:"index",uiSref:s+"index",templateUrl:r+"index.html",controller:"DashboardIndexController",controllerUrl:r+"controller.js"}],j=[{title:"Card Dashboard",name:"dashboard",params:":id",uiSref:p+"dashboard",templateUrl:o+"dashboard/index.html",depsModule:["wu.masonry"],controller:"CardDashboardController",controllerUrl:o+"dashboard/controller.js"}],x=[{title:"Crawl Ltaaa",name:"ltaaa",params:":id",uiSref:u+"ltaaa",templateUrl:a+"ltaaa/index.html",controller:"CrawlLtaaaController",controllerUrl:a+"ltaaa/controller.js"},{title:"Crawl Hot News",name:"hotnews",params:":id",uiSref:u+"hotnews",templateUrl:a+"hotnews/index.html",controller:"CrawlHotnewsController",controllerUrl:a+"hotnews/controller.js"}],g=[{title:"Design Closet",name:"closet",params:":id",uiSref:h+"closet",templateUrl:n+"closet/index.html",controller:"DesignClosetController",controllerUrl:n+"closet/controller.js"}],D=[{title:"Document Subject",name:"subject",params:":id",uiSref:U+"subject",templateUrl:i+"subject/index.html",controller:"DocsSubjectController",controllerUrl:i+"subject/controller.js"},{title:"Document Wiki",name:"wiki",params:":id",uiSref:U+"wiki",templateUrl:i+"wiki/index.html",controller:"DocsWikiController",controllerUrl:i+"wiki/controller.js"}],k=[{title:"Media Video",name:"video",params:":id",uiSref:C+"video",templateUrl:c+"video/index.html",controller:"MediaVideoController",controllerUrl:c+"video/controller.js"}],S=[{title:"Monitor CPU",name:"cpu",params:":id",uiSref:f+"cpu",templateUrl:d+"cpu/index.html",controller:"MonitorCPUController",controllerUrl:d+"cpu/controller.js"}],P=[{title:"Task Detail",name:"detail",params:":id",uiSref:b+"detail",templateUrl:m+"detail/index.html",controller:"TaskDetailController",controllerUrl:m+"detail/controller.js"},{title:"Media Type",name:"type",params:":id",uiSref:b+"type",templateUrl:m+"type/index.html",controller:"TaskMediaTypeController",controllerUrl:m+"type/controller.js"},{title:"Note",name:"note",params:":id",uiSref:b+"note",templateUrl:m+"note/index.html",controller:"TaskNoteController",controllerUrl:m+"note/controller.js"}],M=[w,j,x,g,D,k,S,P],T=[{url:"blog",title:"Blog",templateUrl:l},{url:"card",title:"Card",templateUrl:l},{url:"crawl",title:"Crawl",templateUrl:l},{url:"dashboard",title:"Dashboard",templateUrl:l},{url:"design",title:"Design",templateUrl:l},{url:"docs",title:"Docs",templateUrl:l},{url:"media",title:"Media",templateUrl:l},{url:"task",title:"Task",templateUrl:l},{url:"monitor",title:"Monitor",templateUrl:l}];t.config(["generateProvider",function(t){angular.forEach(T,function(e){t.state(e)}),angular.forEach(M,function(e){angular.forEach(e,function(e){t.router(e)})})}])});