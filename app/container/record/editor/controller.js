define(['adminApp', 'ui-codemirror'], function (adminApp) {

  adminApp.controller('EditorController', function ($scope, $http, $stateParams, breadcrumb, adminHttp){

    breadcrumb.list = [{sref: 'main.record.list', title: "Blog List"},
                       {sref: '', title: 'Editor'}]

    var self = this;

    self.editorOptions = {
      lineWrapping : true,
      lineNumbers: true,
      mode: 'markdown'
    };
    var blogObjectList = ['id', 'title', 'type', 'content', 'currentTime'];
    self.blog = {
      title: '',
      type: '',
      content: ''
    };

    self.isUpdateModel = false;

    function initEditorController () {
      var $_id = $stateParams.id;
      if ($_id) {
        adminHttp({method: 'GET', url: '/blog/info?id=' + $_id})
          .success(function(data){
            console.log(data);
            if(data){
              self.isUpdateModel = true;
              objectCopy(blogObjectList, data, self.blog);
            } else {
              self.isUpdateModel = false;
            }
          })
          .error(function (err) {
            console.log("sssss");
            self.isUpdateModel = false;
          });
      }
    }

    function objectCopy (objectList, from, to) {
      if (typeof(objectList) === 'object'){
        for(obj in objectList){
          to[objectList[obj]] = from[objectList[obj]];
        }
      }
    };

    self.submitBlog = function () {
      if(self.blog === undefined || self.blog.title === undefined
        || self.blog.title === ''){
        return ;
      }

      var method = self.isUpdateModel ? 'PUT' : 'POST';

      // Send a post record to web server.
      adminHttp({url: '/blog', data: self.blog, method: method})
      .success(function (response){
        console.log("success");
      });

    };

    initEditorController();
  });

});
